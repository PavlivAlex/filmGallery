import React from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ILoginBody } from "../../interfaces/Auth";
import { Form, FormItem } from "../../components/form";
import { loginValidationSchema } from "../../validation/login";

interface LoginFormProps {
  loginInitialValues: ILoginBody;
  handleSubmit: (body: ILoginBody) => void;
}

const LoginForm = ({ loginInitialValues, handleSubmit }: LoginFormProps) => {
  return (
    <Form
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      <FormItem name="email" placeholder="Email" component={Input} />
      <FormItem
        name="password"
        placeholder="Password"
        component={Input}
        additionalProps={{ type: "password" }}
      />
      <Button className="form-button" title="Log In" type="submit" />
    </Form>
  );
};

export default LoginForm;
