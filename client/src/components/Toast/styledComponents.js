import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ToastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: ${(p) =>
    p.$type === "error" ? theme.danger : theme.success};
  color: #0a0a0f;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: 10px;
  z-index: 1000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
`;