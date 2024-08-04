import React from "react";
import styles from "./button.module.scss";

const BUTTON_SIZE = {
  s: styles.small_btn,
  l: styles.large_btn,
} as const;

const BACKGROUND_COLOR = {
  black: styles.black_button,
  white: styles.white_button,
  brown: styles.brown_button,
  opacity: styles.opacity_button,
  main: styles.main_button,
  orange: styles.orange_butoon,
  light: styles.light_button,
  outline: styles.outline_white_button,
  main_white: styles.main_white_button,
  destructive: styles.destructive_buttom,
} as const;

type ButtonSize = keyof typeof BUTTON_SIZE;
type BackgroundColor = keyof typeof BACKGROUND_COLOR;

const getClassForSize = (size: ButtonSize) => {
  return BUTTON_SIZE[size] || "";
};

const getClassForColor = (color: BackgroundColor) => {
  return BACKGROUND_COLOR[color] || "";
};

interface CustomButtonInter
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnSize: ButtonSize;
  bgColor: BackgroundColor;
  className?: string;

  children: any;
}

const CustomButton = ({
  btnSize,
  bgColor,
  className,
  children,
  ...props
}: CustomButtonInter) => {
  const buttonSizeClass = getClassForSize(btnSize);
  const buttonColorClass = getClassForColor(bgColor);

  const buttonClasses = [
    styles.button,
    buttonSizeClass,
    buttonColorClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={`${buttonClasses}`}>
      {children}
    </button>
  );
};

export default CustomButton;
