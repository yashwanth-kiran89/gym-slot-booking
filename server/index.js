const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Init SQLite
const db = new Database(path.join(__dirname, "gym.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS slots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    time TEXT NOT NULL,
    capacity INTEGER DEFAULT 10,
    booked INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slot_id INTEGER NOT NULL,
    user_name TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (slot_id) REFERENCES slots(id)
  );
`);

// Seed slots if empty
const count = db.prepare("SELECT COUNT(*) as c FROM slots").get();
if (count.c === 0) {
  const insert = db.prepare("INSERT INTO slots (name, time, capacity, booked) VALUES (?, ?, 10, 0)");
  const slots = [
    ["Morning Burn", "06:00 AM – 07:00 AM"],
    ["Rise & Grind", "07:30 AM – 08:30 AM"],
    ["Power Hour", "09:00 AM – 10:00 AM"],
    ["Midday Flex", "12:00 PM – 01:00 PM"],
    ["Lunch Lift", "01:30 PM – 02:30 PM"],
    ["Afternoon Pump", "04:00 PM – 05:00 PM"],
    ["Evening Grind", "06:00 PM – 07:00 PM"],
    ["Night Warrior", "08:00 PM – 09:00 PM"],
  ];
  slots.forEach(([name, time]) => insert.run(name, time));
}

// GET all slots
app.get("/api/slots", (req, res) => {
  const slots = db.prepare("SELECT * FROM slots ORDER BY id").all();
  res.json(slots);
});

// GET bookings for a slot
app.get("/api/slots/:id/bookings", (req, res) => {
  const bookings = db
    .prepare("SELECT * FROM bookings WHERE slot_id = ? ORDER BY created_at DESC")
    .all(req.params.id);
  res.json(bookings);
});

// POST book a slot
app.post("/api/slots/:id/book", (req, res) => {
  const { user_name } = req.body;
  if (!user_name || !user_name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }

  const slot = db.prepare("SELECT * FROM slots WHERE id = ?").get(req.params.id);
  if (!slot) return res.status(404).json({ error: "Slot not found" });

  if (slot.booked >= slot.capacity) {
    return res.status(400).json({ error: "Slot is fully booked" });
  }

  // Check duplicate booking
  const existing = db
    .prepare("SELECT * FROM bookings WHERE slot_id = ? AND LOWER(user_name) = LOWER(?)")
    .get(req.params.id, user_name.trim());
  if (existing) {
    return res.status(400).json({ error: "You already booked this slot" });
  }

  const bookSlot = db.transaction(() => {
    db.prepare("INSERT INTO bookings (slot_id, user_name) VALUES (?, ?)").run(
      req.params.id,
      user_name.trim()
    );
    db.prepare("UPDATE slots SET booked = booked + 1 WHERE id = ?").run(req.params.id);
  });

  bookSlot();

  const updated = db.prepare("SELECT * FROM slots WHERE id = ?").get(req.params.id);
  res.json({ success: true, slot: updated });
});

// DELETE cancel a booking
app.delete("/api/bookings/:bookingId", (req, res) => {
  const booking = db
    .prepare("SELECT * FROM bookings WHERE id = ?")
    .get(req.params.bookingId);

  if (!booking) return res.status(404).json({ error: "Booking not found" });

  const cancel = db.transaction(() => {
    db.prepare("DELETE FROM bookings WHERE id = ?").run(req.params.bookingId);
    db.prepare("UPDATE slots SET booked = booked - 1 WHERE id = ?").run(booking.slot_id);
  });

  cancel();
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`🏋️  Gym Booking API running on http://localhost:${PORT}`));