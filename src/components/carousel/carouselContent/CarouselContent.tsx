import { Col, Row, Typography } from "antd";

import "./carouselContent.scss";

const CarouselContent = ({ filmGroup }: any) => {
  return (
    <Row className="carousel-content-row" justify="space-between">
      {filmGroup?.src1 && (
        <Col span={6}>
          <Typography>{filmGroup.src1?.title}</Typography>
          <div className="carousel-image-wrapper">
            <div className="carousel-film-info-block"></div>
            <img src={filmGroup?.src1?.icon} alt="avatar" />
          </div>
        </Col>
      )}
      {filmGroup?.src2 && (
        <Col span={6}>
          <Typography>{filmGroup.src2?.title}</Typography>
          <div className="carousel-image-wrapper">
            <div className="carousel-film-info-block"></div>
            <img src={filmGroup?.src2?.icon} alt="avatar" />
          </div>
        </Col>
      )}
      {filmGroup?.src3 && (
        <Col span={6}>
          <Typography>{filmGroup.src3?.title}</Typography>
          <div className="carousel-image-wrapper">
            <div className="carousel-film-info-block"></div>
            <img src={filmGroup?.src3?.icon} alt="avatar" />
          </div>
        </Col>
      )}
    </Row>
  );
};

export default CarouselContent;
