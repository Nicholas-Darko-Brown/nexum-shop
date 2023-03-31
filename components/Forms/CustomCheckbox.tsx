import React from "react";
import CustomLabel from "./CustomLabel";

type InputType = "checkbox" | "radio";

interface Props extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
  label?: React.ReactNode;
  id: string;
  type?: InputType;
}

const CustomCheckbox = ({ id, label, type, ...restOfProps }: Props) => {
  return (
    <div className="flex space-x-1">
      <div className="">
        <input {...restOfProps} type={type} id={id} />
      </div>
      <div className="">
        <CustomLabel text={label} htmlFor={id} />
      </div>
    </div>
  );
};

export default CustomCheckbox;
