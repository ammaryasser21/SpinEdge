import React from 'react';
import CustomButton from '../Components/CustomButton';
import '../style/Info.css'
const Info = ({
  title,
  classColor,
  to,
  showArrow,
  p1,
  p2,
  h2,
  h1,
  center
}) => {
  return (
    <div className={`info ${center===true ? 'center' : ''}`}>
      <p className={`${!p1 ? 'none' : ''}`}>{p1}</p>
      {h2 ? <h2>{h2}</h2> : <h1>{h1}</h1>}
      <p className={`${!p2 ? 'none' : ''}`}>{p2}</p>

      {title && <CustomButton
        buttons={[
          { title: title , classColor: classColor , to: to , showArrow: { showArrow } }
        ]}
        center={center}
      />}
    </div>
  );
};

export default Info;
