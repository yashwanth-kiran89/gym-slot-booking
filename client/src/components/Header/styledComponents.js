import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 28px 0;
  border-bottom: 1px solid ${theme.border};
  margin-bottom: 40px;
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LogoText = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 52px;
  color: ${theme.text};
  letter-spacing: 3px;
  line-height: 1;

  span {
    color: ${theme.accent};
  }
`;

export const Tagline = styled.p`
  font-size: 12px;
  color: ${theme.textMuted};
  letter-spacing: 2px;
  text-transform: uppercase;
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
  justify-content: center;
  background: ${theme.surface};
  border: 1px solid ${theme.border};
  border-radius: 12px;
  padding: 12px 20px;
  min-width: 80px;
`;

export const StatValue = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  color: ${(p) => p.color || theme.accent};
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-size: 11px;
  color: ${theme.textMuted};
  letter-spacing: 1px;
  margin-top: 4px;
`;