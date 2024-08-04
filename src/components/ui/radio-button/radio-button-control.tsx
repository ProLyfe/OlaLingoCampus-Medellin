import { useState } from "react";
import RadioButton from "./radio-button";

type RadioButtonControlProps = {
  model: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const RadioButtonControl = ({
  model,
  onChange,
  defaultValue = "",
}: RadioButtonControlProps) => {
  const [checkedValue, setCheckedValue] = useState<string>(defaultValue);

  const handleOnChange = (value: string) => {
    setCheckedValue(value);
    onChange && onChange(value);
  };
  console.log(model)

  return (
    <div role="radiogroup" className="flex gap-5 flex-col mobile:flex-row">
      {model.map((item) => (
        <RadioButton
          checked={checkedValue === item.value}
          onChange={handleOnChange}
          key={item.value}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default RadioButtonControl;
