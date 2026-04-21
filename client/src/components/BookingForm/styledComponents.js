import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.card};
  border: 1px solid ${theme.border};
  border-radius: 14px;
  padding: 24px;
`;

export const BoxTitle = styled.h4`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${theme.textMuted};
  margin-bottom: 18px;
`;

export const Input = styled.input`
  width: 100%;
  background: ${theme.surface};
  border: 1px solid ${theme.border};
  border-radius: 10px;
  padding: 12px 14px;
  color: ${theme.text};
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  margin-bottom: 12px;

  &::placeholder {
    color: ${theme.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${theme.accent};
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  background: ${(p) => (p.disabled ? theme.border : theme.accent)};
  color: ${(p) => (p.disabled ? theme.textMuted : "#0a0a0f")};

  &:hover:not(:disabled) {
    background: ${theme.accentHover};
  }
`;

export const FullMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  gap: 8px;
  color: ${theme.textMuted};
  font-size: 13px;
  text-align: center;

  svg {
    font-size: 28px;
    opacity: 0.5;
    color: ${theme.danger};
  }
`;