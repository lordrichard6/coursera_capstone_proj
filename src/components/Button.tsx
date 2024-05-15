import { FC, HTMLAttributes } from "react";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }): JSX.Element => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default Button;