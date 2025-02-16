import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) =>
  createPortal(
    <>{children}</>,
    document.getElementById("portal") as HTMLElement
  );

export default Portal;
