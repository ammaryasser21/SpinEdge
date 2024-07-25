import React from "react";
import "../style/Blog.css";
import ContactComp from "./ContactComp";
import Info from "./Info";
import CustomButton from "./CustomButton";
import BlogCards from "./BlogCards";
import CenterHero from "./CenterHero";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="blog-page">
      <CenterHero
        showImages={true}
        p1="Our Blog"
        p2="Welcome to ElevateSphere's blog, where we dive into the ever-evolving world of digital innovation."
        prefix="Navigating the"
        suffix="Sphere"
        span="Digital"
        button={{ Text: "Contact Us", Link: "/contact", showArrow: false }}
        circle={{ Width: "267px", Height: "94px", Color: "#9BBA90" }}
      />

      <section className="blog-cards">
        <div className="card">
          <div className="img">
            <Image
              src="/images/blog1.png"
              alt="Blog1"
              width={196}
              height={196}
            />
          </div>
          <div className="content-card">
            <div className="first">
              <p>Social Media</p>
              <p>Sep 8,2023</p>
            </div>
            <h1>Harmonizing Your Digital Presence</h1>
            <p>
              In the ever-evolving symphony of social media, orchestrating a
              compelling and harmonious digital presence is key to capturing
              your audience&apos;s attention
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <Image
              src="/images/blog2.png"
              alt="Blog2"
              width={196}
              height={196}
            />
          </div>
          <div className="content-card">
            <div className="first">
              <p>Content</p>
              <p>Sep 8,2023</p>
            </div>
            <h1>
              How to reach out for guest post to increase your seo authority
            </h1>
            <p>
              In the ever-evolving symphony of social media, orchestrating a
              compelling and harmonious digital presence is key to capturing
              your audience&apos;s attention.
            </p>
          </div>
        </div>
      </section>

      <section className="Blog-Home">
        <div className="top">
          <Info p1="" p2="" h1="Latest Articles" />
          <CustomButton
            buttons={[
              { title: "All", classColor: "", to: "/", showArrow: false },
              { title: "Growth", classColor: "", to: "/", showArrow: false },
              { title: "Marketing", classColor: "", to: "/", showArrow: false },
              {
                title: "Social Media",
                classColor: "",
                to: "/",
                showArrow: false,
              },
            ]}
            center={false}
          />
        </div>
        <BlogCards />
      </section>

      <ContactComp />
    </div>
  );
};

export default Blog;
