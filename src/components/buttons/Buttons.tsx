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
    rest.className ? rest.className : ""
  }`;

  const loaderClsases = `loader ${variant}`;

  return (
    <button className={classes} {...rest} disabled={disabled || loading}>
      {children} {loading && <div className={loaderClsases}></div>}
    </button>
  );
};
