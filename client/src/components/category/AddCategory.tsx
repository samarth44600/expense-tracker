import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import PopupWrapper from "../common/popupWrapper";
import CategoryContext from "@/context/category/categoryContext";
import { TextInputField } from "../common/form/input";
import PrimaryButton from "../common/button/PrimaryButton";

type Props = {};

interface CategoryType {
  title: string;
}

const initialValues: CategoryType = {
  title: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});
const AddCategory = (props: Props) => {
  const { closePopup } = React.useContext(CategoryContext);

  const handleClosePopup = () => {
    closePopup();
    formik.resetForm();
  };

  const handleCreate = (values: CategoryType) => {
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

            <PrimaryButton type="submit">Add</PrimaryButton>
          </form>
        </div>
      </div>
    </PopupWrapper>
  );
};

export default AddCategory;
