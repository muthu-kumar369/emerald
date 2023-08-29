import Navbar from '@/components/nav/page'
import './globals.css'
import { Inter } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../public/image/logo.png';
import { BiSolidChevronRight, BiMailSend, BiSolidMap,BiSolidPhone } from 'react-icons/bi';
import {LiaCopyrightSolid} from 'react-icons/lia';
import Footer from '@/components/footer/page';
import ScrollToTop from '@/components/scrollToTop/page';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emerald',
  description: 'Emerald Business solution',
}
const headerData = {
  email:{
    email:"emerald@gmail.com",
    text:"email us : "
  },
  logo,
  socialIcons: [
    {
      icon: <FaFacebookF />,
      link: "#"
    },
    {
      icon: <FaTwitter />,
      link: "#"
    },
    {
      icon: <FaInstagram />,
      link: "#"
    },
    {
      icon: <FaYoutube />,
      link: "#"
    }
  ],
  navmenu: [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Services",
      link: "/services"
    },
    {
      name: "Portfolio",
      link: "/portfolio"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]
}
const footerData={
  companyDetails:{
    logo:{
      image:logo,
      link:"/"
    },
    body:"Far far away, behind the word mountains, far from the countries.",
    socialMediaDetails:[<FaTwitter/>,<FaFacebookF/>,<FaInstagram/>]
  },
  menuDetails:[
    {
      title:"Company",
      menus:[
        {
          icon:<BiSolidChevronRight/>,
          text:"About",
          link:"/about"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Services",
          link:"/services"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Portfolio",
          link:"/portfolio"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Contact",
          link:"/contact"
        }
      ]
    },
    {
      title:"Information",
      menus:[
        {
          icon:<BiSolidChevronRight/>,
          text:"Join us",
          link:"#"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Blog",
          link:"#"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Privacy & Policy",
          link:"#"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Term & Condition",
          link:"#"
        }
      ]
    },
    {
      title:"Services",
      menus:[
        {
          icon:<BiSolidChevronRight/>,
          text:"Wordpress Development",
          link:"#"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Web Development",
          link:"#"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"App Development",
          link:"#"
        },
        {
          icon:<BiSolidChevronRight/>,
          text:"Marketing",
          link:"#"
        }
      ]
    }
  ],
  contactDetails:{
    title:"Have a Questions?",
    details:[
      {
        icon:<BiSolidMap/>,
        text:"Nagercoil, Kanyakumari District, Tamilnadu, India"
      },
      {
        icon:<BiSolidPhone/>,
        text: "+91 7022550973"
      },
      {
        icon:<BiMailSend/>,
        email:"emerald@gmail.com"
      }
    ]
  },
  copyRight:{
    title:"Copyright ",
    icon:<LiaCopyrightSolid/>,
    text:"Emerald Business solution. All Rights Reserved"
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar data={headerData} />
        {children}
        <ScrollToTop/>
        <Footer data={footerData}/>
      </body>
    </html>
  )
}
