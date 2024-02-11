"use client";
import PageHeader from "@/components/common/header";
import AddExpenses from "@/components/expenses/AddExpenses";
import MoneySpent from "@/components/expenses/MoneySpent";
import TodaysExpenses from "@/components/expenses/TodaysExpenses";
import TopExpenses from "@/components/expenses/TopExpenses";
import ExpenseContext from "@/context/expense/expenseContext";
import React from "react";

type Props = {};

const ExpensePage = (props: Props) => {
  const { isPopupOpen, openPopup } = React.useContext(ExpenseContext);

  return (
    <div className="w-full flex">
      <div className="w-[70%] max-h-[85vh] px-12 pb-0 flex flex-col gap-8">
        <PageHeader
          title="Expenses"
          buttonText="Add Expenses"
          onClick={openPopup}
        />
        <TopExpenses />
        <TodaysExpenses />
      </div>
      <div className="w-[30%]">
        <MoneySpent />
      </div>
      {isPopupOpen && <AddExpenses />}
    </div>
  );
};

export default ExpensePage;
