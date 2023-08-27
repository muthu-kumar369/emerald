import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ data }) => {
    return (
        <section className="footer pb-20">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 mx-5 md:mx-14 xl:mx-40">
                {data?.companyDetails && <div className='company-details -mt-4'>
                    <Link href={`${data?.companyDetails?.logo?.link}`}><Image src={data?.companyDetails?.logo?.image} width={120} height={50}></Image></Link>
                    <p className="body-content">{data?.companyDetails?.body}</p>
                    {data?.companyDetails?.socialMediaDetails && <div className="social-media flex mt-3">
                        {data?.companyDetails?.socialMediaDetails.map((icon, index) => {
                            return (
                                <Link className='icon mr-3' href={"#"}>{icon}</Link>
                            )
                        })}
                    </div>}
                </div>}
                {data?.menuDetails.map((item, index) => {
                        return (
                            <div className="menu-detail mt-5" key={index}>
                                <p className="title">{item?.title}</p>
                                {item?.menus && <div>
                                    {item?.menus.map((menu, i) => {
                                        return (
                                            <Link className="menu flex mt-3" href={`${menu?.link}`} key={i}>
                                                <p className="icon text-2xl">{menu?.icon}</p>
                                                <p className="text">{menu?.text}</p>
                                            </Link>
                                        )
                                    })}
                                </div>}
                            </div>
                        )
                    })}
                {data?.contactDetails && <div className='contact-details mt-5 '>
                    <p className="title">{data?.contactDetails?.title}</p>
                    {data?.contactDetails?.details.map((item,index)=>{
                        return(
                            <div className="contact-detail flex mt-3" key={index}>
                                <p className="icon text-3xl pr-2">{item?.icon}</p>
                               {item?.text &&  <p className="text">{item?.text}</p>}
                               {item?.email && <Link className='text' href={`mailto:${item?.email}`}>{item?.email}</Link>}
                            </div>
                        )
                    })}
                    </div>}
            </div>
            <div className="copy-right mt-8 flex mx-5 md:mx-10 lg:mx-40">
                <p className="icon text-xs mt-2">{data?.copyRight?.icon}</p>
                <p className="text">{data?.copyRight?.text}</p>
            </div>
        </section>
    )
}

export default Footer;