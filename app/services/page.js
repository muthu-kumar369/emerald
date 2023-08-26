import React from 'react'
// import bannerImage from '../../public/images/bg_2.webp';
import bannerImage from '../../public/image/banner_4.webp';
import Banner from '@/components/banner/page';
import ServiceCard from '@/components/serviceCard/page';
import { BiSolidChevronRight } from 'react-icons/bi';
import {MdDesignServices,MdDeveloperMode} from 'react-icons/md';
import {FaLaptopCode, FaWordpress} from 'react-icons/fa';
import {PiCertificateBold} from 'react-icons/pi';
import {TbDeviceImacSearch, TbDeviceAnalytics} from 'react-icons/tb';
// import bgImage from '../../public/images/bg_4.webp';
import bgImage from '../../public/image/bg_cover.webp';
import SubscribeSection from '@/components/subscribeSection/page';

export const metadata={
  title:"Services",
  description:"Services in emerald"
}
const bannerDetails={
  bannerImage,
  bannerDetails:[
    {
      text:"Home",
      link:"/"
    },
    {
      text:"Services"
    }
  ],
  heading:"Services",
  banner:true
}

const serviceCards={
  service:true,
  title:"OUR SERVICES",
  heading:"Customized Solution for Every Business",
  cardDetails:[
    {
      icon: <FaLaptopCode />,
      heading: 'Web Development',
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"web"
      },
      path:true
    },
    {
      icon: <MdDeveloperMode/>,
      heading: 'App Development',
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"app"
      },
      path:true
    },
    {
      icon: <FaWordpress />,
      heading: 'Wordpress Development',
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"wordpress"
      },
      path:true
    },
    {
      icon: <TbDeviceAnalytics />,
      heading: 'Marketing',
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"marketing"
      },
      path:true
    },
    {
      icon:<PiCertificateBold/>,
      heading:'Branding',
      body:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ',
      button:{
        text:<BiSolidChevronRight/>,
        class:'rounded',
        link:"branding"
      },
      path:true
    }
  ]
}

const subscribeSection={
  bgImage,
  heading:"Subscribe to our Newsletter",
  text:"A small river named Duden flows by their place",
  singleInputField:{
    name:"feedback",
    type:"text",
    placeHolder:"Send your query via email"

  }
}
const Services = () => {
  return (
    <>
    <Banner data={bannerDetails}/>
    <ServiceCard data={serviceCards}/>
    <SubscribeSection data={subscribeSection}/>
    </>
  )
}

export default Services;