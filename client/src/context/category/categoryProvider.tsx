"use client";
import React from "react";
import CategoryContext, { CategoryContextType } from "./categoryContext";

type Props = {
  children: React.ReactNode;
};

const CategoryProvider = ({ children }: Props) => {
  const [isPopupOpen, setPopupOpen] = React.useState<boolean>(false);

  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };

  const categoryDataState: CategoryContextType = {
    closePopup,
    openPopup,
    isPopupOpen,
  };
  return (
    <CategoryContext.Provider value={categoryDataState}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
