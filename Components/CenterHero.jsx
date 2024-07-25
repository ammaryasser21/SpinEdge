import React from "react";
import CustomButton from "./CustomButton";
import "../style/CenterHero.css";
import Image from "next/image";

const CenterHero = ({
  showImages = true,
  button,
  p1,
  p2,
  prefix,
  suffix,
  span,
  circle,
}) => {
  return (
    <section className="aboutHero">
      <div className={`info center`}>
        <p>{p1}</p>
        <h1>
          {prefix}
          <span>
            {span}
            {showImages && (
              <svg
                width={circle.Width}
                height={circle.Height}
                viewBox="0 0 331 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.43427 86.1363C32.1603 139.136 317.795 111.79 329.883 62.5965C348.931 -14.9298 89.0419 -7.88193 51.9997 17.4903C50.6277 18.43 50.8522 20.1659 51.9997 19.7926C152.383 -12.8624 335.221 7.76434 319.732 62.5965C301.87 104.367 9.22315 134.25 8.03672 76.7391C7.25555 38.8729 138.278 3.20669 233.058 14.5772C235.893 14.1073 233.662 12.0528 230.554 11.6171C128.918 -0.517781 -19.999 35.57 2.43427 86.1363Z"
                  fill={circle.Color}
                />
              </svg>
            )}
          </span>
          {suffix}
          {showImages && (
          <Image
            src="/images/highlight.svg"
            alt="Highlight"
            width={100}
            height={100}
          />
        )}
        </h1>
        
        <p>{p2}</p>

        {button ? <CustomButton
          buttons={[
            {
              title: button.Text,
              classColor: "",
              to: button.Link,
              showArrow: button.showArrow,
            },
          ]}
          center={true}
        /> : null}

       
        {showImages && (
          <Image src="/images/hero3.png" alt="hero3" width={50.01} height={27.85} />
        )}
        {showImages && (
          <Image src="/images/hero2.png" alt="hero2" width={38} height={38} />
        )}
        {showImages && (
          <Image src="/images/hero1.png" alt="hero1" width={26} height={26} />
        )}
      </div>
    </section>
  );
};

export default CenterHero;
