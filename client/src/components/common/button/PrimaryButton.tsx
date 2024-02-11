import React from "react";

type Props = {
  children: React.ReactNode;
  rounded?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const PrimaryButton = ({
  rounded = false,
  type = "button",
  onClick,
  children,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary-blue ${
        rounded ? "rounded-[50px]" : "rounded"
      } text-white heading-h3 px-8 py-2 flex gap-2 items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
