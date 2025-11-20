import React from "react";
import Link from "next/link";

const baseStyles = "h-14 w-full text-base leading-6 font-normal text-justify rounded-[10px] px-6 py-4 hover:cursor-pointer";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

function Button({
  className,
  children,
  onClick,
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${className || ''}`}
      onClick={onClick}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  className?: string;
};

function ButtonLink({
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${baseStyles} ${className || ''}`}
      {...props}
    >
      {children}
    </Link>
  );
}

Button.Link = ButtonLink;

export { Button };
