"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

const CardsWithIamge = ({ data }) => {
    const pathName = usePathname();
    return (
        <sections className="cards-section">
            {data?.cardDetails && <div className=' mx-4 md:mx-14 xl:mx-40 my-28 '>
                {data?.subHeading && <p className="sub-heading">{data?.subHeading}</p>}
                {data?.heading && <p className="heading text-2xl md:text-3xl">{data?.heading}</p>}
                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mt-10'>
                {data?.cardDetails.map((items, index) => {
                    return (
                        <>
                            {data?.project && <Link href={`${pathName}/${items?.link}`} key={index} className='card'>
                                <div className="card-image" style={{ backgroundImage: `url(${items?.image?.src})`, height: `${items?.image?.height}px` }}>
                                    <div className="overlay"></div>
                                    <div className="content ml-7">
                                        <p className="sub-heading">{items?.subHeading}</p>
                                        <p className="heading">{items?.heading}</p>
                                    </div>
                                </div>
                            </Link>}
                        </>
                    )
                })}
                </div>
            </div>}
        </sections>
    )
}

export default CardsWithIamge;