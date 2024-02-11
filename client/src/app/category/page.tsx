"use client";
import AddCategory from "@/components/category/AddCategory";
import ExpensesByCategory from "@/components/category/ExpensesByCategory";
import YourCategory from "@/components/category/YourCategory";
import PageHeader from "@/components/common/header";
import MoneySpent from "@/components/expenses/MoneySpent";
import CategoryContext from "@/context/category/categoryContext";
import React from "react";

type Props = {};

const CategoryPage = (props: Props) => {
  const { isPopupOpen, openPopup } = React.useContext(CategoryContext);
  return (
    <div className="w-full flex">
      <div className="w-[70%] max-h-[85vh] px-12 pb-0 flex flex-col gap-8">
        <PageHeader
          title="Category"
          buttonText="Add Category"
          onClick={openPopup}
        />
        <YourCategory />
        <ExpensesByCategory />
      </div>
      <div className="w-[30%]">
        <MoneySpent />
      </div>
      {isPopupOpen && <AddCategory />}
    </div>
  );
};

export default CategoryPage;
