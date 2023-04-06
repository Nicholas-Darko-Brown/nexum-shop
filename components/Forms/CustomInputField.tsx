import React from "react";

type InputType = "search" | "text" | "email" | "password" | "number";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
  placeholder?: string;
  type?: InputType;
  label?: React.ReactNode;
  error?: string;
}

const CustomInputField = ({
  className,
  placeholder,
  type,
  label,
  error,
  ...restOfProps
}: Props) => {
  return (
    <>
      {label ? <label> {label} </label> : null}
      <input
        {...restOfProps}
        className={className}
        placeholder={placeholder}
        type={type}
      />
      {error ? <small className="text-red-600"> {error} </small> : null}
    </>
  );
};

export default CustomInputField;
