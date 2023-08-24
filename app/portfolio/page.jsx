import React from 'react'
// import bannerImage from '../../public/images/bg_2.webp';
import bannerImage from '../../public/image/banner_5.jpg';
import Banner from '@/components/banner/page';
// import bgImage from '../../public/images/bg_4.webp';
import bgImage from '../../public/image/bg_cover.jpg';
import SubscribeSection from '@/components/subscribeSection/page';

export const metadata={
  title:"Portfolio",
  description:"Portfolio in emerald"
}
const bannerDetails={
  bannerImage,
  bannerDetails:[
    {
      text:"Home",
      link:"/"
    },
    {
      text:"Portfolio"
    }
  ],
  heading:"Portfolio",
  banner:true
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
const Portfolio = () => {
  return (
    <>
    <Banner data={bannerDetails}/>
    <SubscribeSection data={subscribeSection}/>
    </>
  )
}

export default Portfolio;