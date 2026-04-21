import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: ${theme.surface};
  border: 1px solid ${theme.border};
  border-radius: 10px;
  color: ${theme.text};
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  margin-bottom: 28px;
  width: fit-content;

  &:hover {
    border-color: ${theme.accent};
    color: ${theme.accent};
  }
`;

export const DetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SlotTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 40px;
  letter-spacing: 2px;
  color: ${theme.text};
`;

export const TimeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  color: ${theme.textMuted};
  font-size: 14px;

  svg {
    color: ${theme.accent};
  }
`;

export const StatsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.surface};
  border: 1px solid ${theme.border};
  border-radius: 12px;
  padding: 12px 20px;
  min-width: 80px;
`;

export const StatValue = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  color: ${(p) => p.$color || theme.accent};
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-size: 11px;
  color: ${theme.textMuted};
  margin-top: 4px;
  letter-spacing: 1px;
`;

export const BarTrack = styled.div`
  background: ${theme.border};
  border-radius: 99px;
  height: 5px;
  margin-bottom: 28px;
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  border-radius: 99px;
  width: ${(p) => p.$pct}%;
  background: ${(p) =>
    p.$pct >= 100 ? theme.danger : p.$pct >= 80 ? theme.warning : theme.accent};
`;

export const TwoCol = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }
`;