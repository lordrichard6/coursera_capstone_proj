import { FC, HTMLAttributes } from "react";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }): JSX.Element => {
  return (
    <button className="bg-secondary-color text-slate-900 text-xl font-bold w-fit rounded-lg drop-shadow-md hover:-translate-y-2 hover:drop-shadow-xl transition duration-300 delay-150 ease-in-out" {...props}>
      {children}
    </button>
  );
};

export default Button;