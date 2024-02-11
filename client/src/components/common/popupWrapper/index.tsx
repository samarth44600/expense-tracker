import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const PopupWrapper = ({ children, onClose }: Props) => {
  return (
    <div className=" fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center ">
      <div className="max-w-[50%] max-h-[70%] overflow-auto w-full h-max relative bg-white rounded-lg px-8 py-6  shadow-md">
        <button
          type="button"
          className="absolute top-4 right-4 hover:scale-[1.1] transition-all"
          onClick={onClose}
        >
          <Image src={"/icons/close.svg"} alt="close" width={24} height={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupWrapper;
