"use client";
import React from "react";
import ExpenseContext, { ExpenseContextType } from "./expenseContext";

type Props = {
  children: React.ReactNode;
};

const ExpenseProvider = ({ children }: Props) => {
  const [isPopupOpen, setPopupOpen] = React.useState<boolean>(false);

  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };

  const expenseDataState: ExpenseContextType = {
    closePopup,
    openPopup,
    isPopupOpen,
  };
  return (
    <ExpenseContext.Provider value={expenseDataState}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
