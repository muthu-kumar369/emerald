"use client";
import React, { useEffect, useState } from 'react';
import bannerImage from '../../../public/image/banner_8.webp';
import Banner from '@/components/banner/page';
import Infinitum from "../../../public/image/infinitumfoodproducts.webp";
import Jehnsus from "../../../public/image/jehnsusmusic.webp";
import ProjectDetails from '@/components/projectDetails';
import SubscribeSection from '@/components/subscribeSection/page';
import bgImage from "../../../public/image/bg_cover.webp";

const bannerDetails = {
  bannerImage,
  bannerDetails: [
    {
      text: "Home",
      link: "/"
    },
    {
      text: "Portfolio",
      link: "/portfolio"
    }
  ],
  banner: true
}

const projectDetails = [
  {
    name: "infinitum",
    image: Infinitum,
    subHeading: "Wordpress development",
    heading: "About Infinitum Food Products",
    content:[
      "They procure food products from small farmers, fishermen and vendors. Transport and Process the food products in a clean and hygienic equipment and environment. Motivate and train the suppliers which makes them responsible in supplying better quality food products for the generation. Provide training and create job opportunities for them by connecting the financial institutions and government schemes. They use eco-friendly biodegradable packaging materials. They use electric vehicles for delivering the food products to customers.",
      "Procure fresh and natural food products from small farmers, fishermen and vendors, supply it to the society at a reasonable cost with eco-friendly packaging and transportation. Enable the migrants of rural villages to live with dignity by giving them employment and business opportunities.",
      "They are dedicated to providing their customers with only the highest-quality products, sourced from the best suppliers and farmers. They believe that quality is key to a healthy and enjoyable life. Their customers are their top priority, and They are committed to providing exceptional service every step of the way."
    ],
    button:{
      text:"Live Preview",
      link:"https://infinitumfoods.co.in/"
    },
  },
  {
    name: "jehnsus",
    image: Jehnsus,
    subHeading: "Wordpress development",
    heading: "Jehnsus Music",
    content:[
      "At Jehnsus Music, they are passionate about spreading the love of Christ through the universal language of music. Their platform is dedicated to providing a rich collection of Christian songs in both English and Tamil, complete with lyrics, melody notes, harmonica Tabs, Sheet Music and guitar tabs. Whether you are a worship leader, a musician, or simply a music enthusiast, their goal is to be your go-to destination for inspiring and uplifting melodies that resonate with your faith.",
      "Dive into their treasure trove of Christian songs carefully curated in both English and Tamil. Beyond just lyrics, they offer a rich tapestry of resources including melody notes, harmonica Tabs, Sheet Music, and guitar tabs. Each song is a journey  a canvas on which the divine message is painted in musical strokes.",
      "At Jehnsus Music, they don't just offer music; they offer a vessel for faith, a vehicle for praise, and a conduit for the divine. Let the melodies guide you on a journey that transcends language, culture, and time  a journey where every chord reverberates with the love of Christ."
    ],
    button:{
      text:"Live Preview",
      link:"https://www.jehnsus.in"
    }
  }
]

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
const Project = ({ params }) => {

  const [slug, setSlug] = useState(params?.slug);
  const [project, setProject] = useState();

  useEffect(() => {
    const details = projectDetails.find(e=>e.name===slug);
    setProject(details);
  });
  return (
    <>
      <Banner data={bannerDetails} bannerNav={params?.slug} heading={project?.heading}/>
      <ProjectDetails data={project}/>
      <SubscribeSection data={subscribeSection} />
    </>
  )
}

export default Project;
