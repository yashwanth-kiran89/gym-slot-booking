import React from "react";
import { RiTimeLine, RiGroupLine, RiCalendarCheckLine, RiZzzFill } from "react-icons/ri";
import {
  Card,
  CardTop,
  SlotName,
  FullBadge,
  TimeRow,
  BarTrack,
  BarFill,
  CapacityRow,
  SpotsLeft,
  BookBtn,
} from "./styledComponents";

export default function SlotCard({ slot, onClick }) {
  const pct = Math.round((slot.booked / slot.capacity) * 100);
  const isFull = slot.booked >= slot.capacity;

  return (
    <Card $full={isFull} $pct={pct} onClick={() => onClick(slot)}>
      <CardTop>
        <SlotName>{slot.name}</SlotName>
        {isFull && <FullBadge>Full</FullBadge>}
      </CardTop>

      <TimeRow>
        <RiTimeLine size={14} />
        {slot.time}
      </TimeRow>

      <BarTrack>
        <BarFill $pct={pct} />
      </BarTrack>

      <CapacityRow>
        <span>
          <RiGroupLine style={{ verticalAlign: "middle", marginRight: 4 }} />
          {slot.booked}/{slot.capacity} spots
        </span>
        <SpotsLeft $pct={pct}>
          {isFull ? "No spots left" : `${slot.capacity - slot.booked} left`}
        </SpotsLeft>
      </CapacityRow>

      <BookBtn disabled={isFull}>
        {isFull
          ? <><RiZzzFill /> Fully Booked</>
          : <><RiCalendarCheckLine /> Book Session</>}
      </BookBtn>
    </Card>
  );
}