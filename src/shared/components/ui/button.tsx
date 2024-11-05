import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = (props: IButton) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={
        "flex gap-4 items-center justify-center w-[225px] h-12 rounded-[41px] border border-primary/[.16] bg-white font-medium text-base hover:[&:not(:disabled)]:cursor-pointer hover:[&:not(:disabled)]:bg-primary hover:[&:not(:disabled)]:text-white transition-all duration-300 " +
        className
      }
      {...rest}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
