"use client"
import React, { useState } from 'react'

const FaqSection = ({data}) => {

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
        <section className="faq-section grid lg:grid-cols-2 mx-2 md:mx-10 lg:mx-40 my-28">
            <div className="left-column lg:mx-9">
                <div className="image" style={{ backgroundImage: `url(${data?.leftColumn?.image?.src})`, height: `${data?.leftColumn?.image?.height}px` }}></div>
                <p className="title my-5">{data?.leftColumn?.title}</p>
                {data?.leftColumn?.cardDetails && <div className='cards'>
                    {data?.leftColumn?.cardDetails.map((item, index) => {
                        return (
                            <div className="card ml-3 md:ml-6" key={index}>
                                <p className="heading">{item?.heading}</p>
                                <p className="body-content mt-2">{item?.body}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>
            <div className="right-column lg:mx-5 mt-8 lg:mt-20">
                <p className="sub-heading">{data?.rightColumn?.subHeading}</p>
                <p className="heading">{data?.rightColumn?.heading}</p>
                {data?.rightColumn?.faqDetails && <div className='faq-details'>
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
                                            <p className="answer pl-5 mt-3" key={i}><span className="number pr-2">{i+1}.</span>{answer}</p>
                                        )
                                    })}
                                </div>}
                            </div>
                        )
                    })}
                </div>}
            </div>
        </section>
    )
}

export default FaqSection;