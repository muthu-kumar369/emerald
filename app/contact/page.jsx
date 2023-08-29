import React from 'react'
// import bannerImage from '../../public/images/bg_2.webp';
import bannerImage from '../../public/image/banner_7.webp';
import Banner from '@/components/banner/page';
import { BiMailSend, BiSolidMap,BiSolidPhone } from 'react-icons/bi';
import ContactSection from '@/components/contactSection/page';
// import About4 from "../../public/images/about-4.webp";
import About4 from "../../public/image/contact_2.webp";
export const metedata={
  title:"Contact",
  description:"Contact page in emerald"
} 
const bannerDetails={
  bannerImage,
  content: {
    heading: "Navigating Possibilities Together: Get in Touch",
    content: "We extend our hands to you, inviting you to share, inquire, and connect. We're not just here to respond; we're here to engage in meaningful conversations that forge relationships.",
    button: {
      text: " Let's Begin",
      link: "/contact/#contact-form",
      class: "background-primary",
      smooth:true
    }
  },
  bannerDetails:[
    {
      text:"Home",
      link:"/"
    },
    {
      text:"Contact"
    }
  ],
  heading:"Contact",
  banner:true
}

const contactDetails={
  contactDetails:[
    {
      icon:<BiSolidMap/>,
      boldText:"Address: ",
      text:"Nagercoil, Kanyakumari District, Tamilnadu, India"
    },
    {
      icon:<BiSolidPhone/>,
      boldText:"Phone: ",
      text:"+91 9876543210"
    },
    {
      icon:<BiMailSend/>,
      boldText:"Email: ",
      text:"emarald@gmail.com"
    },
  ],
  formHeading:"Contact us",
  formDetails:[
    {
      half:true,
      inputDetails:[
        {
          label:"Full Name",
          type:"text",
          name:"firstName",
          placeholder:"Name"
        },
        {
          label:"Email Address",
          type:"email",
          name:"email",
          placeholder:"Email"
        }
      ]
    },
    {
      full:true,
      label:"Subject",
      type:"text",
      name:"subject",
      placeholder:"Subject"
    },
    {
      full:true,
      label:"Message",
      type:"textarea",
      name:"message",
      placeholder:"Message",
      row:"3"
    },
    {
      button:true,
      text:"Send Message"
    }
  ],
  backgroundImage:About4
}
const Contact = () => {
  return (
    <>
    <Banner data={bannerDetails}/>
    <ContactSection data={contactDetails}/>
    </>
  )
}

export default Contact;