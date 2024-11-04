import React from "react";
import { FieldError } from "react-hook-form";
import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className={styles.input_wrapper}>
        <label className={styles.input_label} htmlFor={label}>
          {label}
        </label>
        <input
          style={{
            borderColor: error !== undefined ? "red" : "",
          }}
          id={label}
          type={type}
          className={styles.input}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
