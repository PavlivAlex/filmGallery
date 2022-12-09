import { Modal as BasicPopup } from "antd";

import "./popup.scss";

interface PopupProps {
  isPopuplVisible: boolean;
  onCancel: (e: any) => void;
  className?: string;
  children: any;
  width?: number;
  bodyStyle?: any;
}

function Popup({
  isPopuplVisible,
  onCancel,
  className = "",
  children,
  width = 580,
  bodyStyle,
}: PopupProps) {

  return (
      <BasicPopup
        className={`popup-wrapper ${className}`}
        open={isPopuplVisible}
        onCancel={onCancel}
        footer={null}
        width={width}
        bodyStyle={bodyStyle}
        centered
      >
        <div className="dialog-body">{children}</div>
      </BasicPopup>
  );
}

export default Popup;
