import React from "react";
import SliderItem from "../common/sliderItem";

type Props = {};

const MoneySpent = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <p className="text-lg font-bold text-black">Where your money go?</p>
      <div className="w-full flex flex-col gap-4">
        <SliderItem
          title="Food and Drinks"
          amount="872,400"
          completedPercent={30}
        />
        <SliderItem
          title="Shopping"
          amount="1.378,00"
          completedPercent={40}
        />
        <SliderItem
          title="Housing"
          amount="928,500"
          completedPercent={35}
        />
        <SliderItem
          title="Transportations"
          amount="420,700"
          completedPercent={25}
        />
        <SliderItem
          title="Vehicle"
          amount="520,000"
          completedPercent={30}
        />
      </div>
    </div>
  );
};

export default MoneySpent;
