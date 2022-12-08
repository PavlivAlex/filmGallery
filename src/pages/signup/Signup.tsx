import React, { useEffect, useState } from "react";
import { Row } from "antd";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { ISignUpBody } from "../../interfaces/Auth";
import Typography from "antd/es/typography/Typography";
import { getObjectFromLocalstorage, signUp } from "../../config/auth";

import "./signup.scss";

const Signup = () => {
  const navidate = useNavigate();

  const signupInitialValues: ISignUpBody = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };
  const userDataForSignUp = getObjectFromLocalstorage("userDataForSignUp", "");

  const [dataForSignUp, setDataForSignUp] = useState<any>(
    userDataForSignUp || signupInitialValues
  );

  const [signUpResponse, setSignUpResponse] = useState("");

  const handleSubmit = async (body: ISignUpBody) => {
    const signUpResponse = signUp(body);
    setSignUpResponse(signUpResponse.mess);

    if (signUpResponse.res) {
      localStorage.removeItem("userDataForSignUp");
      navidate("/login");
      window.location.reload();
      alert(signUpResponse.mess);
    } else return alert(signUpResponse.mess);
  };

  useEffect(() => {
    localStorage.setItem("userDataForSignUp", JSON.stringify(dataForSignUp));
  }, [dataForSignUp]);

  return (
    <Row className="signup-box">
      <Title>Sign up</Title>

      <SignUpForm
        dataForSignUp={dataForSignUp}
        handleSubmit={handleSubmit}
        setDataForSignUp={setDataForSignUp}
      />
      <Typography>
        Already a user? <Link to="/login">Log In</Link>
      </Typography>
    </Row>
  );
};

export default Signup;
