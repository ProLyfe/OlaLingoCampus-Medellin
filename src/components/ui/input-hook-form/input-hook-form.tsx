import { Eye } from "lucide-react";
import styles from "./input-hook-form.module.scss";
import { useState } from "react";

interface CustomInputInter {
  register: any;
  placeholder?: string;
  className?: string;
  label?: string;
  props?: any;
  inputData: {
    blockType: string;
    labelText?: string;
    registerName?: string;
    id?: string;
    name?: string;
    errors?: string;
    type?: string;
  };
  errors: any;
  addHideForPassword?: boolean;
}

const CustomInputHookForm = ({
  register,
  placeholder,
  className,
  label,
  inputData,
  errors,
  addHideForPassword = false,
  ...props
}: CustomInputInter) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      {label ? <label className="label mb-2">{label}</label> : null}
      <div>
        <div className="relative">
          <input
            id={inputData.id}
            name={inputData.name}
            {...register(inputData.registerName)}
            placeholder={placeholder}
            className={` ${styles.input} ${className ? className : ""}
        ${label ? "mt-2" : ""}
        `}
            type={
              inputData.type !== "password"
                ? inputData.type
                : showPassword
                ? "text"
                : "password"
            }
            {...props}
          />
          {addHideForPassword ? (
            <Eye
              onClick={() => setShowPassword((prev) => !prev)}
              color="#8979AA"
              className="cursor-pointer absolute top-[50%] right-[26px] transform translate-x-1/2 -translate-y-1/2 "
            />
          ) : null}
        </div>

        {inputData.errors && errors[inputData.errors] && (
          <p
            className={`${styles.error_text} mt-2 text-destructive text-[14px] font-normal`}
          >
            {errors[inputData.errors]?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomInputHookForm;
