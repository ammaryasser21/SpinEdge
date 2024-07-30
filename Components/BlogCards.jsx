import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ imageSrc, altText, category, date, title, description, font }) => (
  <div className="card">
    <div className="img">
      <Image
        src={imageSrc}
        alt={altText}
        width={196}
        height={196}
      />
    </div>
    <div className="Blog-p">
      <p className={font.className}>{category}</p>
      <p className={font.className}>{date}</p>
    </div>
    <h2>{title}</h2>
    <p className={font.className}>
      {description}
      <Link href="/blog">Learn More</Link>
    </p>
  </div>
);

const BlogCards = ({ font }) => {
  const blogData = [
    {
      imageSrc: "/images/blog1.png",
      altText: "Blog 1",
      category: "Social Media",
      date: "Sep 8, 2023",
      title: "Harmonizing Your Digital Presence",
      description: "In the ever-evolving symphony of social media, orchestrating a compelling and harmonious digital presence is key to capturing your audience's attention..."
    },
    {
      imageSrc: "/images/blog2.png",
      altText: "Blog 2",
      category: "Growth",
      date: "Sep 8, 2023",
      title: "Strategies for Scaling Your Online Presence",
      description: "In today's competitive digital landscape, achieving growth is not just a goal—it's a necessity..."
    },
    {
      imageSrc: "/images/blog3.png",
      altText: "Blog 3",
      category: "Marketing",
      date: "Sep 8, 2023",
      title: "5 Trends Reshaping Marketing Strategies",
      description: "In the ever-evolving landscape of marketing, adaptation is the key to survival. As digital frontiers continue..."
    }
  ];

  return (
    <div className="cards">
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          imageSrc={blog.imageSrc}
          altText={blog.altText}
          category={blog.category}
          date={blog.date}
          title={blog.title}
          description={blog.description}
          font={font}
        />
      ))}
    </div>
  );
};

export default BlogCards;
