import React from "react";
import { Input as BasickInput } from "antd";

import "./input.scss";

interface InputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: any)=>void;
  disabled?: boolean;
  type?: string;
  className?: string;
}

const Input = ({ placeholder, disabled, type, className, value, onChange }: InputProps) => {
  return (
    <div>
 <BasickInput
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
      disabled={disabled}
      type={type || "text"}
      className={className || ""}
    />
    </div>
   
  );
};

export default Input;
