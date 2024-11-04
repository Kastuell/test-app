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
    console.log(error);
    return (
      <div className={styles.select_wrapper}>
        <label className={styles.select_label} htmlFor={label}>
          {label}
        </label>
        <select
          style={{
            borderColor: error !== undefined ? "red" : "",
          }}
          defaultValue={""}
          id={label}
          className={styles.select}
          ref={ref}
          {...props}
        >
          <option value={""} disabled hidden>
            {placeholder}
          </option>
          {items.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
