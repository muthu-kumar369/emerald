import React from 'react'
// import bannerImage from '../../public/images/bg_2.webp';
import bannerImage from '../../public/image/banner_5.webp';
import Banner from '@/components/banner/page';
// import bgImage from '../../public/images/bg_4.webp';
import bgImage from '../../public/image/bg_cover.webp';
import Infinitum from '../../public/image/infinitumfoodproducts.webp';
import Jenhsus from '../../public/image/jehnsusmusic.webp';
import SubscribeSection from '@/components/subscribeSection/page';
import CardsWithIamge from '@/components/cardsWithImage/page';
import portfolio from "../../public/image/portfolio.webp";
import StudioTwoColumn from '@/components/studioTwoColumn/page';
import CardOnlyContent from '@/components/cardsOnlyContent/page';
import CountSection from '@/components/countSection/page';

export const metadata = {
  title: "Portfolio",
  description: "Portfolio in emerald"
}
const bannerDetails = {
  bannerImage,
  content: {
    heading: "Unveiling the Pathways of Our Creative Journeys",
    content: "Immerse yourself in a visual journey through our diverse collection of projects.   From web development to branding and beyond, our portfolio reflects the breadth of our capabilities.",
    button: {
      text: " Let's Create Together",
      link: "/contact",
      class: "background-primary"
    }
  },
  bannerDetails: [
    {
      text: "Home",
      link: "/"
    },
    {
      text: "Portfolio"
    }
  ],
  heading: "Portfolio",
  banner: true
}
const studioTwoColumn = {
  imageColumn: {
    image1: portfolio
  },
  contentColumn: {
    subHeading: "portfolio",
    heading: "Welcome to Our Portfolio Showcase",
    body: [
      "We invite you to explore a captivating realm where imagination meets expertise. Our portfolio stands as a living testament to the countless hours, creative insights, and unwavering dedication we've poured into bringing projects to life. As you step into this world of innovation and collaboration, you'll witness the transformation of ideas into impactful realities.",
      "As you explore our portfolio, whether you're seeking a dynamic website, a captivating app, or a branding strategy that resonates, we're prepared to embark on this journey with you, transforming your aspirations into achievements."
    ],
    button: {
      text: " Let's Join today",
      link: "/contact"
    }
  }
}
const cardsWithImage = {
  project: true,
  subHeading: "Reflecting Excellence Across Industries",
  heading: "Shining a Spotlight on Our Noteworthy Featured Projects",
  cardDetails: [
    {
      image: Infinitum,
      subHeading: "Infinitum Foods Produts",
      heading: "Wordpress development",
      link: "infinitum"
    },
    {
      image: Jenhsus,
      subHeading: "Jehnsus Music",
      heading: "Wordpress development",
      link: "jehnsus"
    }
  ]
}
const countSection = {
  bgImage,
  // countDetails:[
  //   {
  //     icon:<GoChecklist/>,
  //     totalCount:"4,800",
  //     name:"PROJECT COMPLETED"
  //   },
  //   {
  //     icon:<FaUserTie/>,
  //     totalCount:"1,000",
  //     name:"OUR STAFF"
  //   },
  //   {
  //     icon:<RiCustomerService2Line/>,
  //     totalCount:"350",
  //     name:"SERVICES PROVIDE"
  //   },
  //   {
  //     icon:<BiHappy/>,
  //     totalCount:"7,650",
  //     name:"HAPPY CUSTOMERS"
  //   },
  // ],
  quote: {
    text: '"Cultivating Growth: Enriching Customers Through Profit Delivery"'
  }
}
const cardsOnlyContent = {
  subHeading: "Exploring Our Portfolio Journey",
  heading: "Crafting Excellence: Our Completed Endeavors and Future Ventures",
  gridClass: "grid md:grid-cols-2 gap-6",
  cardDetails: [
    {
      heading: "Our Approach",
      content: [
        "Behind every project is a combination of strategy, creativity, and unwavering dedication. Our approach revolves around understanding our clients' unique needs, creating tailored solutions, and delivering experiences that leave a lasting impression."
      ]
    },
    {
      heading: "Pioneering Progress",
      content: [
        "As we proudly present these two remarkable projects, our appetite for innovation remains unquenched. We're on the lookout for new ventures that challenge us to push boundaries, embrace new technologies, and create solutions that resonate on a global scale."
      ]
    },
    {
      heading: "Join Our Journey",
      content: [
        "Your project could be the next chapter in our ever-evolving portfolio. Whether it's a visionary website, a groundbreaking app, or a transformative branding campaign, we're excited to collaborate and shape solutions that define the future."
      ]
    },
    {
      heading: "Explore the Potential",
      content: [
        "As you explore our portfolio, envision the possibilities for your own brand. Every project is a testament to our commitment to excellence, and we invite you to be part of our journey towards continued success."
      ]
    },
    {
      heading: "Understanding Your Vision",
      content: [
        "Behind every project, we embark on a journey to understand your aspirations. We delve into your vision, your audience, and your goals to create a roadmap that leads to success."
      ]
    },
    {
      heading: "Crafting Tailored Solutions",
      content: [
        "Our approach is rooted in crafting solutions that are as unique as your project. We blend creativity with strategic thinking to design experiences that resonate and deliver tangible results."
      ]
    },
    {
      heading: "Experiences That Leave a Mark",
      content: [
        "Our commitment doesn't end with project completion. We're driven by the desire to create experiences that endure. Every project is a testament to our dedication to excellence and forging connections."
      ]
    },
    {
      heading: "Your Vision, Our Expertise",
      content: [
        "Your project could be the canvas for our next masterpiece. Whether it's a groundbreaking website, a captivating app, or a transformative branding strategy, we're prepared to collaborate."
      ]
    },
    {
      heading: "Crafting the Future Together",
      content: [
        "Our journey is enriched by collaborations that stretch our limits. We're excited to bring our expertise to your vision, crafting solutions that resonate with your audience and drive growth."
      ]
    },
    {
      heading: "Beyond Our Portfolio",
      content: [
        "As you explore our projects, envision your brand taking center stage. Our portfolio showcases not just our work, but the potential for your brand's narrative to captivate and inspire."
      ]
    },
    {
      heading: "A Collaborative Journey",
      content: [
        "We believe in the power of collaboration. Your input and vision are the driving forces that steer our creative process. Your ideas combined with our expertise create a synergy that results in solutions that resonate with your audience and make an impact."
      ]
    },
    {
      heading: "Your Vision in Our Portfolio",
      content: [
        "Be part of our journey to continued success. Let your brand become the protagonist in our next portfolio entry. Together, we'll create a narrative that resonates and stands the test of time."
      ]
    }
  ]
}
const subscribeSection = {
  bgImage,
  heading: "Subscribe to our Newsletter",
  text: "A small river named Duden flows by their place",
  singleInputField: {
    name: "feedback",
    type: "text",
    placeHolder: "Send your query via email"

  }
}
const Portfolio = () => {
  return (
    <>
      <Banner data={bannerDetails} />
      <StudioTwoColumn data={studioTwoColumn} />
      <CardsWithIamge data={cardsWithImage} />
      <CountSection data={countSection} />
      <CardOnlyContent data={cardsOnlyContent} />
      <SubscribeSection data={subscribeSection} />
    </>
  )
}

export default Portfolio;