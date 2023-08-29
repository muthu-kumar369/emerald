import React from 'react'

const CardOnlyContent = ({ data }) => {
    return (
        <section className="card-only-content mx-4 md:mx-14 xl:mx-40 my-28">
            {data?.subHeading && <p className='sub-heading'>{data?.subHeading}</p>}
            {data?.heading && <p className='heading text-2xl md:text-3xl'>{data?.heading}</p>}
            {data?.cardDetails && <div className={`cards mt-10 ${data?.gridClass}`}>
                {data?.cardDetails.map((items, index) => {
                    return (
                        <div className="card p-4" key={index}>
                            {items?.heading && <p className="heading">{items?.heading}</p>}
                            {items?.content && <div>
                                {items?.content.map((item, i) => {
                                    return (
                                        <p className="content" key={i}>{item}</p>
                                    )
                                })}
                            </div>}
                        </div>
                    )
                })}

            </div>}
        </section>
    )
}

export default CardOnlyContent;