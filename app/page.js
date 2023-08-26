import Banner from '@/components/banner/page'
// import banner1 from '../public/images/bg_1.webp';
// import banner2 from '../public/images/bg_2.webp';
import banner1 from '../public/image/banner_1.webp';
import banner2 from '../public/image/banner_2.webp';
import { BiSolidChevronRight,BiHappy } from 'react-icons/bi';
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
      subHeading: "Welcome to Portech",
      heading: "We Create Website the Way You Want with Portech",
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
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
      subHeading: "Creative Portfolio",
      heading: "We Provide Effective for Business Solutions",
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
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
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"services"
      }
    },
    {
      icon: <MdDeveloperMode/>,
      heading: 'App Development',
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"services"
      }
    },
    {
      icon: <FaWordpress />,
      heading: 'Wordpress Development',
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      button: {
        text: <BiSolidChevronRight />,
        class: 'rounded',
        link:"services"
      }
    },
    {
      icon: <TbDeviceAnalytics />,
      heading: 'Marketing',
      body: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
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
    yearDetails: {
      icon: <TbBulbFilled />,
      count: "42",
      text: "YEAR OF EXPERIENCED"
    },
    image2:about1
  },
  contentColumn: {
    subHeading: "WELCOME TO PORTECH",
    heading: "We Are Portech Creative Studio Agency",
    body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
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
      text: "Get in touch with us",
      link: "/contact"
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
  countDetails:[
    {
      icon:<GoChecklist/>,
      totalCount:"4,800",
      name:"PROJECT COMPLETED"
    },
    {
      icon:<FaUserTie/>,
      totalCount:"1,000",
      name:"OUR STAFF"
    },
    {
      icon:<RiCustomerService2Line/>,
      totalCount:"350",
      name:"SERVICES PROVIDE"
    },
    {
      icon:<BiHappy/>,
      totalCount:"7,650",
      name:"HAPPY CUSTOMERS"
    },
  ]
}
const faqSection={
  leftColumn:{
      image:about2,
      title:"Why Choose Us for Your Next Project?",
      cardDetails:[
        {
          heading:"Creative Ideas",
          body:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
          heading:"Better Strategy with High Quality Business",
          body:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        }
      ]
  },
  rightColumn:{
    subHeading:"Freequesntly Ask Question",
    heading:"Frequently Ask Question",
    faqDetails:[
      {
        question:"How to fixed a problem?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
          "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right"
        ]
      },
      {
        question:"How to manage your Website?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
          "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right"
        ]
      },
      {
        question:"How to grow your investments funds?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
          "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right"
        ]
      },
      {
        question:"What are those requirements for businesses?",
        icon:{
          up:<LuChevronUp/>,
          down:<LuChevronDown/>
        },
        answer:[
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
          "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right"
        ]
      }
    ]
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
