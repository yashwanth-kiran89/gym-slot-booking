const BASE = "http://localhost:4000/api";

async function apiFetch(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export const getSlots = () => apiFetch("/slots");
export const getBookings = (slotId) => apiFetch(`/slots/${slotId}/bookings`);
export const bookSlot = (slotId, user_name) =>
  apiFetch(`/slots/${slotId}/book`, {
    method: "POST",
    body: JSON.stringify({ user_name }),
  });
export const cancelBooking = (bookingId) =>
  apiFetch(`/bookings/${bookingId}`, { method: "DELETE" });