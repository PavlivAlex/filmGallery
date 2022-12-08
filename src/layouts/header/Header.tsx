import React, { useEffect, useState } from "react";
import { Row, Typography } from "antd";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { getCurrentUser, isDataForSignUpExist } from "../../config/auth";
import logoutIcon from "../../assets/images/logoutIcon.svg";

import "./header.scss";

const Header = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogOut = () => {
    window.location.reload();
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    if (!!getCurrentUser) {
      setUser(getCurrentUser);
    }
  }, [getCurrentUser]);

  return (
    <Row className="header-box" justify="end" align="middle">
      {!user?.hasOwnProperty("name") ? (
        <>
          <Link to="/login">
            <Button title="Log In" className="blue-btn" />
          </Link>
          <Typography className="or-text">or</Typography>
          <Link to="/signup">
            <Button
              title={!!isDataForSignUpExist ? "Resume Sign Up" : "Sign Up"}
              className="blue-btn"
            />
          </Link>
        </>
      ) : (
        <div className="welcome-user-block">
          <Typography>Welcome {user?.name.toUpperCase()}</Typography>
          <Link to="/" className="logout-btn" onClick={handleLogOut}>
            <img src={logoutIcon} />
          </Link>
        </div>
      )}
    </Row>
  );
};

export default Header;
