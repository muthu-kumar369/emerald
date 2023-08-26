import React from 'react'
// import bannerImage from '../../public/images/bg_2.webp';
import bannerImage from '../../public/image/banner_6.webp';
import Banner from '@/components/banner/page';
// import bgImage from '../../public/images/bg_4.webp';
import bgImage from '../../public/image/bg_cover.webp';
import SubscribeSection from '@/components/subscribeSection/page';

export const metadata={
  title:"Blog",
  description:"Blog page in emerald"
}
const bannerDetails={
  bannerImage,
  bannerDetails:[
    {
      text:"Home",
      link:"/"
    },
    {
      text:"Blog"
    }
  ],
  heading:"Blog",
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
const Blog = () => {
  return (
    <>
    <Banner data={bannerDetails}/>
    <SubscribeSection data={subscribeSection}/>
    </>
  )
}

export default Blog;