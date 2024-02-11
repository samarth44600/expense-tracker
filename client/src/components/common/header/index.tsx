import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  buttonText: string;
  onClick?: () => void;
};

const PageHeader = ({ title, buttonText, onClick }: Props) => {
  return (
    <div className="w-full flex items-center justify-between max-h-[10%]">
      <p className="font-bold text-2xl">{title}</p>
      <button
        type="button"
        className="border-none outline-none bg-transparent flex items-center gap-2 text-primary-blue text-base font-semibold"
        onClick={onClick}
      >
        {buttonText}
        <Image src={"/icons/circularAdd.svg"} alt="" width={16} height={16} />
      </button>
    </div>
  );
};

export default PageHeader;
