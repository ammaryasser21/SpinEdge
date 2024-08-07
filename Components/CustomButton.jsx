import React from "react";
import "../style/CustomButton.css";
import Link from "next/link";

const CustomButton = ({ buttons, center,font }) => (
  <div className={`buttons ${center ? "center" : ""} ${font}`}>
    {buttons.map(({ title, to, classColor, showArrow }) =>
      title ? (
        <Link key={title} href={to} className={classColor}>
          {title} {showArrow && <span className="fas fa-arrow-right"></span>}
        </Link>
      ) : null
    )}
  </div>
);

export default CustomButton;
