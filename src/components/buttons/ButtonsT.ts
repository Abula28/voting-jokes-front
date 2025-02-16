import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "large";
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
  disabled?: boolean;
}
