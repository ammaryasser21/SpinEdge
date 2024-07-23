'use client'
import React, { useState, useEffect } from "react";
import "../style/About.css";
import ContactComp from "./ContactComp.jsx";
import Info from "./Info.jsx";
import CenterHero from "./CenterHero.jsx";
import Image from "next/image";

const Stats = () => (
  <section className="count">
    {[
      { value: "85M+", label: "Revenue Generated" },
      { value: "50+", label: "Team Members" },
      { value: "500+", label: "Projects Completed" },
      { value: "250+", label: "Clients Worldwide" },
    ].map((stat) => (
      <div key={stat.label}>
        <p>{stat.value}</p>
        <p>{stat.label}</p>
      </div>
    ))}
  </section>
);

const Card = ({ imgSrc, title, description }) => (
  <div className="card">
    <div className="img">
      <img src={imgSrc} alt={title}/>
    </div>
    <div className="card-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="AboutPage">
      <CenterHero
        showImages={true}
        buttonText="Contact Us"
        buttonLink="/contact"
        showArrow={false}
        p1="About The Team"
        p2="At ElevateSphere, We are not just another digital marketing agency; we are your dedicated partner in transforming your digital vision into reality"
        h1BeforeSpan="Transforming"
        h1AfterSpan="Visions into Reality"
        span="Digital"
      />
      <Stats />
      <section className="OurMission">
        <Info
          title="Learn More"
          classColor="green"
          to="/contact"
          showArrow={true}
          p1="Our Mission"
          p2="At ElevateSphere, our mission is clear: to empower businesses to thrive in the digital landscape. We are dedicated to providing tailored, innovative solutions that propel our clients towards their goals."
          h2="Empowering Your Digital Success"
          center={!!isMobile}
        />
        <div className="img">
          <img
            src="/images/aboutUsPage.png"
            alt="About Us"
    
          />
        </div>
      </section>
      <section className="OurVision">
        <Info
          showArrow={true}
          p1="Our Vision"
          p2="Empowering businesses to effortlessly transform ideas into successful digital ventures."
          h1="Why Choose ElevateSphere?"
          center={true}
        />
        <div className="cards">
          {[
            {
              imgSrc: "/images/ourvision1.png",
              title: "Experience",
              description:
                "With years of experience, we have a proven track record of success.",
            },
            {
              imgSrc: "/images/ourvision2.png",
              title: "Expert Team",
              description:
                "Our talented team of developers, designers, branding experts, and marketing strategists work together to deliver outstanding results.",
            },
            {
              imgSrc: "/images/ourvision3.png",
              title: "Innovation",
              description:
                "We stay at the forefront of industry trends and technology to provide the best solutions for our clients.",
            },
            {
              imgSrc: "/images/ourvision4.png",
              title: "Client-Centric",
              description:
                "Your success is our success, and we are dedicated to your satisfaction.",
            },
          ].map((card) => (
            <Card
              key={card.title}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
      <ContactComp />
    </div>
  );
};

export default About;
