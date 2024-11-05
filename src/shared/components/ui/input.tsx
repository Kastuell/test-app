import React from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[14px] max-w-[498px]">
        <label
          className="text-primary opacity-70 text-[15px] font-semibold leading-[19px]"
          htmlFor={label}
        >
          {label}
        </label>
        <div className="relative">
          <input
            style={{
              borderColor: error !== undefined ? "red" : "",
            }}
            id={label}
            type={type}
            className="w-full h-[54px] pl-[18px] rounded-[6px] border border-primary/[.19] placeholder:text-primary/[.4]"
            ref={ref}
            {...props}
          />
          {error !== undefined && (
            <p className="absolute text-red-500 top-3 right-4">
              Заполните поле
            </p>
          )}
        </div>
      </div>
    );
  }
);
