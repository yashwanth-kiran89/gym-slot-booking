import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

export const GridItem = styled.div`
  flex: 1 1 280px;
  max-width: 340px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  color: ${theme.textMuted};
  gap: 12px;
  font-size: 14px;
`;

export const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid ${theme.border};
  border-top: 3px solid ${theme.accent};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;