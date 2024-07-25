'use client'
import React from 'react';
import '../style/ContactComp.css'
import CustomButton from './CustomButton';
import Image from 'next/image';
const ContactComp = () => {
  return (
    <section className='Contact-Home'>
    <Image src="/images/contact.png" alt="Contact" width={446} height={518}  />
    <div className='info'>
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