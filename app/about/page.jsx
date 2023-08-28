import React from 'react'
// import bannerImage from '../../public/images/bg_2.webp';
import bannerImage from '../../public/image/banner_3.webp';
import Banner from '@/components/banner/page';
import StudioTwoColumn from '@/components/studioTwoColumn/page';
import { TbBulbFilled } from 'react-icons/tb';
import { GiTeamIdea } from 'react-icons/gi';
// import image1 from '../../public/images/about-1.webp';
// import image2 from '../../public/images/about.webp';
import about from '../../public/image/about_us.webp';
import about1 from '../../public/image/about_us_1.webp';
import { FaFacebookF, FaTwitter, FaInstagram, FaUserTie, FaGoogle } from 'react-icons/fa';
// import staff1 from '../../public/images/staff-1.webp';
// import staff2 from '../../public/images/staff-2.webp';
// import staff3 from '../../public/images/staff-3.webp';
// import staff4 from '../../public/images/staff-4.webp';
// import staff5 from '../../public/images/staff-5.webp';
// import staff6 from '../../public/images/staff-6.webp';
// import TeamMemberCards from '@/components/teamMemberCard/page';
// import bgImage from '../../public/images/bg_4.webp';
import bgImage from '../../public/image/bg_cover.webp';
import { GoChecklist } from "react-icons/go";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiHappy } from 'react-icons/bi';
import CountSection from '@/components/countSection/page';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
// import about2 from "../../public/images/about-2.webp";
import about2 from "../../public/image/faq.webp";
import FaqSection from '@/components/faqSection/page';

export const metadata = {
  title: "About",
  description: "About page in emerald"
}

const bannerDetails = {
  bannerImage,
  content: {
    heading: "Exploring Our Journey and Values",
    content: "Our journey is guided by unwavering values of integrity, collaboration, and excellence. Join us as we unveil the heart of our company and the principles that drive us forward.",
    button: {
      text: "Partner Today",
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
      text: "About us"
    }
  ],
  heading: "About Us",
  banner: true
}
const studioTwoColumn = {
  imageColumn: {
    image1: about,
    // yearDetails: {
    //   icon: <TbBulbFilled />,
    //   count: "42",
    //   text: "YEAR OF EXPERIENCED"
    // },
    image2: about1
  },
  contentColumn: {
    subHeading: "WELCOME TO EMERALD",
    heading: "Revealing the Emerald Narrative that Our Identity and Principles",
    body: [
      "Emerald Business Solutions is more than a company – we are your partners in growth. With a commitment to quality, innovation, and collaboration, we navigate the digital landscape to turn challenges into opportunities and ideas into realities. Let's embark on this journey together and shape a future where your brand shines brightest.",
      "At Emerald Business Solutions, our commitment to making a difference goes beyond the corporate world. We're not just about creating exceptional digital experiences; we're also dedicated to fostering positive change in communities.",
    ],
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
//     {
//       image: staff4,
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
//       image: staff5,
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
//       image: staff6,
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

const faqSection = {
  leftColumn: {
    image: about2,
    subHeading: "Why Select Our Expertise",
    title: "Why Choose Us for Your Next Project?",
    cardDetails: [
      {
        heading: "Holistic Impact",
        body: " By choosing us, you're not only choosing exceptional digital solutions but also contributing to meaningful educational initiatives that uplift communities."
      },
      {
        heading: "Partnership in Progress",
        body: "We don't just serve clients; we form partnerships. We align our strategies with your goals, working together towards mutual success."
      },
      {
        heading: "Excellence in Execution",
        body: "Excellence is in our DNA. Our teams deliver solutions that are not only functional but also aesthetically pleasing and future-ready."
      },
      {
        heading: "Empathy in Action",
        body: "Our initiatives to volunteer and teach reflect our empathy and commitment to positive change. We believe in paying it forward."
      }
    ],
  },
  rightColumn: {
    subHeading: "Freequesntly Ask Question",
    heading: "Frequently Ask Question",
    faqDetails: [
      {
        question: "What services does your company offer?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "We specialize in a range of services including web development, app development, WordPress solutions, marketing, and branding.",
          "Our dedicated team covers every aspect of your digital needs."
        ]
      },
      {
        question: "What types of websites do you develop?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "We craft a diverse range of websites, from simple portfolios to complex e-commerce platforms.",
          "Our web development caters to your unique requirements, ensuring functionality, aesthetics, and user experience are seamlessly integrated.",
        ]
      },
      {
        question: "Can you create custom mobile applications?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "Absolutely. Our app development team excels at creating custom mobile applications for various platforms.",
          "We combine user-centric design with cutting-edge technology to deliver apps that stand out in the competitive landscape.",
        ]
      },
      {
        question: "What makes your WordPress development stand out?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "Our WordPress development is tailored to your vision.",
          "We specialize in creating responsive, user-friendly websites that align with your brand identity.",
          "Whether you need a blog, business site, or e-commerce platform, we've got you covered.",
        ]
      },
      {
        question: "How can your marketing services benefit my business?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "Our marketing services are designed to boost your online presence and engagement. ",
          "We develop strategic campaigns that target your audience effectively, utilizing both digital and traditional marketing techniques to enhance your brand's visibility.",
        ]
      },
      {
        question: " How does your branding service contribute to business growth?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "Branding is vital for differentiation",
          " Our branding experts help you establish a unique identity that resonates with your audience.",
          "This consistency across all touchpoints fosters brand recognition and trust, ultimately driving business growth."
        ]
      },
      {
        question: "Can you handle both small and large projects?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "Certainly, we cater to projects of all sizes.",
          "Our team's expertise ensures that each project receives the attention it deserves, whether it's a small business website, a complex application, or a comprehensive branding campaign.",
        ]
      },
      {
        question: "What is your approach to client collaboration?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "We believe in a collaborative approach.",
          "We closely involve our clients in every stage of the process, from concept to execution.",
          "Your feedback is invaluable, allowing us to tailor our services to meet your specific needs and preferences.",
        ]
      },
      {
        question: "How can I get started with your services?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "Getting started is easy. Simply reach out to us through our website or contact information provided. ",
          "We'll schedule a consultation to discuss your requirements, goals, and how we can best assist you in achieving your digital objectives.",
        ]
      },
      {
        question: "Can you handle rebranding for existing businesses?",
        icon: {
          up: <LuChevronUp />,
          down: <LuChevronDown />
        },
        answer: [
          "Absolutely. We understand the importance of evolution.",
          " Our rebranding services breathe new life into existing businesses.",
          " We analyze your current positioning, align it with your aspirations, and develop a refreshed brand identity."
        ]
      }
    ],

  }
}
const About = () => {
  return (
    <>
      <Banner data={bannerDetails} />
      <StudioTwoColumn data={studioTwoColumn} />
      {/* <TeamMemberCards data={teamMemberCards}/> */}
      <CountSection data={countSection} />
      <FaqSection data={faqSection} />
    </>
  )
}

export default About;