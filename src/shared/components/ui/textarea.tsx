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
      <div className="flex flex-col gap-[14px] max-w-[498px]">
        <label
          className="text-primary opacity-70 text-[15px] font-semibold leading-[19px]"
          htmlFor={label}
        >
          {label}
        </label>
        <textarea
          style={{
            borderColor: error !== undefined ? "red" : "",
          }}
          id={label}
          className="lg:min-w-[498px] max-w-[498px] h-[157px] rounded-[6px] min-h-[54px] pt-4 pl-[18px] border border-primary/[0.19] placeholder:text-primary/[0.4]"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);


TextArea.displayName = 'TextArea'
