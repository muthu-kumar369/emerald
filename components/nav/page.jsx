"use client"
import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
const Navbar = ({ data }) => {

    const [toggleOpen, setToggleOpen] = useState(false);
    const [active, setActive] = useState('/');
    const [scrollValue,setScrollValue]=useState(false);
    const pathName=usePathname();
    const handleToggle = () => {
        setToggleOpen(prev => !prev);
    }
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 400){
                setScrollValue(true);
            }
            else{
                setScrollValue(false);
            }
        })
        setToggleOpen(false);
        setActive(pathName);
    },[pathName])
    return (
        <section className={`nav ${scrollValue ? "scroll -mb-7 md:py-3":""} ${toggleOpen ? '' : '-mb-7 md:mb-1'} text-white`}>
            <nav>
                <div className={`top-header ${scrollValue ? "hidden":"md:flex"}   hidden justify-between mx-10  lg:ml-44`}>
                    <div className="contact-email text-xs">
                       <Link href={`mailto:${data?.email?.email}`}><span>{data?.email?.text}</span>{data?.email?.email}</Link>
                    </div>
                    {data?.socialIcons && <div className="navbar-social-icons flex mr-52">
                        {data?.socialIcons.map((item, index) => {
                            return (
                                <p className='icon mx-3 text-xs' key={index}><Link href={`${item.link}`}>{item.icon}</Link></p>
                            )
                        })}
                    </div>}

                </div>
                <div className={`nav-list ${scrollValue ? "scroll mt-2 md:-mb-8":" mt-5"} md:flex mx-10 lg:ml-44 `}>
                    <div className="nav-logo justify-between flex lg:w-2/4 md:w-1/3">
                        <Link href={'/'} className='text-xl -mt-8'>
                            <Image src={data?.logo} className='logo' alt="logo" width={120} height={50} />
                        </Link>
                        <div className="toggle md:hidden" onClick={()=>handleToggle()}>
                            {toggleOpen ? <p><AiOutlineClose color='black' size={25} /></p> : <p><AiOutlineMenu color='black' size={25} /></p>}
                        </div>
                    </div>
                    {data?.navmenu && <div className={`nav-menus w-2/4  md:flex ${toggleOpen ? 'block' : 'hidden'}`}>
                        {data?.navmenu.map((menu, index) => {
                            return (
                                <p className={`nav-menu px-3 py-2 text-sm curser-pointer ${active== menu?.link ? "active" : ""}`} key={index} >
                                    <Link href={`${menu.link}`}>{menu?.name}</Link>
                                </p>
                            )
                        })}
                    </div>}

                </div>
            </nav>
        </section>
    )
}

export default Navbar;