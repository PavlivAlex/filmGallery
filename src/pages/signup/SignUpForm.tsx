import React from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ISignUpBody } from "../../interfaces/Auth";
import { Form, FormItem } from "../../components/form";
import { signupValidationSchema } from "../../validation/signup";

interface SignUpFormProps {
  dataForSignUp: ISignUpBody;
  handleSubmit: (body: ISignUpBody) => void;
  setDataForSignUp: (body: ISignUpBody) => void;
}

const SignUpForm = ({
  dataForSignUp,
  handleSubmit,
  setDataForSignUp,
}: SignUpFormProps) => {
  return (
    <Form
      initialValues={dataForSignUp}
      validationSchema={signupValidationSchema}
      onSubmit={handleSubmit}
    >
      <FormItem
        name="email"
        placeholder="Email"
        component={Input}
        onChange={(e) => {
          setDataForSignUp({ ...dataForSignUp, email: e.target.value });
        }}
      />
      <FormItem
        name="name"
        placeholder="Name"
        component={Input}
        onChange={(e) => {
          setDataForSignUp({ ...dataForSignUp, name: e.target.value });
        }}
      />

      <FormItem
        name="password"
        placeholder="Password"
        component={Input}
        additionalProps={{ type: "password" }}
        onChange={(e) => {
          setDataForSignUp({ ...dataForSignUp, password: e.target.value });
        }}
      />
      <FormItem
        name="confirmPassword"
        placeholder="Confirm password"
        component={Input}
        additionalProps={{ type: "password" }}
        onChange={(e) => {
          setDataForSignUp({
            ...dataForSignUp,
            confirmPassword: e.target.value,
          });
        }}
      />

      <Button title="Sign Up" type="submit" className="form-button" />
    </Form>
  );
};

export default SignUpForm;
