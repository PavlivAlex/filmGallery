import React from "react";
import LoginForm from "./LoginForm";
import { Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { logIn } from "../../config/auth";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { ILoginBody } from "../../interfaces/Auth";

import "./login.scss";

const Login = () => {
  const navidate = useNavigate();
  const handleSubmit = (body: ILoginBody) => {
    const logInResponse = logIn(body);

    if (logInResponse.res) {
      navidate("/home");
      window.location.reload();
      alert(logInResponse.mess);
    } else return alert(logInResponse.mess);
  };

  const loginInitialValues: ILoginBody = { email: "", password: "" };
  return (
    <Row className="login-box">
      <Title>Log In</Title>
      <LoginForm
        loginInitialValues={loginInitialValues}
        handleSubmit={handleSubmit}
      />
      <Typography>
        Need an account? <Link to="/signup">Sign Up</Link>
      </Typography>
    </Row>
  );
};

export default Login;
