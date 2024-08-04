import Select from "react-select";
import React from "react";

interface CustomSelectInter {
  labelText: string;
  selectValue: any;
  selectOnChange: any;
  selectOptions: Array<any>;
  extraClass?: string;
  isMulti?: boolean;
  isError?: boolean;
  isSearchable?: boolean;
  bgColor?: string;
  isDisabled?: boolean;
  placeholder?: string;
  props?: any;
  labelClassName?: string;
}

const CustomSelect = ({
  labelText,
  selectValue,
  selectOnChange,
  selectOptions,
  extraClass,
  isMulti = false,
  isError = false,
  isSearchable = false,
  bgColor,
  isDisabled = false,
  placeholder,
  labelClassName,
  ...props
}: CustomSelectInter) => {
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      cursor: "pointer",
      padding: "4px",
      color: "#3B3831",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      border: isError ? "1px solid #D82828" : "1px solid #8979AA",
      boxShadow: state.selectProps.menuIsOpen && "rgba(165, 165, 165, 0.5)",
      background: state.isFocused ? "#F9F9F9" : bgColor || "var(--white, #FFF)",
      "&:hover": {
        background: "#F9F9F9",
      },
      // borderRadius: selectExtraStyles
      //   ? selectExtraStyles.borderRadius
      //     ? selectExtraStyles.borderRadius
      //     : "10px"
      //   : "10px",
      borderRadius: "100px",
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
      visibility: isDisabled ? "hidden" : "initial",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      padding: "10px 20px",
      color: "#222",
      fontFamily: "inherit",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      boxShadow: "none",
      background: state.isSelected || state.isFocused ? "#F7F5F1" : "#FFF",
      "&:hover": {
        background: "#F7F5F1",
      },
    }),

    indicatorContainer: () => ({
      padding: "0px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "none", // Background color
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: "111",
      padding: "12px 0px",
      boxShadow: "none",
      border: "1px solid rgba(165, 165, 165, 0.50)",
      background: "#FFF",
      borderRadius: "10px",
    }),
    menuList: (provided: any) => ({
      ...provided,
      " &::-webkit-scrollbar": {
        width: "5px",
        height: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#e3e1db",
        borderRadius: "6px",
      },

      " &::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
  };

  return (
    <div className={extraClass ? extraClass : ""} style={{ width: "100%" }}>
      <label
        htmlFor="date"
        className={` min-w-fit ${
          labelClassName ? labelClassName : "block mb-2 label"
        }`}
      >
        {labelText}
      </label>
      <Select
        value={selectValue}
        options={selectOptions}
        onChange={(e: any) => {
          selectOnChange(e);
        }}
        styles={customStyles}
        isMulti={isMulti}
        isSearchable={isSearchable}
        // onInputChange={onInputChange}
        isDisabled={isDisabled}
        placeholder={placeholder ? placeholder : ""}
        className=" w-full"
        // onKeyDown={onKeyDown ? onKeyDown : () => {}}
        {...props}
      />
    </div>
  );
};

export default CustomSelect;
