'use client'
import React ,{useState,useEffect} from 'react';
import '../style/ContactComp.css'
import CustomButton from './CustomButton';
import Image from 'next/image';
const ContactComp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className='Contact-Home'>
    <img src="/images/contact.png" alt="Contact"  />
    <div className={`info ${isMobile ? 'center' : ''}`}>
      <p>Contact</p>
      <h1>Ready to grow your startup? Get in touch today!</h1>
      <CustomButton
            buttons={[
              { title: 'Get in touch', classColor: 'green', to: '/contact', showArrow: true }
            ]}
            center={false}
          />
    </div>
  </section>
  )
}

export default ContactComp