import React, { useRef } from "react";
import { IFilm } from "../../interfaces/Film";
import Arrow from "../../assets/images/Arrow";
import { Carousel as BasikCarousel } from "antd";
import { CarouselContent } from "./carouselContent";

import "./carousel.scss";

interface ArrowButtonProps {
  type: string;
  reff: any;
}

const ArrowButton = ({ type, reff }: ArrowButtonProps) => {
  return (
    <div
      className="arrow-button"
      onClick={() => {
        type === "left" ? reff.current.prev() : reff.current.next();
      }}
    >
      <Arrow side={type} />
    </div>
  );
};

const Carousel = ({ filmsGroup }: any) => {
  const carouselRef: any = useRef();

  return (
    <div className="carousel-wrapper red">
      <ArrowButton type={"left"} reff={carouselRef} />
      <BasikCarousel draggable ref={carouselRef}>
        {filmsGroup.map((film: IFilm, index: number) => (
          <CarouselContent key={film.title} filmGroup={film} />
        ))}
      </BasikCarousel>
      <ArrowButton type={"right"} reff={carouselRef} />
    </div>
  );
};

export default Carousel;
