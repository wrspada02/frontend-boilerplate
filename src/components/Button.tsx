import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

export function Button({
  className,
  children,
  onClick,
  type }: ButtonProps) {
  return (
    <button
      className={`h-14 w-full text-base leading-6 font-normal text-justify rounded-[10px] px-6 py-4 hover:cursor-pointer ${className}`}
      onClick={onClick}
      type={type || 'button'}
    >
      {children}
    </button>
  )
}