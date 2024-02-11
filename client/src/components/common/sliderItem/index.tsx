import React from "react";

type Props = {
  title: string;
  amount: string;
  completedPercent?: number;
};

const SliderItem = ({ title, amount, completedPercent = 0 }: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 px-4 py-2">
      <div className="w-full flex items-center justify-between">
        <p className="text-black font-bold text-base">{title}</p>
        <p className="text-black font-bold text-base">{amount}</p>
      </div>
      <div className="relative w-full h-1">
        <div className="w-full bg-[#ECEFF5] h-full rounded-full"></div>
        <div
          className={`absolute left-0 top-0  bg-primary-blue h-full rounded-full z-50`}
          style={{
            width : completedPercent + "%"
          }}
        ></div>
      </div>
    </div>
  );
};

export default SliderItem;
