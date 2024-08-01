import React from "react";
import CustomButton from "./CustomButton";
import "../style/CenterHero.css";
import Image from "next/image";

const CenterHero = ({
  showImages = true,
  button,
  subtitle,
  description,
  prefix,
  suffix,
  span,
  circle,
  font,
}) => {
  // Function to get the appropriate SVG based on subtitle
  const getSVG = () => {
    switch (subtitle) {
      case "Contact":
        return (
          <svg width="449" height="88" viewBox="0 0 449 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.07955 65.9195C43.4378 106.517 431.237 85.5705 447.647 47.8881C473.509 -11.4967 120.664 -6.09812 70.3731 13.3369C68.5105 14.0567 68.8153 15.3864 70.3731 15.1005C206.661 -9.91314 454.895 5.88686 433.866 47.8881C409.615 79.8839 12.2966 102.774 10.6858 58.7213C9.62527 29.7159 187.511 2.39572 316.192 11.1055C320.04 10.7456 317.01 9.17177 312.791 8.83803C174.803 -0.45721 -27.3775 27.1859 3.07955 65.9195Z" fill="#B290BA"/>
          </svg>
        );
      case "Our Blog":
        return (
          <svg width="267" height="94" viewBox="0 0 267 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.83127 70.414C25.8305 113.78 256.437 91.4048 266.195 51.1532C281.574 -12.2806 71.7536 -6.5139 41.8477 14.2463C40.7401 15.0151 40.9213 16.4355 41.8477 16.13C122.892 -10.589 270.506 6.28824 258.001 51.1532C243.58 85.3306 7.31224 109.781 6.35439 62.725C5.72371 31.742 111.504 2.55907 188.025 11.8627C190.313 11.4782 188.512 9.79712 186.003 9.44062C103.948 -0.488383 -16.2802 29.0394 1.83127 70.414Z" fill="#9BBA90"/>
          </svg>
        );
      case "Our Services":
        return (
          <svg width="308" height="88" viewBox="0 0 308 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.11248 65.9195C29.797 106.517 295.815 85.5705 307.072 47.8881C324.812 -11.4967 82.772 -6.09812 48.2738 13.3369C46.9961 14.0567 47.2051 15.3864 48.2738 15.1005C141.763 -9.91314 312.044 5.88686 297.619 47.8881C280.983 79.8839 8.4351 102.774 7.33015 58.7213C6.60263 29.7159 128.626 2.39572 216.898 11.1055C219.537 10.7456 217.459 9.17177 214.565 8.83803C119.91 -0.45721 -18.7801 27.1859 2.11248 65.9195Z" fill="#9094BA"/>
          </svg>
        );
      default:
        return (
          <svg width="275" height="88" viewBox="0 0 275 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.88614 65.9195C26.6045 106.517 264.12 85.5705 274.171 47.8881C290.011 -11.4967 73.9036 -6.09812 43.1016 13.3369C41.9608 14.0567 42.1474 15.3864 43.1016 15.1005C126.574 -9.91314 278.611 5.88686 265.731 47.8881C250.878 79.8839 7.53134 102.774 6.54478 58.7213C5.89521 29.7159 114.845 2.39572 193.659 11.1055C196.015 10.7456 194.16 9.17177 191.576 8.83803C107.062 -0.45721 -16.768 27.1859 1.88614 65.9195Z" fill="#B7BA90"/>
          </svg>
        );
    }
  };

  return (
    <section className="aboutHero">
      <div className={`info center`}>
        <p>{subtitle}</p>
        <h1>
          {prefix}
          <span>
            {span}
            {showImages && getSVG()}
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

        <p className={font.className}>{description}</p>

        {button ? (
          <CustomButton
            buttons={[
              {
                title: button.Text,
                classColor: "",
                to: button.Link,
                showArrow: button.showArrow,
              },
            ]}
            center={true}
          />
        ) : null}

        {showImages && (
          <Image
            src="/images/hero3.png"
            alt="hero3"
            width={50.01}
            height={27.85}
          />
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
