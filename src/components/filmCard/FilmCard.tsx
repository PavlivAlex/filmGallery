import React, { useState } from "react";
import { Col, Typography } from "antd";
import { Link } from "react-router-dom";
import FilmCardPopup from "./FilmCardPopup";
import { getCurrentUser } from "../../config/auth";
import { dislikeIcon, rateStar } from "../../assets/images";

import "./filmCard.scss";

const FilmCard = ({ film }: any) => {
  const user: any = getCurrentUser;
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const avarageRate = film.points / film.views;

  return (
    <Col span={11} className="film-card-box">
      <div className="film-avatar-box">
        <img src={film?.icon} alt="avatar" />
      </div>

      <div className="film-info-block">
        <div>
          <Typography className="card-film-name-text">{film.title}</Typography>
          <Typography>{film.genre}</Typography>
          <Typography>{film.year}</Typography>
          <Typography>director: {film.director}</Typography>
        </div>
        <div className="rate-box">
          <img
            className="rate-star-icon"
            src={avarageRate > 7 ? rateStar : dislikeIcon}
            alt="rate"
          />
          <Typography>{avarageRate}</Typography>
        </div>
        {!!user ? (
          <Typography
            className="more-info-btn"
            onClick={() => setIsPopupVisible(true)}
          >
            Tap to see more info
          </Typography>
        ) : (
          <Typography className="more-info-btn">
            <Link to="/login">Log In</Link> to see more info
          </Typography>
        )}
      </div>
      <FilmCardPopup
        isPopupVisible={isPopupVisible}
        film={film}
        avarageRate={avarageRate}
        setIsPopupVisible={setIsPopupVisible}
      />
    </Col>
  );
};

export default FilmCard;
