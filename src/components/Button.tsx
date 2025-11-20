interface ButtonProps {
  text: string;
  classNames: string;
  onClick?: () => void;
}

export function Button({
  classNames,
  text,
  onClick }: ButtonProps) {
  return (
    <button 
      className={`h-14 w-full text-base leading-6 font-normal text-justify rounded-[10px] px-6 py-4 ${classNames}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}