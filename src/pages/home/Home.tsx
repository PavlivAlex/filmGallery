import React, { useEffect, useState } from "react";
import { Row } from "antd";
import Title from "antd/es/typography/Title";
import { Header } from "../../layouts/header";
import { Loader } from "../../components/loader";
import films from "../../mockData/listFilms.json";
import { Carousel } from "../../components/carousel";
import { FilmCard } from "../../components/filmCard";
import topFilms from "../../mockData/carouselFilms.json";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import "./home.scss";

const Home = () => {
  const html = document.documentElement;

  const [filmList, setFilmList] = useState(films);
  const [loading, setLoading] = useState(false);
  const [documentHeight, setDocumentHeight] = useState<any>(
    html.scrollHeight - html.clientHeight
  );

  const handleFetch = () => {
    setTimeout(() => {
      setLoading(false);
      setFilmList(filmList.concat(filmList));
    }, 2000);
    setLoading(true);
    return true;
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isScrollOnBottom = currPos.y * -1 === documentHeight;
      if (isScrollOnBottom) {
        handleFetch();
        setDocumentHeight(
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        );
      }
    },
    [documentHeight]
  );

  useEffect(() => {
    setDocumentHeight(html.scrollHeight - html.clientHeight);
  }, [loading]);

  return (
    <div className="homepage-wrapper">
      <Header />
      <Row className="homepage-body">
        <Title className="top-films-title">top 10 films</Title>
        <Carousel filmsGroup={topFilms} />
        <Row justify="space-between" className="film-cards-container">
          {filmList?.map((film: any, index) => (
            <FilmCard film={film} key={index} />
          ))}
        </Row>
        {loading && <Loader />}
      </Row>
    </div>
  );
};

export default Home;
