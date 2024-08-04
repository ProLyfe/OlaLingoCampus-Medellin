import styles from "./input.module.scss";
import { forwardRef } from "react";

interface CustomInputInter {
  placeholder?: string;
  type?: string;
  className?: string;
  props?: any;
  label?: string;
  [x: string]: any;
  isError?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputInter>(
  (
    { placeholder, type = "text", className, label, isError, ...props },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="text-h font-normal text-[18px] mb-2">{label}</label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`${styles.input} ${className ? className : ""} ${
            label ? "mt-2" : ""
          } ${
            isError ? "border border-[#D82828] " : " border border-[#8979AA]"
          }`}
          ref={ref} // Forward the ref here
          {...props}
        />
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
