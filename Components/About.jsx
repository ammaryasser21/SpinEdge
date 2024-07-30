"use client";
import React from "react";
import "../style/About.css";
import ContactComp from "./ContactComp.jsx";
import Info from "./Info.jsx";
import CenterHero from "./CenterHero.jsx";
import Image from "next/image";
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const Stats = () => (
  <section className="count">
    {[
      { value: "85M+", label: "Revenue Generated" },
      { value: "50+", label: "Team Members" },
      { value: "500+", label: "Projects Completed" },
      { value: "250+", label: "Clients Worldwide" },
    ].map((stat) => (
      <div key={stat.label}>
        <p className={spaceGrotesk.className}>{stat.value}</p>
        <p className={spaceGrotesk.className}>{stat.label}</p>
      </div>
    ))}
  </section>
);

const Card = ({ img, title, description,font }) => (
  <div className="card">
    <div className="img">
      <Image src={img.Src} alt={title} width={img.Width} height={img.Height} />
    </div>
    <div className="card-content">
      <h2>{title}</h2>
      <p className={font.className}>{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="AboutPage">
      <CenterHero
        showImages={true}
        subtitle="About The Team"
        description="At ElevateSphere, We are not just another digital marketing agency; we are your dedicated partner in transforming your digital vision into reality"
        prefix="Transforming"
        suffix="Visions into Reality"
        span="Digital"
        button={{ Text: "Contact Us", Link: "/contact", showArrow: false }}
        circle={{ Width: "275px", Height: "88px", Color: "#B7BA90" }}
        font={spaceGrotesk}
      />
      <Stats />
      <section className="OurMission">
        <Info
          title="Learn More"
          classColor="green"
          to="/contact"
          showArrow={true}
          primaryText="Our Mission"
          secondaryText="At ElevateSphere, our mission is clear: to empower businesses to thrive in the digital landscape. We are dedicated to providing tailored, innovative solutions that propel our clients towards their goals."
          subheading="Empowering Your Digital Success"
          font={spaceGrotesk}
        />
        <div className="img">
          <Image
            src="/images/aboutUsPage.png"
            alt="About Us"
            width={470}
            height={433}
          />
        </div>
      </section>
      <section className="OurVision">
        <Info
          showArrow={true}
          primaryText="Our Vision"
          secondaryText="Empowering businesses to effortlessly transform ideas into successful digital ventures."
          heading="Why Choose ElevateSphere?"
          center={true}
          font={spaceGrotesk}
        />
        <div className="cards">
          {[
            {
              img: {
                Src: "/images/ourvision1.png",
                Width: "64",
                Height: "64",
              },
              title: "Experience",
              description:
                "With years of experience, we have a proven track record of success.",
            },
            {
              img: {
                Src: "/images/ourvision2.png",
                Width: "64",
                Height: "64",
              },
              title: "Expert Team",
              description:
                "Our talented team of developers, designers, branding experts, and marketing strategists work together to deliver outstanding results.",
            },
            {
              img: {
                Src: "/images/ourvision3.png",
                Width: "64",
                Height: "64",
              },

              title: "Innovation",
              description:
                "We stay at the forefront of industry trends and technology to provide the best solutions for our clients.",
            },
            {
              img: {
                Src: "/images/ourvision4.png",
                Width: "64",
                Height: "64",
              },

              title: "Client-Centric",
              description:
                "Your success is our success, and we are dedicated to your satisfaction.",
            },
          ].map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              img={card.img}
              font={spaceGrotesk}
            />
          ))}
        </div>
      </section>
      <ContactComp/>
    </div>
  );
};

export default About;
