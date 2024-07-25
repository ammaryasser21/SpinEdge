import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ img, title, description, link }) => (
  <div className="card">
    <div className="img">
      <Image
        src={img.Src}
        alt={img.alt}
        width={img.width}
        height={img.height}
      />
    </div>
    <h2>{title}</h2>
    <p>
      {description} {link.withLink && <Link href={link.To}>{link.Text}</Link>}
    </p>
    {link.To && !link.withLink && (
      <Link href={link.To}>
        {link.Text}
        <span className="fas fa-arrow-right"></span>
      </Link>
    )}
  </div>
);

export default Card;
