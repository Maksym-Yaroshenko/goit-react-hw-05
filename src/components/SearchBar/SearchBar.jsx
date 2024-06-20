import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const notify = () => toast("You have not entered anything!");

  const handleSubmit = (values, actions) => {
    if (values.search.trim() === "") {
      return notify();
    }

    onSearch(values.search);

    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="search"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <Toaster position="top-right" />
        </Form>
      </Formik>
    </>
  );
}
