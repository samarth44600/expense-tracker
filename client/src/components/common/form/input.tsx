"use client";
import React from "react";

type InputProps = {
  name: string;
  label?: string;
  value?: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  className?: string;
  fullWidth?: boolean;
  errorMessage?: string;
  onKeyDown?: (e: any) => void;
};

export const NumberInputField = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  fullWidth,
  errorMessage,
  onKeyDown,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-1/2"}`}>
      {label && (
        <label className="text-black body-p" htmlFor={name}>
          {" "}
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">
        <input
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="text-input font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none"
          placeholder={placeholder}
          id={name}
          type="number"
        />
        <p className="body-ps text-red-500">{errorMessage ?? ""}</p>
      </div>
    </div>
  );
};
export const TextInputField = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  fullWidth,
  errorMessage,
  onKeyDown,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-1/2"}`}>
      {label && (
        <label className="text-black body-p" htmlFor={name}>
          {" "}
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">
        <input
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="text-input font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none"
          placeholder={placeholder}
          id={name}
        />
        <p className="body-ps text-red-500">{errorMessage ?? ""}</p>
      </div>
    </div>
  );
};
export const PasswordInputField = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  fullWidth,
  errorMessage,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-1/2"}`}>
      {label && (
        <label className="text-black body-p" htmlFor={name}>
          {" "}
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">
        <input
          type="password"
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          placeholder={placeholder}
          className="text-input font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none"
        />
        <p className="body-ps text-red-500">{errorMessage ?? ""}</p>
      </div>
    </div>
  );
};

export const DatePicker = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  fullWidth,
  onKeyDown,
  errorMessage,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-1/2"}`}>
      {label && (
        <label className="text-black body-p" htmlFor={name}>
          {" "}
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">
        <input
          name={name}
          type="date"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="text-input font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none"
          placeholder={placeholder}
          id={name}
        />
        <p className="body-ps text-red-500">{errorMessage ?? ""}</p>
      </div>
    </div>
  );
};
