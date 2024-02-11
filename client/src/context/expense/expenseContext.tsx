import React from "react";

export interface ExpenseContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const initialState: ExpenseContextType = {
  isPopupOpen: false,
  openPopup: () => {},
  closePopup: () => {},
};

const ExpenseContext = React.createContext(initialState);

export default ExpenseContext;
