import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.card};
  border: 1px solid ${(p) => (p.$full ? theme.danger : theme.border)};
  border-top: 3px solid ${(p) =>
    p.$full ? theme.danger : p.$pct >= 80 ? theme.warning : theme.accent};
  border-radius: 14px;
  padding: 22px;
  cursor: ${(p) => (p.$full ? "default" : "pointer")};
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${(p) => (p.$full ? theme.danger : theme.accent)};
    transform: ${(p) => (p.$full ? "none" : "translateY(-3px)")};
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const SlotName = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  color: ${theme.text};
  letter-spacing: 1px;
`;

export const FullBadge = styled.span`
  background: ${theme.danger}22;
  color: ${theme.danger};
  border: 1px solid ${theme.danger}44;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 8px;
  text-transform: uppercase;
`;

export const TimeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  color: ${theme.textMuted};
  font-size: 13px;
  margin-bottom: 18px;

  svg {
    color: ${theme.accent};
  }
`;

export const BarTrack = styled.div`
  background: ${theme.border};
  border-radius: 99px;
  height: 5px;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  border-radius: 99px;
  width: ${(p) => p.$pct}%;
  background: ${(p) =>
    p.$pct >= 100 ? theme.danger : p.$pct >= 80 ? theme.warning : theme.accent};
`;

export const CapacityRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  color: ${theme.textMuted};
  margin-bottom: 18px;
`;

export const SpotsLeft = styled.span`
  color: ${(p) =>
    p.$pct >= 100 ? theme.danger : p.$pct >= 80 ? theme.warning : theme.success};
  font-weight: 600;
`;

export const BookBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 11px;
  border-radius: 10px;
  border: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  background: ${(p) => (p.disabled ? theme.border : theme.accent)};
  color: ${(p) => (p.disabled ? theme.textMuted : "#0a0a0f")};

  &:hover:not(:disabled) {
    background: ${theme.accentHover};
  }
`;