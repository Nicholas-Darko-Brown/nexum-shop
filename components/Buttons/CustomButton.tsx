import React from 'react'

type ButtonType = "submit" | "button"

interface Props extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"button">> {
    text?: string
    className: string
    type: ButtonType
}

const CustomButton = ({ className, type, text, children, ...restOfProps }: Props) => {
  return (
    <button className={className} type={type} {...restOfProps}>
        {children ?? text}
    </button>
  )
}

export default CustomButton