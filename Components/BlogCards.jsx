import React from "react";
import Link from "next/link";

const BlogCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="img">
          <img
            src="/images/blog1.png"
            alt="Blog 1"
          />
        </div>
        <div className="Blog-p">
          <p>Social Media</p>
          <p>Sep 8, 2023</p>
        </div>
        <h2>Harmonizing Your Digital Presence</h2>
        <p>
          In the ever-evolving symphony of social media, orchestrating a
          compelling and harmonious digital presence is key to capturing your
          audience&apos;s attention
          <Link href="/blog">...Learn More</Link>
        </p>
      </div>
      <div className="card">
        <div className="img">
          <img
            src="/images/blog2.png"
            alt="Blog 2"

          />
        </div>
        <div className="Blog-p">
          <p>Growth</p>
          <p>Sep 8, 2023</p>
        </div>
        <h2>Strategies for Scaling Your Online Presence</h2>
        <p>
          In today&apos;s competitive digital landscape, achieving growth is not
          just a goal—it&apos;s a necessity
          <Link href="/blog">...Learn More</Link>
        </p>
      </div>
      <div className="card">
        <div className="img">
          <img
            src="/images/blog3.png"
            alt="Blog 3"

          />
        </div>
        <div className="Blog-p">
          <p>Marketing</p>
          <p>Sep 8, 2023</p>
        </div>
        <h2>5 Trends Reshaping Marketing Strategies</h2>
        <p>
          In the ever-evolving landscape of marketing, adaptation is the key to
          survival. As digital frontiers continue
          <Link href="/blog">...Learn More</Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCards;
