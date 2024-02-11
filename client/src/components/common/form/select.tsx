import React from "react";

interface OptionType {
  value: string;
  label: string;
}

interface SelectInputTypes {
  name: string;
  label?: string;
  value?: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  className?: string;
  fullWidth?: boolean;
  errorMessage?: string;
  options: OptionType[];
  onKeyDown?: (e: any) => void;
}

const SelectInput = ({
  name,
  label,
  value,
  onChange,
  className,
  fullWidth,
  errorMessage,
  options,
  onKeyDown,
}: SelectInputTypes) => {
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-1/2"}`}>
      {label && (
        <label className="text-black body-p" htmlFor={name}>
          {" "}
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">
        <select
          name={name}
          id={name}
          onChange={onChange}
          defaultValue={value}
          className={`text-input font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none ${className}`}
          onKeyDown={onKeyDown}
        >
          {options.map((option: OptionType, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <p className="body-ps text-red-500">{errorMessage ?? ""}</p>
      </div>
    </div>
  );
};

export default SelectInput;
