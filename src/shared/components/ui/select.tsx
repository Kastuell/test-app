import React, { DetailedHTMLProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styles from "./select.module.scss";

interface ISelect
  extends DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label?: string;
  items: string[];
  error?: FieldError | undefined;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, ISelect>(
  ({ className, label, items, error, placeholder, ...props }, ref) => {
    
    return (
      <div className="flex flex-col gap-[14px] max-w-[498px]">
        <label
          className="text-primary opacity-70 text-[15px] font-semibold leading-[19px]"
          htmlFor={label}
        >
          {label}
        </label>
        <div className="relative">
          <select
            style={{
              borderColor: error !== undefined ? "red" : "",
            }}
            defaultValue={""}
            id={label}
            className="w-full h-[54px] pl-[18px] rounded-[6px] border border-primary/[.19] placeholder:text-primary/[.4]"
            ref={ref}
            {...props}
          >
            <option value={""} hidden>
              {placeholder}
            </option>
            {items.map((item, index) => (
              <option value={item} key={item + index}>
                {item}
              </option>
            ))}
          </select>
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

Select.displayName = 'Select'
