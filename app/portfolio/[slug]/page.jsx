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
    heading: "Infinitum Food Products",
    content:[
      "Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!"
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
      "Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!"
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
