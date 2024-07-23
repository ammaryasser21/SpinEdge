import Link from "next/link";
import React from "react";

const Card = ({
  imgSrc,
  altText,
  title,
  description,
  linkTo,
  linkText,
  withLink,
  BlogCards,
}) => (
  <div className="card">
    <div className="img">
      <img src={imgSrc} alt={altText} />
    </div>
    {BlogCards && (
      <div className="Blog-p">
        <p></p>
        <p></p>
      </div>
    )}
    <h2>{title}</h2>
    <p>
      {description} {withLink && <Link href={linkTo}>{linkText}</Link>}
    </p>
    {linkTo && !withLink && (
      <Link href={linkTo}>
        {linkText}
        <span className="fas fa-arrow-right"></span>
      </Link>
    )}
  </div>
);

export default Card;
