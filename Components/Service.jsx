import React from 'react';
import '../style/Service.css';
import ContactComp from "./ContactComp";
import CustomButton from './CustomButton';
import CenterHero from "./CenterHero";
import Image from 'next/image';

const Card = ({ img, title, description }) => (
  <div className="card">
    <Image src={img.src} alt={title} width={110} height={110} />
    <Image src={img.curve} alt={`curve-${title}`}  width={1049} height={255} />
    <h1>{title}</h1>
    <p>{description}</p>
    <CustomButton
      buttons={[
        { title: 'Learn More', classColor: 'none', to: '/contact', showArrow: true }
      ]}
      center={false}
    />
  </div>
);

const Service = () => {
  const services = [
    {
      img:{src:"/images/serviceImg1.png",curve: "/images/servicePage1.png"},
      title: 'Web Development',
      description: 'From cutting-edge web development to bespoke app solutions, our development team crafts robust, scalable, and tailored digital solutions that resonate with your business objectives.',
    },
    {
      img:{src:"/images/serviceImg2.png",curve: "/images/servicePage2.png"},
      title: 'UI/UX Design',
      description: 'Elevate user experiences with designs that seamlessly blend aesthetic appeal and functional efficiency, fostering engagement and brand loyalty.',
    },
    {
      img:{src:"/images/serviceImg3.png",curve: "/images/servicePage3.png"},
      title: 'Brand Identity',
      description: 'Crafting identities that stand out in a crowded digital space, our branding solutions speak volumes and leave a lasting impact on your audience, ensuring your brand is unforgettable.',
    },
    {
      img:{src:"/images/serviceImg4.png",curve: "/images/servicePage4.png"},
      title: 'Digital Marketing',
      description: 'Our marketing strategies are designed to drive engagement, leveraging the latest trends and insights to position your brand at the forefront of the digital landscape.',
    },
  ];

  return (
    <div className="AboutPage">
      <CenterHero
        showImages={true}
        p1="Our Services"
        p2="Welcome to ElevateSphere, where we bring together a fusion of creativity and technical mastery to empower your brand's digital journey."
        prefix="Our marketing"
        suffix=""
        span="services"
        button={{ Text: "Contact Us", Link: "/contact", showArrow: false }}
        circle={{ Width: "308px", Height: "88px", Color: "#9094BA" }}
      />
      <section className='service-cards'>
        {services.map((service) => (
          <Card
            key={service.title}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>
      <ContactComp />
    </div>
  );
};

export default Service;