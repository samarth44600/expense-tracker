import React from "react";

export interface CategoryContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const initialState: CategoryContextType = {
  isPopupOpen: false,
  openPopup: () => {},
  closePopup: () => {},
};

const CategoryContext = React.createContext(initialState);

export default CategoryContext;
