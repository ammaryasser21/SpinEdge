import React from 'react';
import '../style/CustomButton.css';
import Link from 'next/link';

const CustomButton = ({ buttons, center }) => (
  <div className={`buttons ${center ? 'center' : ''}`}>
    {buttons.map(({ title, to, classColor, showArrow }) => (
      title ? (
        <Link key={title} href={to} className={classColor === 'green' ? 'green' : classColor === 'none' ? 'none' : ''}>
          {title} {showArrow && <span className="fas fa-arrow-right"></span>}
        </Link>
      ) : null
    ))}
  </div>
);


export default CustomButton;
