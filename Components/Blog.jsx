import React from "react";
import "../style/Blog.css";
import "../style/BlogHome.css"
import ContactComp from "./ContactComp";
import CenterHero from "./CenterHero";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import BlogSection from "./BlogSection";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const BlogCard = ({ imgSrc, imgAlt, category, date, title, description }) => {
  return (
    <div className="card">
      <div className="img">
        <Image src={imgSrc} alt={imgAlt} width={196} height={196} />
      </div>
      <div className="content-card">
        <div className="first">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="blog-page">
      <CenterHero
        showImages={true}
        subtitle="Our Blog"
        description="Welcome to ElevateSphere's blog, where we dive into the ever-evolving world of digital innovation."
        prefix="Navigating the"
        suffix="Sphere"
        span="Digital"
        button={{ Text: "Contact Us", Link: "/contact", showArrow: false }}
        circle={{ Width: "267px", Height: "94px", Color: "#9BBA90" }}
        font={spaceGrotesk}
      />

      <section className="blog-cards">
        <BlogCard
          imgSrc="/images/blog1.png"
          imgAlt="Blog1"
          category="Social Media"
          date="Sep 8, 2023"
          title="Harmonizing Your Digital Presence"
          description="In the ever-evolving symphony of social media, orchestrating a compelling and harmonious digital presence is key to capturing your audience's attention."
        />
        <BlogCard
          imgSrc="/images/blog2.png"
          imgAlt="Blog2"
          category="Content"
          date="Sep 8, 2023"
          title="How to reach out for guest post to increase your SEO authority"
          description="In the ever-evolving symphony of social media, orchestrating a compelling and harmonious digital presence is key to capturing your audience's attention."
        />
      </section>

      <BlogSection
        subheading="Latest Articles"
        buttons={[
          { title: "All", classColor: "", to: "/", showArrow: false },
          { title: "Growth", classColor: "", to: "/", showArrow: false },
          { title: "Marketing", classColor: "", to: "/", showArrow: false },
          { title: "Social Media", classColor: "", to: "/", showArrow: false },
        ]}
        blogCardsFont={spaceGrotesk.className}
        customButtonProps={{ center: false }}
      />
      <ContactComp />
    </div>
  );
};

export default Blog;
