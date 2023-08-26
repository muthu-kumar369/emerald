"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

const Cards = ({ data }) => {
    const pathName=usePathname();
    return (
        <sections className="cards ">
            {data?.cardDetails && <div className='grid mx-4 md:mx-10 lg:mx-40 my-28 gap-5 grid-cols-1 lg:grid-cols-2'>
                {data?.cardDetails.map((items, index) => {
                    return (
                        <>
                            {data?.project && <Link href={`${pathName}/${items?.link}`} key={index} className='card'>
                                <div className="card-image"  style={{backgroundImage:`url(${items?.image?.src})`, height:`${items?.image?.height}px`}}>
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
            </div>}
        </sections>
    )
}

export default Cards;