import React from "react";
import { RiFireFill } from "react-icons/ri";
import { theme } from "../../styles/theme";
import {
  Wrapper,
  LogoBlock,
  LogoText,
  Tagline,
  StatsRow,
  StatCard,
  StatValue,
  StatLabel,
} from "./styledComponents";

export default function Header({ slots, showStats }) {
  const totalBooked = slots.reduce((a, s) => a + s.booked, 0);
  const totalCapacity = slots.reduce((a, s) => a + s.capacity, 0);
  const fullSlots = slots.filter((s) => s.booked >= s.capacity).length;

  return (
    <Wrapper>
      <LogoBlock>
        <LogoText>
          GYM<span>SLOT</span>
        </LogoText>
        <Tagline>
          <RiFireFill style={{ color: theme.warning, verticalAlign: "middle", marginRight: 4 }} />
          Reserve Your Session
        </Tagline>
      </LogoBlock>

      {showStats && (
        <StatsRow>
          <StatCard>
            <StatValue>{totalBooked}</StatValue>
            <StatLabel>Booked</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue color={theme.success}>{totalCapacity - totalBooked}</StatValue>
            <StatLabel>Available</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue color={theme.danger}>{fullSlots}</StatValue>
            <StatLabel>Full</StatLabel>
          </StatCard>
        </StatsRow>
      )}
    </Wrapper>
  );
}