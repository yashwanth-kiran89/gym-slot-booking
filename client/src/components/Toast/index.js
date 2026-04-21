import React from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { ToastWrapper } from "./styledComponents";

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <ToastWrapper $type={toast.type}>
      {toast.type === "success" ? <RiCheckLine /> : <RiCloseLine />}
      {toast.msg}
    </ToastWrapper>
  );
}