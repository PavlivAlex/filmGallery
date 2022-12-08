import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import { Button } from "../../components/button";
import { getCurrentUser } from "../../config/auth";
import { moviesForWelcomeScreenIcon } from "../../assets/images";

import "./welcome.scss";

const Welcome = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!!getCurrentUser) {
      setUser(getCurrentUser);
    }
  }, [getCurrentUser]);

  return (
    <Row className="welcome-page-wrapper">
      <Title className="welcome-text">Welcome to films gallery!</Title>
      <div className="welcome-movies-photo">
        <img src={moviesForWelcomeScreenIcon} alt="movies" />
      </div>
      <Row className="welcome-links-container">
        <Link to="login">
          <Button className="blue-btn" title="Log In" />
        </Link>
        <Link to="signup">
          <Button className="blue-btn" title="Sign Up" />
        </Link>
        <Link to="home">
          <Button
            className="blue-btn"
            title={user ? "Browse" : "Browse without account"}
          />
        </Link>
      </Row>
    </Row>
  );
};

export default Welcome;
