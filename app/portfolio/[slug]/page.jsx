import React from 'react';
import bannerImage from '../../../public/image/banner_8.jpg';
import Banner from '@/components/banner/page';

const bannerDetails={
  bannerImage,
  bannerDetails:[
    {
      text:"Home",
      link:"/"
    },
    {
      text:"Portfolio",
      link:"/portfolio"
    },
    {
      text:"Project Details"
    }
  ],
  banner:true
}

const Project = ({params}) => {
  return (
    <>
     <Banner data={bannerDetails} heading={params?.slug}/>
    </>
  )
}

export default Project;
