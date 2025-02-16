import { ButtonProps } from "./ButtonsT";
import "./Button.scss";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "secondary",
  size,
  loading,
  disabled,
  ...rest
}) => {
  const classes = `button ${size ? size : ""} ${variant} ${
    loading ? "loading" : ""
  } ${rest.className ? rest.className : ""}`;

  return (
    <button className={classes} {...rest} disabled={disabled}>
      {children}
    </button>
  );
};
