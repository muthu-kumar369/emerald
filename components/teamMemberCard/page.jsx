import Link from 'next/link';
import React from 'react'

const TeamMemberCards = ({ data }) => {
    return (
        <section className="team-member-section py-24 lg:py-4" id='team-member'>
            <div className="team-member-component mx-8 lg:mx-40  grid lg:grid-cols-12">
                <div className="team-member-content text-center lg:my-24 lg:text-left lg:col-span-3">
                    <p className="sub-heading">{data?.subHeading}</p>
                    <p className="heading">{data?.heading}</p>
                    <p className="body-content lg:pr-8 py-3">{data?.body}</p>
                    {data?.button && <p className='mt-3'>
                        <Link className="button" href={`${data?.button?.link}`}>{data?.button?.text}</Link>
                    </p>}
                </div>
                <div className="team-member-cards mt-20  lg:my-24 lg:col-span-9">
                    {data?.cardDetails && <div className="grid md:grid-cols-3 gap-7">
                        {data?.cardDetails.map((item, index) => {
                            return (
                                <div className="team-member-card" key={index}>
                                    <div className="image" style={{ backgroundImage: `url(${item?.image.src})`, height: `${item?.image?.height}px` }}></div>
                                    <div className="content text-center py-4">
                                        <p className="name">{item?.name}</p>
                                        <p className="position">{item?.position}</p>
                                        {item?.icons && <div className="icons justify-center flex ">
                                            {item?.icons.map((icon, i) => {
                                                return (
                                                    <p className="icon mx-2" key={i}>
                                                       <Link href={`${icon?.link}`}>{icon?.icon}</Link>
                                                        </p>
                                                )
                                            })}
                                        </div>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>}

                </div>
            </div>
        </section>
    )
}

export default TeamMemberCards;