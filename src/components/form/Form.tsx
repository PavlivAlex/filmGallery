import React from "react";
import { Formik, Form as BasikFrom } from "formik";

interface FormProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  children: any;
}

const Form = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      autocomplete="off"
    >
      {({ isSubmitting }) => {
        return <BasikFrom>{children}</BasikFrom>;
      }}
    </Formik>
  );
};

export default Form;
