"use client"
import React,{useState,useEffect} from 'react'
import {LuChevronUp} from 'react-icons/lu';

const ScrollToTop = () => {
    const [scrollValue,setScrollValue]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 500){
                setScrollValue(true);
            }
            else{
                setScrollValue(false);
            }
        })
    })

    const handleScrollTop=()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
  return (
    <section className="scroll-to-top">
        {scrollValue && <p className="icon text-2xl text-white cursor-pointer" onClick={()=>{handleScrollTop()}}><LuChevronUp/></p>}
    </section>
  )
}

export default ScrollToTop;