# GymSlot - Gym Slot Booking System

## Overview

GymSlot is a full-stack web application that allows users to view available gym sessions, book a slot, and cancel existing bookings. Each slot has a fixed capacity of 10 members. Booking is automatically blocked when a slot reaches full capacity.

---

## Tech Stack

Frontend: React.js, Styled Components, React Icons

Backend: Node.js, Express.js

Database: SQLite via better-sqlite3

---

## Project Structure

```
gymv3/
├── server/
│   ├── index.js
│   ├── package.json
│   └── gym.db  (auto-generated on first run)
└── client/
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── api/
        │   └── index.js
        ├── styles/
        │   └── theme.js
        └── components/
            ├── Header/
            │   ├── index.js
            │   └── styledComponents.js
            ├── SlotGrid/
            │   ├── index.js
            │   └── styledComponents.js
            ├── SlotCard/
            │   ├── index.js
            │   └── styledComponents.js
            ├── SlotDetail/
            │   ├── index.js
            │   └── styledComponents.js
            ├── BookingForm/
            │   ├── index.js
            │   └── styledComponents.js
            ├── BookingList/
            │   ├── index.js
            │   └── styledComponents.js
            └── Toast/
                ├── index.js
                └── styledComponents.js
```

---

## Getting Started

### Prerequisites

Make sure Node.js is installed on your machine. You can verify by running the following commands in your terminal.

```
node -v
npm -v
```

If not installed, download it from https://nodejs.org and install the LTS version.

---

### Step 1 - Initialize the Project

Open your terminal and run the following commands.

```
mkdir gymslot
cd gymslot
mkdir server
npx create-react-app client
```

---

### Step 2 - Set Up the Backend

```
cd server
npm init -y
npm install express better-sqlite3 cors
```

Copy the server index.js file into the server folder.

---

### Step 3 - Set Up the Frontend

```
cd ../client
npm install styled-components react-icons
```

Replace the contents of the src folder with the provided component files following the structure shown above.

---

### Step 4 - Run the Backend

Open a terminal and navigate to the server folder.

```
cd server
node index.js
```

You should see the following message in your terminal.

```
Gym Booking API running on http://localhost:4000
```

Keep this terminal open.

---

### Step 5 - Run the Frontend

Open a second terminal and navigate to the client folder.

```
cd client
npm start
```

The application will open automatically in your browser at http://localhost:3000.

---

## API Endpoints

GET /api/slots

Returns a list of all available gym slots with capacity and booking count.

GET /api/slots/:id/bookings

Returns all bookings for a specific slot.

POST /api/slots/:id/book

Books a spot in the specified slot. Requires a JSON body with the user name.

Request body:
```
{
  "user_name": "John Doe"
}
```

DELETE /api/bookings/:id

Cancels a specific booking and frees up the slot capacity.

---

## Business Rules

Each slot has a maximum capacity of 10 members.

A user cannot book the same slot more than once using the same name.

Booking is blocked automatically when a slot is full.

Cancelling a booking immediately makes the spot available again.

---

## Component Overview

App.js manages global state and renders the correct view based on user interaction.

Header displays the application logo and overall booking statistics.

SlotGrid renders all available slots in a responsive grid layout.

SlotCard displays individual slot information including name, time, capacity bar, and booking button.

SlotDetail shows the full detail view for a selected slot including the booking form and list of booked members.

BookingForm handles name input and booking submission for a selected slot.

BookingList displays all members who have booked a slot with the option to cancel each booking.

Toast shows a temporary success or error message after each user action.

---

## Common Issues

If the frontend shows a blank screen or network error, make sure the backend server is running on port 4000 before starting the frontend.

If port 4000 is already in use, run the following command to free it.

```
npx kill-port 4000
```

If npm install fails on the client, try running it with the legacy flag.

```
npm install --legacy-peer-deps
```

---

## Author

Yashwanth Kiran Guvva

GitHub: https://github.com/yashwanth-kiran89

LinkedIn: https://linkedin.com/in/yashwanth-guvva