import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ data }) => {
    return (
        <section className='service-card-section pb-10'>
            {data?.home && <div className="service-cards-home">
                {data?.cardDetails && <div className='lg:ml-56 grid lg:grid-cols-4'>
                    {data?.cardDetails.map((item, index) => {
                        return (
                            <div className="service-card mx-4" key={index}>
                                <p className="icon text-5xl">{item?.icon}</p>
                                <p className="card-heading mt-3">{item?.heading}</p>
                                <p className="body-content mt-5">{item?.body}</p>
                                <Link href={`/${item?.button?.link}`} className={`${item?.button?.class == 'rounded' ? 'button-rounded' : 'button'}`}>{item?.button.text}</Link>
                            </div>
                        )
                    })}
                </div>}
                {data?.cardButton && <Link href={'#'} className={`${data?.cardButton?.class}`}>
                    {data?.cardButton?.text}
                    </Link>}
            </div>}
            {data?.service && <div className='service-card-service py-24 mx-5 md:mx-48'>
                <p className="title text-center">{data?.title}</p>
                <p className="heading text-center">{data?.heading}</p>
            {data?.cardDetails && <div className=' grid lg:grid-cols-3 gap-8 py-16'>
                    {data?.cardDetails.map((item, index) => {
                        return (
                            <div className="service-card" key={index}>
                                <p className="icon text-5xl">{item?.icon}</p>
                                <p className="card-heading mt-3">{item?.heading}</p>
                                <p className="body-content mt-5 ">{item?.body}</p>
                                <Link href={`#`} className={`${item?.button?.class == 'rounded' ? 'button-rounded' : 'button'}`}>{item?.button.text}</Link>
                            </div>
                        )
                    })}

                </div>}
            </div>}
        </section>
    )
}

export default ServiceCard