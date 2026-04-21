import React, { useState, useEffect } from "react";
import { RiArrowLeftLine, RiTimeLine } from "react-icons/ri";
import { getBookings, getSlots } from "../../api";
import { theme } from "../../styles/theme";
import BookingForm from "../BookingForm";
import BookingList from "../BookingList";
import {
  Wrapper, BackBtn, DetailHeader, TitleBlock,
  SlotTitle, TimeRow, StatsRow, StatCard, StatValue, StatLabel,
  BarTrack, BarFill, TwoCol,
} from "./styledComponents";

export default function SlotDetail({ slot: initialSlot, onBack, onToast }) {
  const [slot, setSlot] = useState(initialSlot);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async (slotId) => {
    setLoading(true);
    try {
      const data = await getBookings(slotId);
      setBookings(data);
    } catch {
      onToast("Failed to load bookings", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings(slot.id);
  }, [slot.id]);

  const handleBooked = async (updatedSlot) => {
    setSlot(updatedSlot);
    await fetchBookings(updatedSlot.id);
  };

  const handleCancelled = async (bookingId) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    try {
      const all = await getSlots();
      const refreshed = all.find((s) => s.id === slot.id);
      if (refreshed) setSlot(refreshed);
    } catch {}
  };

  const pct = Math.round((slot.booked / slot.capacity) * 100);

  return (
    <Wrapper>
      <BackBtn onClick={onBack}>
        <RiArrowLeftLine /> Back to Slots
      </BackBtn>

      <DetailHeader>
        <TitleBlock>
          <SlotTitle>{slot.name}</SlotTitle>
          <TimeRow>
            <RiTimeLine size={14} />
            {slot.time}
          </TimeRow>
        </TitleBlock>

        <StatsRow>
          <StatCard>
            <StatValue>{slot.booked}</StatValue>
            <StatLabel>Booked</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue $color={slot.booked >= slot.capacity ? theme.danger : theme.success}>
              {slot.capacity - slot.booked}
            </StatValue>
            <StatLabel>Remaining</StatLabel>
          </StatCard>
        </StatsRow>
      </DetailHeader>

      <BarTrack>
        <BarFill $pct={pct} />
      </BarTrack>

      <TwoCol>
        <BookingForm slot={slot} onBooked={handleBooked} onToast={onToast} />
        <BookingList
          bookings={bookings}
          loading={loading}
          onCancelled={handleCancelled}
          onToast={onToast}
        />
      </TwoCol>
    </Wrapper>
  );
}