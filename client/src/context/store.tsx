import React from "react";
import ExpenseProvider from "./expense/expenseProvider";
import CategoryProvider from "./category/categoryProvider";
import QueryWrapper from "@/components/react-query/QueryWrapper";

type Props = {
  children: React.ReactNode;
};

const ContextWrapper = ({ children }: Props) => {
  return (
    <QueryWrapper>
      <ExpenseProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </ExpenseProvider>
    </QueryWrapper>
  );
};

export default ContextWrapper;
