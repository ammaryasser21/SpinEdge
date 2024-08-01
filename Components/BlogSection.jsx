import React from "react";
import Info from "./Info";
import CustomButton from "./CustomButton";
import BlogCards from "./BlogCards";
import "../style/BlogHome.css";

const BlogSection = ({ primaryText, subheading, buttons, blogCardsFont}) => {
  return (
    <section className="Blog-Home">
      <div className="top">
        <Info
          primaryText={primaryText}
          subheading={subheading}
          font={blogCardsFont}
        />
        <CustomButton
          buttons={buttons}
          font={blogCardsFont}
        />
      </div>
      <BlogCards font={blogCardsFont} />
    </section>
  );
};

export default BlogSection;
