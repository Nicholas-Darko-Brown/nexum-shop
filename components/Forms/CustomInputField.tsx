import React from "react";

type InputType = "search" | "text" | "email";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
  placeholder?: string;
  type?: InputType;
  label?: string;
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
      {error ? <small> {error} </small> : null}
    </>
  );
};

export default CustomInputField;
