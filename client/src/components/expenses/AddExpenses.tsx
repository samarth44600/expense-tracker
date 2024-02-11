"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery } from "@tanstack/react-query";
import PopupWrapper from "../common/popupWrapper";
import ExpenseContext from "@/context/expense/expenseContext";
import { NumberInputField, TextInputField } from "../common/form/input";
import SelectInput from "../common/form/select";
import PrimaryButton from "../common/button/PrimaryButton";
import endpoints from "@/core/constants/endpoints";

type Props = {};

interface ExpensesType {
  title: string;
  amount: number;
  category: string;
}

const initialValues: ExpensesType = {
  title: "",
  amount: 0,
  category: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  amount: Yup.number().required("Title is required"),
  category: Yup.string().required("Select one category"),
});
// const categories = [
//   {
//     id: 1,
//     label: "Food",
//     value: "Food",
//   },
//   {
//     id: 2,
//     label: "Transportation",
//     value: "Transportation",
//   },
//   {
//     id: 3,
//     label: "Groceries",
//     value: "Groceries",
//   },
//   {
//     id: 4,
//     label: "Shopping",
//     value: "Shopping",
//   },
// ];
const AddExpenses = (props: Props) => {
  const { closePopup } = React.useContext(ExpenseContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetch(endpoints.category.all).then((res) => res.json()),
  });

  const allCategories = data?.body?.data;

  const categories =
    allCategories &&
    allCategories.length > 0 &&
    allCategories.map((category: any) => ({
      value: category?._id,
      label: category?.title,
    }));

  const handleClosePopup = () => {
    closePopup();
    formik.resetForm();
  };

  const handleCreate = (values: ExpensesType) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleCreate,
  });
  return (
    <PopupWrapper onClose={handleClosePopup}>
      <div className="w-full flex flex-col items-center py-8 ">
        <div className="flex flex-col w-3/4">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col gap-4 items-center"
          >
            <TextInputField
              name="title"
              errorMessage={formik.errors.title}
              fullWidth
              label="Title"
              placeholder="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <NumberInputField
              name="amount"
              errorMessage={formik.errors.amount}
              fullWidth
              label="Amount"
              placeholder="0000"
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
            <SelectInput
              name="category"
              options={categories}
              errorMessage={formik.errors.category}
              value={formik.values.category}
              onChange={formik.handleChange}
              fullWidth
              label="Category"
            />
            <PrimaryButton type="submit">Add</PrimaryButton>
          </form>
        </div>
      </div>
    </PopupWrapper>
  );
};

export default AddExpenses;
