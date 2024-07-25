"use client";
import React from "react";
import "../style/Home.css";
import ContactComp from "./ContactComp";
import CustomButton from "./CustomButton";
import Info from "./Info";
import Card from "./Card";
import BlogCards from "./BlogCards";
import Image from "next/image";

const Home = () => {
  return (
    <div className="Home">
      <section className="Hero-Home">
        <div className='info'>
          <p>Marketing Agency</p>
          <h1>
            Elevating Your{" "}
            <span>
              Digital
              <svg
                width="330px"
                height="114px"
                viewBox="0 0 331 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.43427 86.1363C32.1603 139.136 317.795 111.79 329.883 62.5965C348.931 -14.9298 89.0419 -7.88193 51.9997 17.4903C50.6277 18.43 50.8522 20.1659 51.9997 19.7926C152.383 -12.8624 335.221 7.76434 319.732 62.5965C301.87 104.367 9.22315 134.25 8.03672 76.7391C7.25555 38.8729 138.278 3.20669 233.058 14.5772C235.893 14.1073 233.662 12.0528 230.554 11.6171C128.918 -0.517781 -19.999 35.57 2.43427 86.1363Z"
                  fill="#90BAA8"
                />
              </svg>
            </span>{" "}
            Presence
            <div className="highlight">
              <Image
                src="/images/highlight.svg"
                alt="Highlight"
                width={100}
                height={100}
              />
            </div>
          </h1>
          <p>
            At ElevateSphere, we&apos;re on a mission to transform your digital
            journey. We&apos;re not just another marketing agency; we&apos;re
            your strategic partners in achieving digital success.
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
          <Image
            src="/images/hero.svg"
            alt="Hero Art"
            width={452}
            height={705}
          />
        </div>
      </section>

      <section className="AboutUs-Home">
        <div className="left">
          <Info
            p1="About Us"
            p2=" At ElevateSphere, we are not just another digital marketing agency; we are your dedicated partner in transforming your digital vision into reality."
            h1="Transforming Digital Visions into Reality"
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
            <Image
              src="/images/about-main.png"
              alt="About Main"
              width={468}
              height={349}
            />
          </div>
          <div className="cards">
            <Card
              img={{
                Src: "/images/about1.svg",
                alt: "About 1",
                width: 100,
                height: 100,
              }}
              title="Planning"
              description="We are dedicated to planning, designing, and constructing captivating brands specifically catered to the needs of startups."
              link={{withLink:false}}
            />
            <Card
              img={{
                Src: "/images/about2.svg",
                alt: "About 2",
                width: 100,
                height: 100,
              }}
              title="Design"
              description="Our team focuses on creating visually appealing and user-friendly designs to enhance your brand's presence."
              link={{withLink:false}}
            />
          </div>
        </div>
      </section>

      <section className="Services-Home">
        <Info
          p1="Services"
          h1="Transforming Digital Visions into Reality"
        />
        <div className="cards">
          <Card
            img={{
              Src: "/images/service1.png",
              alt: "Web Development",
              width: 116,
              height: 116,
            }}
            link={{ To: "/services", Text: "Learn More" ,withLink:false}}
            title="Web Development"
            description="From web applications to complex systems, our development team creates robust, scalable, and tailor-made solutions that resonate with your business objectives."
          />
          <Card
            img={{
              Src: "/images/service2.png",
              alt: "UI/UX Design",
              width: 116,
              height: 116,
            }}
            link={{ To: "/services", Text: "Learn More",withLink:false }}
            title="UI/UX Design"
            description="Elevate user experiences with designs that blend aesthetic appeal with seamless functionality, fostering engagement and loyalty."
          />
          <Card
            img={{
              Src: "/images/service3.png",
              alt: "Brand Identity",
              width: 116,
              height: 116,
            }}
            link={{ To: "/services", Text: "Learn More",withLink:false }}
            title="Brand Identity"
            description="Crafting identities that stand out in a crowded digital space, our branding solutions speak volumes and leave a lasting impact on your audience."
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
          <Info p1="Blog" h2="Navigating the Digital " />
          <CustomButton
            buttons={[
              {
                title: "See All",
                classColor: "",
                to: "/service",
                showArrow: false,
              },
            ]}
          />
        </div>
        <BlogCards />
      </section>
    </div>
  );
};

export default Home;
