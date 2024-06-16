import { FC, MouseEvent } from "react";

interface ButtonPropsI {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  value: number;
}

const Button: FC<ButtonPropsI> = ({ onClick, value }) => {
  return (
    <div className="relative inline-flex group">
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-white via-yellow-400 to-red-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <button
        onClick={onClick}
        title="Get quote now"
        className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 rounded-lg"
        role="button">
        Increment: {value}
      </button>
    </div>
  );
};

export default Button;
