"use client";
import React, { useEffect, useState } from 'react';
import bannerImage from '../../../public/image/banner_8.webp';
import Banner from '@/components/banner/page';
import Web from "../../../public/image/web.webp";
import App from "../../../public/image/app.webp";
import Wordpress from "../../../public/image/wordpress.webp";
import Marketing from "../../../public/image/marketing.webp";
import Branding from "../../../public/image/branding.webp";
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
      text: "Services",
      link: "/services"
    }
  ],
  banner: true
}

const projectDetails = [
  {
    name: "web",
    image: Web,
    subHeading: "Web development",
    heading: "Building Tomorrow's Digital Landscape: Expert Web Development ",
    title: "Web development",
    bodyContent: [
      "Welcome to our cutting-edge Web Development service, where we harness the power of the latest technologies to craft dynamic and immersive online experiences. Our skilled team specializes in leveraging a robust stack of MERN (MongoDB, Express, React, Node.js) alongside the Next.js framework to build websites that redefine digital landscapes.",
      "Embark on a digital journey like no other with our Web Development service. We blend creativity, technology, and innovation to create a virtual masterpiece that propels your business forward. Your success is our code, and your profits are our reward."
    ],
    connect: {
      text: "Are you prepared to redefine your online impact?",
      button: {
        text: "Join Us Today",
        link: "/contact"
      }
    },
    bannerContent: {
      heading: "Empower Your Online Presence with Expert Web Development",
      content: "Discover the art of seamless web experiences that captivate and convert. Our expert web development team crafts custom solutions that blend design and functionality, shaping your digital space into a compelling brand journey.",
      button: {
        text: "Get Started",
        link: "/contact",
        class: "background-primary"
      }
    },
    contentHeader:{
      heading:"Building Tomorrow's Digital Landscape: Merging Design and Functionality",
      subHeading:"Expertise in Crafting Seamless Web Solutions"
    },
    content: [
      {
        boldText: "MERN Mastery: ",
        text: "Our proficiency in MongoDB, Express, React, and Node.js ensures that your website's foundation is as solid as it is flexible. With these tools at our disposal, we create seamless, full-stack applications that bring your ideas to life."
      },
      {
        boldText: "Elevate with Next.js: ",
        text: "With Next.js, we take web development to the next level. Enjoy lightning-fast performance, server-side rendering, and a remarkable user experience. Your website will not only load swiftly but also captivate visitors from the moment they arrive."
      },
      {
        boldText: "Data Powerhouse - MongoDB: ",
        text: "Our utilization of MongoDB goes beyond traditional databases. We integrate this powerful NoSQL database to efficiently manage and organize data, ensuring scalability and optimal performance even as your platform grows."
      },
      {
        boldText: "Expressive with Express: ",
        text: "The Express framework enables us to construct robust APIs and develop backends that facilitate smooth communication between various components. This ensures seamless functionality and a user-centric experience."
      },
      {
        boldText: "React to Perfection: ",
        text: " Harnessing the might of React, we build interactive, dynamic, and visually striking user interfaces. Your users will engage with a website that feels fluid and responsive, enhancing their connection with your brand."
      },
      {
        boldText: "Node.js - Agile Backend: ",
        text: "Node.js forms the core of our backend development. Its event-driven, non-blocking architecture equips your website with rapid processing capabilities, giving your users a seamless journey."
      },
      {
        boldText: "Scalability as Standard: ",
        text: " Our Web Development approach guarantees scalability. As your user base expands, your website's performance remains unaffected, maintaining a flawless user experience even during peak traffic."
      },
      {
        boldText: "Security in Focus: ",
        text: "Security is our watchword. We implement industry best practices to safeguard your website and user data, assuring both you and your audience of a safe digital environment."
      }
    ],
    service: true
  },
  {
    name: "app",
    image: App,
    heading: "App Development Excellence: Turning Ideas into Reality ",
    subHeading: "App Development",
    title: "App Development",
    bodyContent: [
      "Welcome to our App Development service, where innovation meets functionality to bring your ideas to life on the digital frontier. Our team of skilled developers, designers, and strategists collaborate to craft mobile applications that elevate user experiences and drive tangible results.",
      "Embrace the world of mobile technology with our App Development service. Your app isn't just a piece of software; it's a manifestation of your vision, a solution to a problem, and an opportunity to engage with your audience in novel ways. Let's create apps that don't just function, but truly resonate."
    ],
    connect: {
      text: "Are you ready to make your app vision a reality?",
      button: {
        text: "Let's Team now",
        link: "/contact"
      }
    },
    bannerContent: {
      heading: "Unleash Innovation with Custom App Development",
      content: "Explore the realm of cutting-edge apps that redefine user engagement. Our custom app development solutions combine creativity and technology to create apps that stand out and deliver exceptional user experiences.",
      button: {
        text: "Start Building",
        link: "/contact",
        class: "background-primary"
      }
    },
    contentHeader:{
      heading:"Forging Digital Frontiers: Where Vision Meets Innovation",
      subHeading:"Mastering the Art of Custom App Development"
    },
    "content": [
      {
        "boldText": "Innovate with Purpose: ",
        "text": "We're not just developers; we're innovators. We take your concepts and transform them into user-centric mobile apps that stand out in today's competitive market."
      },
      {
        "boldText": "Designs that Impress: ",
        "text": "Beyond just lines of code, our designers create visually stunning and intuitive interfaces. Each screen is meticulously designed to enhance user engagement and guide them seamlessly through your app."
      },
      {
        "boldText": "Seamless Performance: ",
        "text": "Performance is at the heart of every successful app. We engineer apps that load swiftly, respond promptly, and deliver a consistently smooth experience even under heavy usage."
      },
      {
        "boldText": "User-Centric Experiences: ",
        "text": "User experience defines the success of an app. We design with the end-users in mind, ensuring that interactions are not just intuitive but delightful, keeping your audience coming back for more."
      },
      {
        "boldText": "Security as Priority: ",
        "text": "Your app's security is non-negotiable. We implement robust security measures to protect user data and maintain the trust that your audience places in your application."
      },
      {
        "boldText": "Integrations that Matter: ",
        "text": "Whether it's third-party APIs, social media integrations, or backend connections, we seamlessly integrate components that enhance your app's functionality and utility."
      },
      {
        "boldText": "Cross-Platform Expertise: ",
        "text": "Reach a wider audience with apps that work seamlessly across various platforms, be it iOS, Android, or both. Our cross-platform development approach ensures consistent experiences everywhere."
      },
      {
        "boldText": "Scalability at Core: ",
        "text": "As your user base grows, so should your app's capabilities. Our scalable solutions empower your app to expand effortlessly and handle increased usage without compromising performance."
      },
      {
        "boldText": "Launch and Beyond: ",
        "text": "We don't stop at launch. We provide ongoing support, updates, and optimizations to ensure your app's longevity and relevance in the ever-evolving app landscape."
      },
      {
        "boldText": "Bringing Ideas to Reality: ",
        "text": "We believe in making dreams come true. Whether it's a startup vision or a corporate innovation, we have the expertise to turn your app idea into a tangible, market-ready product."
      }
    ],
    service: true
  },
  {
    name: "wordpress",
    image: Wordpress,
    heading: "Empower Your Online Vision: Let's Dive into WordPress Development ",
    subHeading: "Wordpress development",
    title: "Wordpress development",
    bodyContent: [
      "Welcome to our WordPress Web Development service, where we transform your digital aspirations into captivating and functional online realities. With WordPress as our canvas and innovation as our brush, we craft websites that seamlessly blend aesthetics, functionality, and user experience.",
      "Step into the realm of WordPress Web Development with us, and witness your vision come alive on the digital stage. Your website is more than just code and design; it's a gateway to your brand's world. Let's create an online masterpiece together."
    ],
    connect: {
      text: "Are you excited to bring your WordPress dreams to life?",
      button: {
        text: "Let's Dive In",
        link: "/contact"
      }
    },
    bannerContent: {
      heading: "Transform Your Vision into a Stunning Reality with WordPress Development",
      content: "Dive into the world of limitless possibilities with our WordPress development expertise. We craft dynamic websites that seamlessly blend design and functionality, ensuring a captivating online presence for your brand.",
      button: {
        text: " Let's Create",
        link: "/contact",
        class: "background-primary"
      }
    },
    contentHeader:{
      heading:"Redefining Online Experiences: Where Code Meets Creativity",
      subHeading:"Expertise in Crafting Dynamic WordPress Solutions"
    },
    "content": [
      {
        "boldText": "Empowering Simplicity: ",
        "text": "WordPress is our platform of choice for a reason. Its user-friendly interface empowers you to effortlessly manage and update your website's content, putting you in control of your online presence. "
      },
      {
        "boldText": "Designs That Speak: ",
        "text": " Our team of skilled designers ensures that your website isn't just visually appealing, but also aligned with your brand's essence. We create custom designs that tell your story and engage your visitors."
      },
      {
        "boldText": "Unleash Functionality: ",
        "text": "With an extensive library of plugins and extensions, we supercharge your website with functionalities tailored to your unique needs. Whether it's e-commerce, social integration, or specialized forms, we've got you covered."
      },
      {
        "boldText": "Engage with Elegance: ",
        "text": "We create user experiences that are as immersive as they are intuitive. From seamless navigation to interactive elements, we ensure that your visitors are engaged and captivated throughout their journey."
      },
      {
        "boldText": "Fortress of Security: ",
        "text": "Your website's security is paramount. We employ industry best practices to safeguard your data and protect against vulnerabilities, giving you and your users the confidence to explore without worry."
      },
      {
        "boldText": "Scalability at Heart: ",
        "text": "As your ambitions expand, so should your website. WordPress provides a scalable foundation, allowing your online presence to grow seamlessly as your business flourishes."
      },
      {
        "boldText": "Seamless Integrations: ",
        "text": " Whether it's connecting your social media channels or embedding third-party tools, we integrate every element seamlessly to create a unified online ecosystem."
      },
      {
        "boldText": "Responsive Always: ",
        "text": "n today's mobile-driven world, responsiveness is key. Our WordPress websites are designed to adapt flawlessly to various devices and screen sizes, ensuring a consistent experience on every platform."
      },
      {
        "boldText": "SEO-Ready: ",
        "text": "A stunning website isn't enough if it can't be found. We optimize your WordPress site for search engines, enhancing its visibility and helping you reach your target audience effectively."
      },
      {
        "boldText": "Ongoing Support: ",
        "text": "Our partnership doesn't end with the launch. We provide continuous support, updates, and maintenance to keep your website running smoothly and your digital presence thriving."
      }
    ],
    service: true
  },
  {
    name: "marketing",
    image: Marketing,
    heading: "Ignite Your Online Presence with Our Digital Marketing Expertise ",
    subHeading: "Marketing",
    title: "Marketing",
    bodyContent: [
      "Step into the realm of digital possibilities with our leading Digital Marketing solutions. We're dedicated to harnessing the latest trends and technologies to create impactful online experiences that redefine your brand's digital journey.",
      "Embark on a digital journey like no other with our Digital Marketing service. We blend creativity, technology, and innovation to create a virtual masterpiece that propels your business forward. Your success is our code, and your growth is our ultimate reward."
    ],
    connect: {
      text: "Ready to craft a compelling brand narrative?",
      button: {
        text: "Let's Begin",
        link: "/contact"
      }
    },
    bannerContent: {
      heading: "Elevate Your Brand with Strategic Digital Marketing",
      content: "Unlock the power of impactful marketing strategies that resonate with your audience. Our digital marketing solutions blend creativity and data-driven insights to create campaigns that drive engagement, growth, and meaningful connections.",
      button: {
        text: "Get Noticed",
        link: "/contact",
        class: "background-primary"
      }
    },
    contentHeader:{
      heading:"Pioneering Digital Impact: Where Creativity Meets Strategy",
      subHeading:"Strategic Brilliance in Digital Marketing"
    },
    "content": [
      {
        "boldText": "Strategic Mastery: ",
        "text": "Our skilled team is well-versed in the intricacies of digital marketing. We craft tailored strategies that combine creativity and data-driven insights, ensuring your brand's message reaches the right audience at the right time."
      },
      {
        "boldText": "Elevate Your Reach: ",
        "text": "With our innovative approach, we propel your online presence to new heights. Experience the power of well-targeted campaigns, captivating content, and engaging visuals that capture your audience's attention from the very start."
      },
      {
        "boldText": "Data-Driven Insights: ",
        "text": "Our data powerhouse allows us to go beyond surface-level metrics. We dive deep into analytics, transforming numbers into actionable insights that refine your strategies for maximum impact."
      },
      {
        "boldText": "Dynamic Engagement: ",
        "text": "Utilizing cutting-edge tools, we foster dynamic engagement across platforms. From social media to email marketing, we create connections that resonate, fostering brand loyalty and driving conversions."
      },
      {
        "boldText": "Crafting Compelling Content: ",
        "text": "Our creative wizards breathe life into your brand through compelling content. From blog posts to video campaigns, we create content that not only informs but also leaves a lasting impression."
      },
      {
        "boldText": "Seamless User Journeys: ",
        "text": "Just as architects design buildings, we design user journeys. We map out intuitive pathways that guide your audience through seamless interactions, turning casual visitors into loyal customers."
      },
      {
        "boldText": "Scale with Success: ",
        "text": "Our approach is scalable to match your growth ambitions. As your brand expands, our strategies adapt, ensuring your message remains consistent and your impact remains significant."
      },
      {
        "boldText": "Tailored Brand Identity: ",
        "text": "No two brands are alike, and neither are our marketing solutions. We curate every aspect of our strategies to align with your unique brand identity, delivering a digital experience that's unmistakably yours."
      },
      {
        "boldText": "Security and Trust: ",
        "text": "Just as your website is secure, so are our practices. We prioritize the security of your data and your customers' trust, implementing industry best practices to ensure a safe digital environment."
      }
    ],
    service: true
  },
  {
    name: "branding",
    image: Branding,
    heading: "Craft Your Unique Brand Story with Our Tailored Branding Solutions",
    subHeading: "Branding",
    title: "Branding",
    bodyContent: [
      "Step into a world of brand transformation where your story takes center stage. Our skilled team specializes in weaving together creativity and strategy to create brands that resonate deeply and leave an indelible mark in the hearts of your audience.",
      "Embark on a journey of brand transformation like no other with our Tailored Branding solutions. We blend creativity, strategy, and innovation to craft a brand identity that's not just impactful, but truly unforgettable. Your triumphs are our milestones, and your brand's recognition is our highest honor."
    ],
    connect: {
      text: "Are you ready to stand out in a crowded marketplace?",
      button: {
        text: "Let's start",
        link: "/contact"
      }
    },
    bannerContent: {
      heading: "Craft Your Unique Brand Identity with Expert Branding",
      content: "Explore the art of strategic branding that sets you apart in a crowded world. Our branding solutions blend creativity and strategy to create a distinct identity that resonates with your audience and leaves a lasting impression.",
      button: {
        text: "Define Your Brand",
        link: "/contact",
        class: "background-primary"
      }
    },
    contentHeader:{
      heading:"Mastering Brand Identity: A Symphony of Creativity and Strategy",
      subHeading:"Crafting Your Unique Brand Narrative"
    },
    "content": [
      {
        "boldText": "Strategic Artistry: ",
        "text": "Our team of branding enthusiasts understands that every successful brand is built on a foundation of strategy. We dive deep into market insights and audience behaviors to construct brand narratives that strike a chord."
      },
      {
        "boldText": "Rise Above Expectations: ",
        "text": "With our innovative approach, your brand rises above the ordinary. We sculpt visual identities and messaging that not only grab attention but also weave an emotional connection between your brand and its followers."
      },
      {
        "boldText": "Anchored in Authenticity: ",
        "text": "Our branding endeavors reach beyond surface-level aesthetics. We unearth the essence of your brand and infuse it into every fiber, ensuring a coherent and authentic story across all touchpoints."
      },
      {
        "boldText": "Seamless Brand Symphony: ",
        "text": " We orchestrate brand experiences that flow seamlessly. From your logo to your web presence to your packaging, we ensure a symphony of elements that harmonize into a memorable encounter."
      },
      {
        "boldText": "Illuminating Creativity: ",
        "text": "Our creative sparks fuel your brand with ideas that ignite connections. We conceptualize campaigns and content that resonate deeply, forging lasting bonds and fostering meaningful engagement."
      },
      {
        "boldText": "Trust as the Keystone: ",
        "text": "Just as architects craft stability, we craft trust. Through open communication and ethical practices, we construct trust that forms the bedrock of enduring customer relationships."
      },
      {
        "boldText": "Shaping Uniqueness: ",
        "text": "No two brands are identical, and our branding solutions reflect this truth. We shape every detail to align with your brand's individuality, ensuring an identity that's as remarkable as it is memorable."
      },
      {
        "boldText": "Guardians of Integrity: ",
        "text": "Just as you safeguard your brand, we safeguard its integrity. We uphold the principles of ethical branding to preserve your brand's reputation and create a digital environment of trust."
      }
    ],
    service: true
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
    const details = projectDetails.find(e => e.name === slug);
    setProject(details);
  });
  return (
    <>
      <Banner data={bannerDetails} bannerNav={params?.slug} heading={project?.title} bannerContent={project?.bannerContent} />
      <ProjectDetails data={project} />
      <SubscribeSection data={subscribeSection} />
    </>
  )
}

export default Project;
