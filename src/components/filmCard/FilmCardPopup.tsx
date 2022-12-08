import React from "react";
import { Popup } from "../popup";
import Title from "antd/es/typography/Title";
import { IFilm } from "../../interfaces/Film";
import Typography from "antd/es/typography/Typography";
import { dislikeIcon, rateStar } from "../../assets/images";

interface FilmCardPopupProps {
  film: IFilm;
  avarageRate: number;
  isPopupVisible: boolean;
  setIsPopupVisible: (value: boolean) => void;
}

const FilmCardPopup = ({
  isPopupVisible,
  film,
  avarageRate,
  setIsPopupVisible,
}: FilmCardPopupProps) => {
  return (
    <Popup
      isPopuplVisible={isPopupVisible}
      onCancel={() => setIsPopupVisible(false)}
      className="film-detail-info-popup"
    >
      <div className="film-detail-info-popup-body">
        <Title level={3}>{film.title}</Title>
        <div className="ds-flex width-100">
          <div className="film-avatar-box">
            <img src={film?.icon} alt="avatar" />
          </div>
          <div className="film-info-block">
            <Typography>{film.genre}</Typography>
            <Typography>{film.year}</Typography>
            <Typography>director: {film.director}</Typography>
            <div>
              <Typography className="main-actor-text">Main actors: </Typography>
              {film.actors.map((actor: string) => (
                <span className="main-actor-span" key={actor}>
                  {actor},{" "}
                </span>
              ))}
            </div>

            <div className="rate-box">
              <img
                className="rate-star-icon"
                src={avarageRate > 7 ? rateStar : dislikeIcon}
                alt="rate"
              />
              <Typography>{avarageRate}</Typography>
            </div>
          </div>
        </div>
        <Typography className="film-plot-text">{film.plot}</Typography>
      </div>
    </Popup>
  );
};

export default FilmCardPopup;
