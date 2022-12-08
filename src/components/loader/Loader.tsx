import React from "react";
import { Spin } from "antd";
import Title from "antd/es/typography/Title";

import "./loader.scss";

const Loader = () => {
  return <Spin tip={<Title level={5}>Loading...</Title>} />;
};

export default Loader;
