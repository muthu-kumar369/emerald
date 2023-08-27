import Banner from '@/components/banner/page'
// import banner1 from '../public/images/bg_1.webp';
// import banner2 from '../public/images/bg_2.webp';
import banner1 from '../public/image/banner_1.webp';
import banner2 from '../public/image/banner_2.webp';
import { BiSolidChevronRight,BiHappy, BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import ServiceCard from '@/components/serviceCard/page';
import { MdDesignServices, MdDeveloperMode } from 'react-icons/md';
import { FaLaptopCode,FaFacebookF, FaTwitter, FaInstagram, FaGoogle,FaUserTie, FaWordpress } from 'react-icons/fa';
import { PiCertificateBold } from 'react-icons/pi';
import {  TbBulbFilled, TbDeviceAnalytics } from 'react-icons/tb';
import { GiTeamIdea } from 'react-icons/gi';
// import about1 from '../public/images/about-1.webp';
// import about2 from '../public/images/about.webp';
import about from '../public/image/about_us.webp';
import about1 from '../public/image/about_us_1.webp';
import StudioTwoColumn from '@/components/studioTwoColumn/page';
// import staff1 from '../public/images/staff-1.webp';
// import staff2 from '../public/images/staff-2.webp';
// import staff3 from '../public/images/staff-3.webp';
// import TeamMemberCards from '@/components/teamMemberCard/page';
// import bgImage from '../public/images/bg_4.webp';
import bgImage from '../public/image/bg_cover.webp';
import {GoChecklist} from "react-icons/go";
import {RiCustomerService2Line} from "react-icons/ri";
import CountSection from '@/components/countSection/page';
import {LuChevronDown,LuChevronUp} from 'react-icons/lu';
// import about2 from "../public/images/about-2.webp";
import about2 from "../public/image/faq.webp";
import FaqSection from '@/components/faqSection/page';
import SubscribeSection from '@/components/subscribeSection/page';

const bannerData = {
  bannerDetails: [
    {
      image: banner1,
      subHeading: "Emerald Enchantment",
      heading: "We tailor website creation to your preferences.",
      content: "Transforming Visions into Tailored Websites - Your Dream, Our Design. Craft your unique digital footprint with us today.",
      button: [
        {
          text: "contact us",
          link: "/contact",
          class: "background-primary"
        },
        {
          text: "view portfolio",
          link: "/portfolio",
          class: "background-white"
        }
      ]
    },
    ,
    {
      image: banner2,
      subHeading: "Innovative Anthology",
      heading: "We Deliver Efficient Business Solutions",
      content: "Unveiling impactful business solutions crafted for your success. Partner with us to elevate your business strategies and outcomes.",
      button: [
        {
          text: "contact us",
          link: "/contact",
          class: "background-primary"
        },
        {
          text: "view portfolio",
          link: "/portfolio",
          class: "background-white"
        }
      ]
    }
  ],
  slider: true
}

const serviceCards = {
  home: true,
  cardDetails: [
    {
      icon: <FaLaptopCode />,
      heading: 'Web Development',
      body: 'Leveraging cutting-edge tech, we craft responsive, stunning websites. From user-friendly interfaces to robust backends, we bring your digital presence to life.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"services"
      }
    },
    {
      icon: <MdDeveloperMode/>,
      heading: 'App Development',
      body: 'Our App Development crafts user-centric mobile applications. With a keen grasp of user behavior and tech trends, we ensure flawless functionality and lasting impact.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"services"
      }
    },
    {
      icon: <FaWordpress />,
      heading: 'Wordpress Development',
      body: 'From design finesse to seamless functionality, we specialize in crafting tailored WordPress solutions. Partner with us to amplify your digital impact.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"services"
      }
    },
    {
      icon: <TbDeviceAnalytics />,
      heading: 'Marketing',
      body: 'Our team specializes in crafting tailored strategies that resonate, from creative campaigns to digital outreach. Partner with us to reach the right audience and achieve remarkable growth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"services"
      }
    }
  ]
}

const studioTwoColumn = {
  imageColumn: {
    image1:about,
    // yearDetails: {
    //   icon: <TbBulbFilled />,
    //   count: "42",
    //   text: "YEAR OF EXPERIENCED"
    // },
    image2:about1
  },
  contentColumn: {
    subHeading: "WELCOME TO EMERALD",
    heading: "Revealing the Emerald Narrative that Our Identity and Principles",
    body: "Emerald Business Solutions is more than a company – we are your partners in growth. With a commitment to quality, innovation, and collaboration, we navigate the digital landscape to turn challenges into opportunities and ideas into realities. Let's embark on this journey together and shape a future where your brand shines brightest.",
    iconSection: [
      {
        icon: <GiTeamIdea />,
        text1: "EXPERT",
        text2: "TEAM"
      },
      {
        icon: <TbBulbFilled />,
        text1: "SOLUTION",
        text2: "FOR BUSINESS"
      }
    ],
    button: {
      text: "Know more about us",
      link: "/about"
    }
  }
}

// const teamMemberCards = {
//   subHeading: "TEAM & STAFF",
//   heading: "Our Team",
//   body: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country",
//   button: {
//     text: "View All Staff",
//     link: "/about/#team-member"
//   },
//   cardDetails: [
//     {
//       image: staff1,
//       name: "Lloyd Wilson",
//       position: "WEB DEVELOPER",
//       icons: [
//         {
//           icon: <FaTwitter />,
//           link: "#"
//         },
//         {
//           icon: <FaFacebookF />,
//           link: "#"
//         },
//         {
//           icon: <FaGoogle />,
//           link: "#"
//         },
//         {
//           icon: <FaInstagram />,
//           link: "#"
//         }
//       ]
//     },
//     {
//       image: staff2,
//       name: "Lloyd Wilson",
//       position: "WEB DEVELOPER",
//       icons: [
//         {
//           icon: <FaTwitter />,
//           link: "#"
//         },
//         {
//           icon: <FaFacebookF />,
//           link: "#"
//         },
//         {
//           icon: <FaGoogle />,
//           link: "#"
//         },
//         {
//           icon: <FaInstagram />,
//           link: "#"
//         }
//       ]
//     },
//     {
//       image: staff3,
//       name: "Lloyd Wilson",
//       position: "WEB DEVELOPER",
//       icons: [
//         {
//           icon: <FaTwitter />,
//           link: "#"
//         },
//         {
//           icon: <FaFacebookF />,
//           link: "#"
//         },
//         {
//           icon: <FaGoogle />,
//           link: "#"
//         },
//         {
//           icon: <FaInstagram />,
//           link: "#"
//         }
//       ]
//     },
//   ]
// }

const countSection={
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
  quote:{
    right:<BiSolidQuoteLeft/>,
    left:<BiSolidQuoteRight/>,
    text:'"Cultivating Growth: Enriching Customers Through Profit Delivery"'
  }
}
const faqSection={
  leftColumn:{
      image:about2,
      subHeading:"Why us",
      title:"Why Choose Us for Your Next Project?",
      cardDetails:[
        {
          heading:"Holistic Impact",
          body:" By choosing us, you're not only choosing exceptional digital solutions but also contributing to meaningful educational initiatives that uplift communities."
        },
        {
          heading:"Partnership in Progress",
          body:"We don't just serve clients; we form partnerships. We align our strategies with your goals, working together towards mutual success."
        }
      ],
      button:{
        text:"Know more",
        link:"/about/#why-choose"
      }
  },
  rightColumn:{
    subHeading:"Freequesntly Ask Question",
    heading:"Frequently Ask Question",
    faqDetails:[
      {
        question:"What services does your company offer?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "We specialize in a range of services including web development, app development, WordPress solutions, marketing, and branding.",
          "Our dedicated team covers every aspect of your digital needs."
        ]
      },
      {
        question:"What types of websites do you develop?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "We craft a diverse range of websites, from simple portfolios to complex e-commerce platforms.",
          "Our web development caters to your unique requirements, ensuring functionality, aesthetics, and user experience are seamlessly integrated.",
        ]
      },
      {
        question:"Can you create custom mobile applications?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "Absolutely. Our app development team excels at creating custom mobile applications for various platforms.",
          "We combine user-centric design with cutting-edge technology to deliver apps that stand out in the competitive landscape.",
        ]
      },
      {
        question:"What makes your WordPress development stand out?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "Our WordPress development is tailored to your vision.",
          "We specialize in creating responsive, user-friendly websites that align with your brand identity.",
          "Whether you need a blog, business site, or e-commerce platform, we've got you covered.",
        ]
      },
      {
        question:"How can your marketing services benefit my business?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "Our marketing services are designed to boost your online presence and engagement. ",
          "We develop strategic campaigns that target your audience effectively, utilizing both digital and traditional marketing techniques to enhance your brand's visibility.",
        ]
      }
    ],
    button:{
      text:"View more",
      link:"/about/#faq"
    }
  }
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
export default function Home() {
  return (
    <>
      <Banner data={bannerData} />
      <ServiceCard data={serviceCards} />
      <StudioTwoColumn data={studioTwoColumn} />
      {/* <TeamMemberCards data={teamMemberCards} /> */}
      <CountSection data={countSection}/>
      <FaqSection data={faqSection}/>
      <SubscribeSection data={subscribeSection}/>
    </>
  )
}
