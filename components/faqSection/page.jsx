"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const FaqSection = ({ data }) => {

    const [open, setOpen] = useState(0);

    const handleOpen = (index) => {
        if (index == open) {
            setOpen(null);
        }
        else {
            setOpen(index);
        }
    }
    return (
        <section className="faq-section mx-2 md:mx-14 xl:mx-40 my-28 mb-32">
            <div id='why-choose' className="left-column lg:mx-9 grid lg:grid-cols-2">
                <div className=''>
                    <p className="sub-heading">{data?.leftColumn?.subHeading}</p>
                    <p className="heading mb-5 text-2xl md:text-3xl">{data?.leftColumn?.title}</p>
                    {data?.leftColumn?.cardDetails && <div className='cards mb-5'>
                        {data?.leftColumn?.cardDetails.map((item, index) => {
                            return (
                                <div className="card ml-3 md:ml-6" key={index}>
                                    <div className='heading-div'>
                                        <p className="heading">{item?.heading}</p>
                                        <p className="line"></p>
                                    </div>
                                    <p className="body-content mt-2">{item?.body}</p>
                                </div>
                            )
                        })}
                    </div>}
                    {data?.leftColumn?.button && <Link href={data?.leftColumn?.button?.link} className='button'>{data?.leftColumn?.button?.text}</Link>}
                </div>
                <div className="image lg:px-3 lg:pl-5" style={{ backgroundImage: `url(${data?.leftColumn?.image?.src})`, height: `${data?.leftColumn?.image?.height}px` }}></div>
            </div>
            <div id='faq' className="right-column lg:mx-5 mt-8 lg:mt-28">
                <p className="sub-heading ">{data?.rightColumn?.subHeading}</p>
                <p className="heading text-2xl md:text-3xl">{data?.rightColumn?.heading}</p>
                {data?.rightColumn?.faqDetails && <div className='faq-details mb-5'>
                    {data?.rightColumn?.faqDetails.map((faq, index) => {
                        return (
                            <div className="faq-detail" key={index}>
                                <div className={`questions mt-10 flex justify-between ${index == open ? 'open' : ''}`} onClick={() => { handleOpen(index) }}>
                                    <p className="question">{faq?.question}</p>
                                    {index == open ? <p className="icon text-2xl">{faq?.icon?.down}</p> : <p className="icon text-2xl">{faq?.icon?.up}</p>}
                                </div>
                                {faq?.answer && <div className={`answers mt-7 ${index == open ? 'open' : ''}`}>
                                    {faq?.answer.map((answer, i) => {
                                        return (
                                            <p className="answer pl-5 mt-3" key={i}><span className="number pr-2">{i + 1}.</span>{answer}</p>
                                        )
                                    })}
                                </div>}
                            </div>
                        )
                    })}
                </div>}
                {data?.rightColumn?.button && <Link href={data?.rightColumn?.button?.link} className='button'>{data?.rightColumn?.button?.text}</Link>}
            </div>
        </section>
    )
}

export default FaqSection;