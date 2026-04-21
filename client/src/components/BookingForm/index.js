import React, { useState } from "react";
import { RiCheckLine, RiLoader4Line, RiZzzFill } from "react-icons/ri";
import { bookSlot } from "../../api";
import { Box, BoxTitle, Input, SubmitBtn, FullMessage } from "./styledComponents";

export default function BookingForm({ slot, onBooked, onToast }) {
  const [userName, setUserName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const isFull = slot.booked >= slot.capacity;

  const handleBook = async () => {
    if (!userName.trim()) return onToast("Please enter your name", "error");
    setSubmitting(true);
    try {
      const { slot: updated } = await bookSlot(slot.id, userName.trim());
      setUserName("");
      onToast("Slot booked successfully! 💪", "success");
      onBooked(updated);
    } catch (e) {
      onToast(e.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (isFull) {
    return (
      <Box>
        <BoxTitle>Book a Spot</BoxTitle>
        <FullMessage>
          <RiZzzFill />
          <p>This slot is fully booked.</p>
          <p>Please check another time slot.</p>
        </FullMessage>
      </Box>
    );
  }

  return (
    <Box>
      <BoxTitle>Book a Spot</BoxTitle>
      <Input
        placeholder="Enter your full name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleBook()}
      />
      <SubmitBtn onClick={handleBook} disabled={submitting || !userName.trim()}>
        {submitting
          ? <><RiLoader4Line /> Booking...</>
          : <><RiCheckLine /> Confirm Booking</>}
      </SubmitBtn>
    </Box>
  );
}