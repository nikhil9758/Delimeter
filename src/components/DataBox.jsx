import React, { useEffect, useRef, useState } from 'react'

const DataBox = ({text,onTextChange,showNumberPannel,title}) => {
const textAreaRef= useRef(null)
const numRef= useRef(null)
const handleScroll=async ()=>{
    const top= document.getElementById('text-area').scrollTop
    console.log("scrolling", textAreaRef.current?.rows)
    if(numRef.current)numRef.current.scrollTop=top
}
useEffect(()=>{
    const textArea= textAreaRef.current
        textArea.addEventListener('scroll',handleScroll)
    },[])
    
  return (
    <div className='flex flex-col w-[100%]'>
        <div className='m-3 text-center'>
            {title}
        </div>
        <div className='m-5 w-[90%] h-[292px] border-neutral-600 border-2 flex'>
            {showNumberPannel &&<div ref={numRef} className='w-[15%] overflow-hidden scroll-auto bg-sky-400 text-white text-center' id='num'>
                {text?.split('\n').map((item,index)=>{
                    return (
                        <div key={index}>{index+1}</div>
                        )
                    })}
            </div>}
            <textarea id='text-area' value={text} ref={textAreaRef} className='w-full overflow-hidden' rows={12}  style={{resize: "none"}} onChange={onTextChange}>

            </textarea>                                                                                                                      
        </div>
    </div>
  )
}

export default DataBox