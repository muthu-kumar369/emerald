import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const ProjectDetails = ({data}) => {
  return (
    <section className="project-details mx-4 md:mx-10 lg:mx-40 my-28">
        {data?.image && <Image src={data?.image} className='image'/>}
        {data?.subHeading && <p className='sub-heading mt-7 '>{data?.subHeading}</p>} 
        {data?.heading && <p className='heading'>{data?.heading}</p>}
        {data?.content && <p className='body-content mb-5'>{data?.content}</p>}
        {data?.button && <Link className='button p-3' href={data?.button?.link} target='_blank'>{data?.button?.text}</Link>}
    </section>
  )
}

export default ProjectDetails;