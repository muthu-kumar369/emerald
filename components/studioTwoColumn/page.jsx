import Link from 'next/link';
import React from 'react'

const StudioTwoColumn = ({ data }) => {
    return (
        <section className="studio-two-column mx-5 md:mx-20 lg:mx-40 my-28">
            <div className="grid lg:grid-cols-2">
                {data?.imageColumn?.image1 && <div className='image-column mx-16 md:mx-1 -mt-12'>
                    <div className="image-1" style={{ backgroundImage: `url(${data?.imageColumn?.image1.src})`, height: `${data?.imageColumn?.image1.height}px` }}>
                        {data?.imageColumn?.yearDetails && <div className='year-details text-center text-white'>
                            <p className='icon mx-auto'>{data?.imageColumn?.yearDetails?.icon}</p>
                            <p className="count">{data?.imageColumn?.yearDetails?.count}</p>
                            <p className="text mx-auto">{data?.imageColumn?.yearDetails?.text}</p>
                        </div>}
                        {data?.imageColumn?.image2 && <div className='image-2 md:-mb-8' style={{ backgroundImage: `url(${data?.imageColumn?.image2.src})`, height: `${data?.imageColumn?.image2.height}` }}></div>}
                    </div>
                </div>}
                {data?.contentColumn && <div className='content-column ml-10 mt-28 lg:mt-1'>
                    <p className="sub-heading uppercase">{data?.contentColumn?.subHeading}</p>
                    <p className="heading">{data?.contentColumn?.heading}</p>
                    <p className="body-content pt-6">{data?.contentColumn?.body}</p>
                    {data?.contentColumn?.iconSection && <div className='icon-sections grid md:grid-cols-2'>
                        {data?.contentColumn?.iconSection.map((item, index) => {
                            return (
                                <div className="icon-section py-5 pb-9 flex" key={index}>
                                    <p className="icon">{item?.icon}</p>
                                    <div className="text px-3">
                                        <p >{item?.text1}</p>
                                        <p>{item?.text2}</p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>}
                    <Link className='button uppercase' href={`${data?.contentColumn?.button?.link}`}>{data?.contentColumn?.button?.text}</Link>
                </div>}
            </div>
        </section>
    )
}

export default StudioTwoColumn;