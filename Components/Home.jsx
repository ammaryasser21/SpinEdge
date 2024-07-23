'use client'
import React, { useState, useEffect } from "react";
import "../style/Home.css";
import ContactComp from "./ContactComp";
import CustomButton from "./CustomButton";
import Info from "./Info";
import Card from "./Card";
import BlogCards from "./BlogCards";
import Image from "next/image";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1110);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Home">
      <section className="Hero-Home">
        <div className={`info ${isMobile ? "center" : ""}`}>
          <p>Marketing Agency</p>
          <h1>
            Elevating Your{" "}
            <span>
              Digital
              <img src="/images/circle.svg" alt="Circle"  />
            </span>{" "}
            Presence
            <div className="highlight">
              <img src="/images/highlight.svg" alt="Highlight" />
            </div>
          </h1>
          <p>
            At ElevateSphere, we&apos;re on a mission to transform your digital
            journey. We&apos;re not just another marketing agency; we&apos;re your
            strategic partners in achieving digital success.
          </p>
          <CustomButton
            buttons={[
              {
                title: "Contact Us",
                classColor: "",
                to: "/contact",
                showArrow: true,
              },
              {
                title: "Our Services",
                classColor: "",
                to: "/services",
                showArrow: false,
              },
            ]}
          />
        </div>
        <div className="art">
          <img src="/images/hero.svg" alt="Hero Art" />
        </div>
      </section>

      <section className="AboutUs-Home">
        <div className="left">
          <Info
            p1="About Us"
            p2=" At ElevateSphere, we are not just another digital marketing agency; we are your dedicated partner in transforming your digital vision into reality."
            h1="Transforming Digital Visions into Reality"
            center={!!isMobile}
          />
          <div className="bottom">
            <CustomButton
              buttons={[
                {
                  title: "Our Mission",
                  classColor: "",
                  to: "/about",
                  showArrow: false,
                },
                {
                  title: "Our Vision",
                  classColor: "",
                  to: "/about",
                  showArrow: false,
                },
              ]}
            />
            <p className="last">
              Our mission is simple yet powerful: to empower businesses of all
              sizes to excel in the digital world. We strive to bring
              cutting-edge solutions and a deep understanding of the digital
              sphere to every project, ensuring our clients achieve their goals.
            </p>
          </div>
        </div>
        <div className="right">
          {" "}
          <div className="img">
            <img src="/images/about-main.png" alt="About Main"  />
          </div>
          <div className="cards">
            <Card
              imgSrc="/images/about1.svg"
              altText="About 1"
              title="Planning"
              description="We are dedicated to planning, designing, and constructing captivating brands specifically catered to the needs of startups."
            />
            <Card
              imgSrc="/images/about2.svg"
              altText="About 2"
              title="Design"
              description="Our team focuses on creating visually appealing and user-friendly designs to enhance your brand's presence."
            />
          </div>
        </div>
      </section>

      <section className="Services-Home">
        <Info
          p1="Services"
          p2=""
          h1="Transforming Digital Visions into Reality"
          center={!!isMobile}
        />
        <div className="cards">
          <Card
            imgSrc="/images/service1.png"
            altText="Web Development"
            title="Web Development"
            description="From web applications to complex systems, our development team creates robust, scalable, and tailor-made solutions that resonate with your business objectives."
            linkTo="/services/web-development"
            linkText="Learn More"
          />
          <Card
            imgSrc="/images/service2.png"
            altText="UI/UX Design"
            title="UI/UX Design"
            description="Elevate user experiences with designs that blend aesthetic appeal with seamless functionality, fostering engagement and loyalty."
            linkTo="/services/ui-ux-design"
            linkText="Learn More"
          />
          <Card
            imgSrc="/images/service3.png"
            altText="Brand Identity"
            title="Brand Identity"
            description="Crafting identities that stand out in a crowded digital space, our branding solutions speak volumes and leave a lasting impact on your audience."
            linkTo="/services/brand-identity"
            linkText="Learn More"
          />
        </div>
        <CustomButton
          buttons={[
            {
              title: "See All",
              classColor: "",
              to: "/service",
              showArrow: false,
            },
          ]}
          center={true}
        />
      </section>

      <ContactComp />

      <section className="Blog-Home">
        <div className="top">
          <Info p1="Blog" h2="Navigating the Digital " center={!!isMobile} />
          <CustomButton
            buttons={[
              {
                title: "See All",
                classColor: "",
                to: "/service",
                showArrow: false,
              },
            ]}
            center={!!isMobile}
          />
        </div>

        <BlogCards />
      </section>
    </div>
  );
};

export default Home;
