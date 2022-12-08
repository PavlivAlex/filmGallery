import React, { FC } from "react";
import { Button as BasicButton } from "antd";

import "./button.scss";

interface ButtonProps {
  title: string;
  type?: any;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, type, className, onClick }: ButtonProps) => {
  return (
    <BasicButton
      htmlType={type || "primary"}
      onClick={onClick}
      className={className || ""}
    >
      {title}
    </BasicButton>
  );
};

export default Button;
