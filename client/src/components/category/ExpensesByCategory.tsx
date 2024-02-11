import React from "react";
import ListItem from "../common/listItem";

type Props = {};

const ExpensesByCategory = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 max-h-[40%]">
      <div className="w-full flex justify-between items-center">
        <p className="text-black font-bold text-base">
          Top Expenses By Categoy
        </p>
      </div>
      <div className="flex flex-col  h-full overflow-y-auto">
        <ListItem
          imgSrc="/icons/items/home.svg"
          title="Paid rent for Feb"
          time="5:12 pm"
        />
        <ListItem
          imgSrc="/icons/items/food.svg"
          title="Smoothie"
          time="5:12 pm"
        />
        <ListItem
          imgSrc="/icons/items/home.svg"
          title="Paid rent for Feb"
          time="5:12 pm"
        />
        <ListItem
          imgSrc="/icons/items/food.svg"
          title="Smoothie"
          time="5:12 pm"
        />
        <ListItem
          imgSrc="/icons/items/home.svg"
          title="Paid rent for Feb"
          time="5:12 pm"
        />
        <ListItem
          imgSrc="/icons/items/food.svg"
          title="Smoothie"
          time="5:12 pm"
        />
      </div>
    </div>
  );
};

export default ExpensesByCategory;
