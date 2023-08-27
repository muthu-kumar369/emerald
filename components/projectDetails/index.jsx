import React from 'react'
import Link from 'next/link';

const ProjectDetails = ({data}) => {
  return (
    <section className="project-details mx-4 md:mx-14 xl:mx-40 my-28">
        {data?.image && <div style={{backgroundImage:`url(${data?.image?.src})`, height:`${data?.image?.height}px`}} className='image'/>}
        {data?.subHeading && <p className='sub-heading mt-7 '>{data?.subHeading}</p>} 
        {data?.heading && <p className='heading mt-4'>{data?.heading}</p>}
        {data?.content && <div>
          {data?.content.map((item,index)=>{
            return(
              <p className='body-content mb-5' key={index}>{item}</p>
            )
          })}
          </div>}
        {data?.button && <Link className='button p-3' href={data?.button?.link} target='_blank'>{data?.button?.text}</Link>}
    </section>
  )
}

export default ProjectDetails;