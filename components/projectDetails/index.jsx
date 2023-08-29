import React from 'react'
import Link from 'next/link';

const ProjectDetails = ({ data }) => {
  return (
    <section className="project-details mx-4 md:mx-14 xl:mx-40 my-28">
      <div className={`${data?.service ? "grid lg:grid-cols-2 gap-7":""}`}>
        {data?.image && <div style={{ backgroundImage: `url(${data?.image?.src})`, height: `${data?.image?.height}px` }} className={`${data?.service ? "service image":"image"}`} />}
        <div className='mb-5'>
          {data?.subHeading && <p className='sub-heading mt-7 '>{data?.subHeading}</p>}
          {data?.heading && <p className='heading mt-4'>{data?.heading}</p>}
          {data?.bodyContent && <div>
            {data?.bodyContent.map((item,index)=>{
              return (
                <p className='body-content mt-5' key={index}>{item}</p>
              )
            })}
            </div>}
            {data?.connect && <div className='mt-4'>
              <p className="connect-heading mb-3">{data?.connect?.text}</p>
              <Link className='button p-2' href={data?.connect?.button?.link}>{data?.connect?.button?.text}</Link>
              </div>}
        </div>
      </div>
      {data?.contentHeader && <div className='mt-20'>
          <p className="sub-heading">{data?.contentHeader?.subHeading}</p>
          <p className="heading">{data?.contentHeader?.heading}</p>
          </div>}
      {data?.content && <div className={`mt-10 mb-10 ${data?.service ? "grid md:grid-cols-2 gap-5":""}`}>
        {data?.content.map((item, index) => {
          return (
            <p className='content mb-5' key={index}>{item?.boldText && <span className='bold'>{item?.boldText}</span>}{item?.text ? item?.text : item}</p>
          )
        })}
      </div>}
      {data?.button && <Link className='button p-3' href={data?.button?.link} target='_blank'>{data?.button?.text}</Link>}
    </section>
  )
}

export default ProjectDetails;