import React from 'react';
import '../style/Service.css';
import ContactComp from "./ContactComp";
import CustomButton from './CustomButton';
import CenterHero from "./CenterHero";

const Card = ({ imgSrc, curveSrc, title, description }) => (
  <div className="card">
    <img src={imgSrc} alt={title} />
    <img src={curveSrc} alt={`curve-${title}`} />
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
      img: "/images/serviceImg1.png",
      curve: "/images/servicePage1.png",
      title: 'Web Development',
      description: 'From cutting-edge web development to bespoke app solutions, our development team crafts robust, scalable, and tailored digital solutions that resonate with your business objectives.',
    },
    {
      img: "/images/serviceImg2.png",
      curve: "/images/servicePage2.png",
      title: 'UI/UX Design',
      description: 'Elevate user experiences with designs that seamlessly blend aesthetic appeal and functional efficiency, fostering engagement and brand loyalty.',
    },
    {
      img: "/images/serviceImg3.png",
      curve: "/images/servicePage3.png",
      title: 'Brand Identity',
      description: 'Crafting identities that stand out in a crowded digital space, our branding solutions speak volumes and leave a lasting impact on your audience, ensuring your brand is unforgettable.',
    },
    {
      img: "/images/serviceImg4.png",
      curve: "/images/servicePage4.png",
      title: 'Digital Marketing',
      description: 'Our marketing strategies are designed to drive engagement, leveraging the latest trends and insights to position your brand at the forefront of the digital landscape.',
    },
  ];

  return (
    <div className="AboutPage">
      <CenterHero
        showImages={true}
        buttonText="Contact Us"
        buttonLink="/contact"
        showArrow={false}
        p1="Our Services"
        p2="Welcome to ElevateSphere, where we bring together a fusion of creativity and technical mastery to empower your brand's digital journey."
        h1BeforeSpan="Our marketing"
        h1AfterSpan=""
        span="services"
      />
      <section className='service-cards'>
        {services.map((service) => (
          <Card
            key={service.title}
            imgSrc={service.img}
            curveSrc={service.curve}
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