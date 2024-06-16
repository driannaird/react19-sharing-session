import { FC, MouseEvent } from "react";

interface TogglePropsI {
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
  theme: boolean;
}

const Toggle: FC<TogglePropsI> = ({ onClick, theme }) => {
  return (
    <div className="flex flex-row justify-center toggle">
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            onClick={onClick}
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="checkbox hidden"
          />
          <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
        </div>
        <div className="ml-3 dark:text-white text-gray-900 font-medium text-xl">
          {theme ? "Dark Mode" : "Light Mode"}
        </div>
      </label>
    </div>
  );
};

export default Toggle;
