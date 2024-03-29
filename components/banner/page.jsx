"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiSolidChevronRight } from 'react-icons/bi';
const Banner = ({ data, bannerNav, heading, bannerContent }) => {
    return (
        <section className="banner">
            {data?.slider && <div className="banner-slider">
                <Swiper
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination, EffectFade]}
                    className="mySwiper"
                >
                    {data?.slider && data?.bannerDetails && <div>
                        {data?.bannerDetails.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="home-banner overlay"></div>
                                    <div className="slider-item" style={{ backgroundImage: `url(${item.image.src})`, height: `${item.image.height}px` }}></div>
                                    <div className="banner-details grid md:grid-cols-2">
                                        <div className="banner-video md:my-auto mx-auto md:pl-10">
                                            <Link className='' href={`#`}>
                                                <p className='icon-video'>
                                                    <span className='triangle-icon my-auto'><BsFillPlayFill size={44} color='white' /></span>
                                                </p>

                                            </Link>
                                        </div>
                                        <div className="banner-content text-white xl:mr-36 mx-3">
                                            <p className="sub-heading uppercase">{item?.subHeading}</p>
                                            <p className="heading font-black uppercase">{item?.heading}</p>
                                            <p className="body-content">{item?.content}</p>
                                            <div className="banner-button flex">
                                                {item?.button.map((button, i) => {
                                                    return (
                                                        <Link href={`${button?.link}`} className={`uppercase ${button?.class}`} key={i}>{button.text}</Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </div>}
                </Swiper>
            </div>}
            {data?.banner && <div className='banner-image' style={{ backgroundImage: `url(${data?.bannerImage.src})`, height: `${data?.bannerImage.height}px` }}>
                <div className="home-banner overlay"></div>
                <div className="banner-content">
                    {data?.content && <div className='md:w-3/4 xl:w-2/4'>
                        <p className="heading text-3xl md:text-4xl xl:text-5xl ">{data?.content?.heading}</p>
                        <p className="body-content py-5">{data?.content?.content}</p>
                        <Link href={`${data?.content?.button?.link}`} className="button uppercase" onClick={(e)=>{
                             {data?.content?.button?.smooth && e.preventDefault();}
                             {data?.content?.button?.smooth && document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" });}
                        }}>{data?.content?.button?.text}</Link>
                    </div>}
                    {bannerContent && <div className='md:w-2/4'>
                        <p className="heading text-3xl lg:text-5xl ">{bannerContent?.heading}</p>
                        <p className="body-content py-5">{bannerContent?.content}</p>
                        <Link href={`${bannerContent?.button?.link}`} className="button uppercase">{bannerContent?.button?.text}</Link>
                    </div>}
                    {data?.bannerDetails && <div className='banner-nav mt-16 flex'>
                        {data?.bannerDetails.map((item, index) => {
                            return (
                                <div key={index}>{item?.link ? <div className='flex banner-nav-link'>
                                    <Link href={`${item.link}`} >
                                        {item?.text}
                                    </Link>
                                    <BiSolidChevronRight size={24} />
                                </div> :
                                    <div className='flex'>
                                        <p>{item?.text}</p>
                                    </div>
                                }</div>
                            )
                        })}
                        {bannerNav && <div className='flex'>
                            <p>{bannerNav}</p>
                        </div>}
                    </div>}
                    {data?.heading && <p className='heading text-3xl md:text-5xl'>{data?.heading}</p>}
                    {heading && <p className='heading text-3xl md:text-5xl'>{heading}</p>}
                </div>
            </div>}
        </section>
    )
}

export default Banner;