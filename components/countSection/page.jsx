import React from 'react'

const CountSection = ({data}) => {
    return (
        <section className="count-section">
            {data?.bgImage && <div className='background-image' style={{ backgroundImage: `url(${data?.bgImage?.src})`, height:`${data?.bgImage?.height}px` }}>
                <div className="overlay"></div>
                {data?.countDetails && <div className='counts mx-5 lg:mx-40 grid md:grid-cols-4'>
                    {data?.countDetails.map((item,index)=>{
                        return(
                            <div className="count inline-flex py-5 md:py-28" key={index}>
                                <p className="icon text-7xl text-white mt-2">{item?.icon}</p>
                                <div className="content mx-2 block">
                                    <p className="total-count">{item?.totalCount}</p>
                                    <p className="name">{item?.name}</p>
                                </div>
                            </div>
                        )
                    })}
                    </div>}
            </div>}
        </section>
    )
}

export default CountSection;