import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styles from "./textarea.module.scss";

interface ITextarea
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  error?: FieldError | undefined;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className={styles.textarea_wrapper}>
        <label className={styles.textarea_label} htmlFor={label}>
          {label}
        </label>
        <textarea
          style={{
            borderColor: error !== undefined ? "red" : "",
          }}
          id={label}
          className={styles.textarea}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
