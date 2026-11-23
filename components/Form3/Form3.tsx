"use client";
import { Field, Form, Formik } from "formik";
import css from "./Form3.module.css";

interface User {
  firstname: string;
  lastname: string;
  price?: number;
  delivery: string;
}

const initialValues: User = {
  firstname: "",
  lastname: "",
  delivery: "",
  price: undefined,
};

const Form3 = () => {
  const handleSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css["form"]}>
          <Field name="firstname" type="text" />
          <Field name="lastname" type="text" />
          <Field name="price" type="number" />
          <Field name="delivery" type="text" />

          <button type="submit">Send Data</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form3;
