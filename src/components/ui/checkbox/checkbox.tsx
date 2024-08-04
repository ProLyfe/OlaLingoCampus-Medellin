import React from "react";
import styles from "./checkbox.module.scss";

interface CheckBoxProps {
  className?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ className, checked, onChange }: CheckBoxProps) => {
  return (
    <label className={`${className ? className : ""} ${styles.customCheckbox}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
