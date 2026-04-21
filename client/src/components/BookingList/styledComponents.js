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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 320px;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${theme.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: ${theme.border};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 16px;
  color: ${theme.accent};
  flex-shrink: 0;
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.text};
`;

export const BookedAt = styled.span`
  font-size: 11px;
  color: ${theme.textMuted};
`;

export const CancelBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${theme.danger}18;
  border: 1px solid ${theme.danger}33;
  border-radius: 7px;
  color: ${theme.danger};
  padding: 5px 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${theme.danger}30;
  }
`;

export const EmptyState = styled.div`
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
    opacity: 0.4;
  }
`;

export const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${theme.border};
  border-top: 2px solid ${theme.accent};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;