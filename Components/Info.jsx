import React from 'react';
import CustomButton from '../Components/CustomButton';
import '../style/Info.css';

const Info = ({
  buttonText,
  buttonColor,
  buttonLink,
  showArrow,
  primaryText,
  secondaryText,
  subheading,
  heading,
  centerAlign,
  font
}) => {
  return (
    <div className={`info ${centerAlign ? 'center' : ''}`}>
      {primaryText && <p>{primaryText}</p>}
      {subheading ? <h2>{subheading}</h2> : <h1>{heading}</h1>}
      {secondaryText && <p className={font}>{secondaryText}</p>}
      {buttonText && (
        <CustomButton
          buttons={[
            {
              title: buttonText,
              classColor: buttonColor,
              to: buttonLink,
              showArrow
            }
          ]}
          center={centerAlign}
        />
      )}
    </div>
  );
};

export default Info;
