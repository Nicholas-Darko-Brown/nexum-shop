import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<"label"> {
    text?: React.ReactNode
    htmlFor?: string
    className?: string
}

const CustomLabel = ({ text, htmlFor="", className, ...restOfProps }: Props) => {
  return (
    <label {...restOfProps} htmlFor={htmlFor} className={className}>
        {text}
    </label>
  )
}

export default CustomLabel