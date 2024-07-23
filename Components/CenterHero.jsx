import React from "react";
import CustomButton from "./CustomButton";
import "../style/CenterHero.css";

const CenterHero = ({
  showImages = true,
  buttonText,
  buttonLink,
  showArrow = true,
  p1,
  p2,
  h1BeforeSpan,
  h1AfterSpan,
  span,
}) => {
  return (
    <section className="aboutHero">
      <div className={`info center`}>
        <p>{p1}</p>
        <h1>
          {h1BeforeSpan}
          <span>
            {span}
            {showImages && <img src="/images/circle.svg" alt="Circle"  />}
          </span>
          {h1AfterSpan}
        </h1>
        <p>{p2}</p>

        <CustomButton
          buttons={[
            {
              title: buttonText,
              classColor: "",
              to: buttonLink,
              showArrow: showArrow,
            },
          ]}
          center={true}
        />
        {showImages && <img src="/images/hero3.png" alt="hero3" />}
        {showImages && <img src="/images/hero2.png" alt="hero2" />}
        {showImages && <img src="/images/highlight.svg" alt="Highlight" />}
        {showImages && <img src="/images/hero1.png" alt="hero1" />}
      </div>
    </section>
  );
};

export default CenterHero;
