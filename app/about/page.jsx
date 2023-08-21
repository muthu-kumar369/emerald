import React from 'react'
import bannerImage from '../../public/images/bg_2.webp';
import Banner from '@/components/banner/page';
import StudioTwoColumn from '@/components/studioTwoColumn/page';
import {TbBulbFilled} from 'react-icons/tb';
import {GiTeamIdea} from 'react-icons/gi';
import image1 from '../../public/images/about-1.webp';
import image2 from '../../public/images/about.webp';
import { FaFacebookF, FaTwitter, FaInstagram, FaUserTie, FaGoogle } from 'react-icons/fa';
import staff1 from '../../public/images/staff-1.webp';
import staff2 from '../../public/images/staff-2.webp';
import staff3 from '../../public/images/staff-3.webp';
import staff4 from '../../public/images/staff-4.webp';
import staff5 from '../../public/images/staff-5.webp';
import staff6 from '../../public/images/staff-6.webp';
import TeamMemberCards from '@/components/teamMemberCard/page';
import bgImage from '../../public/images/bg_4.webp';
import {GoChecklist} from "react-icons/go";
import {RiCustomerService2Line} from "react-icons/ri";
import { BiHappy } from 'react-icons/bi';
import CountSection from '@/components/countSection/page';
import {LuChevronDown,LuChevronUp} from 'react-icons/lu';
import about2 from "../../public/images/about-2.webp";
import FaqSection from '@/components/faqSection/page';

export const metadata={
  title:"About",
  description:"About page in emerald"
}

const bannerDetails={
  bannerImage,
  bannerDetails:[
    {
      text:"Home",
      link:"/"
    },
    {
      text:"About us"
    }
  ],
  heading:"About Us",
  banner:true
}

const studioTwoColumn={
  imageColumn:{
      image1,
      yearDetails:{
        icon:<TbBulbFilled/>,
        count:"42",
        text:"YEAR OF EXPERIENCED"
      },
      image2
  },
  contentColumn:{
    subHeading:"WELCOME TO PORTECH",
    heading:"We Are Portech Creative Studio Agency",
    body:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    iconSection:[
      {
        icon:<GiTeamIdea/>,
        text1:"EXPERT",
        text2:"TEAM"
      },
      {
        icon:<TbBulbFilled/>,
        text1:"SOLUTION",
        text2:"FOR BUSINESS"
      }
    ],
    button:{
      text:"Get in touch with us",
      link:"/contact"
    }
  }
}

const teamMemberCards = {
  subHeading: "TEAM & STAFF",
  heading: "Our Team",
  body: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country",
 
  cardDetails: [
    {
      image: staff1,
      name: "Lloyd Wilson",
      position: "WEB DEVELOPER",
      icons: [
        {
          icon: <FaTwitter />,
          link: "#"
        },
        {
          icon: <FaFacebookF />,
          link: "#"
        },
        {
          icon: <FaGoogle />,
          link: "#"
        },
        {
          icon: <FaInstagram />,
          link: "#"
        }
      ]
    },
    {
      image: staff2,
      name: "Lloyd Wilson",
      position: "WEB DEVELOPER",
      icons: [
        {
          icon: <FaTwitter />,
          link: "#"
        },
        {
          icon: <FaFacebookF />,
          link: "#"
        },
        {
          icon: <FaGoogle />,
          link: "#"
        },
        {
          icon: <FaInstagram />,
          link: "#"
        }
      ]
    },
    {
      image: staff3,
      name: "Lloyd Wilson",
      position: "WEB DEVELOPER",
      icons: [
        {
          icon: <FaTwitter />,
          link: "#"
        },
        {
          icon: <FaFacebookF />,
          link: "#"
        },
        {
          icon: <FaGoogle />,
          link: "#"
        },
        {
          icon: <FaInstagram />,
          link: "#"
        }
      ]
    },
    {
      image: staff4,
      name: "Lloyd Wilson",
      position: "WEB DEVELOPER",
      icons: [
        {
          icon: <FaTwitter />,
          link: "#"
        },
        {
          icon: <FaFacebookF />,
          link: "#"
        },
        {
          icon: <FaGoogle />,
          link: "#"
        },
        {
          icon: <FaInstagram />,
          link: "#"
        }
      ]
    },
    {
      image: staff5,
      name: "Lloyd Wilson",
      position: "WEB DEVELOPER",
      icons: [
        {
          icon: <FaTwitter />,
          link: "#"
        },
        {
          icon: <FaFacebookF />,
          link: "#"
        },
        {
          icon: <FaGoogle />,
          link: "#"
        },
        {
          icon: <FaInstagram />,
          link: "#"
        }
      ]
    },
    {
      image: staff6,
      name: "Lloyd Wilson",
      position: "WEB DEVELOPER",
      icons: [
        {
          icon: <FaTwitter />,
          link: "#"
        },
        {
          icon: <FaFacebookF />,
          link: "#"
        },
        {
          icon: <FaGoogle />,
          link: "#"
        },
        {
          icon: <FaInstagram />,
          link: "#"
        }
      ]
    },

  ]
}

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
const About = () => {
  return (
    <>
      <Banner data={bannerDetails}/>
      <StudioTwoColumn data={studioTwoColumn} />
      <TeamMemberCards data={teamMemberCards}/>
      <CountSection data={countSection}/>
      <FaqSection data={faqSection}/>
    </>
  )
}

export default About;