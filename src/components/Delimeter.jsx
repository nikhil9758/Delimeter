import React, { useState } from 'react'
import DataBox from './DataBox'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

const delimeterOptions=[',',';','|','spaces','New Line']

const Delimeter = () => {
    const [text,setText]=useState('')
    const [csvText,setCsvText]=useState('')
    const [selectedDelimeter,setSelectedDelemiter]=useState(',')
    console.log(selectedDelimeter)
    const handleTextChange=(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }
    const handleRightClick=()=>{

        const filteredCsvData=selectedDelimeter==='/n'?text.trim():text.split('\n').filter((item)=>item.trim()!=='').join(selectedDelimeter)
        
        setCsvText(filteredCsvData)
    }
    const handleDelimeterChange=(e)=>{
        let value=e.target.value
        if(value==='spaces') value= ' '
        if(value==='New Line') value= '/n'
        setSelectedDelemiter(value)
    }
  return (
    <div className='flex '>
        <DataBox showNumberPannel={true} text={text} onTextChange={handleTextChange} title={'Column Data Here...'}/>
        <div>
            <select name='options' className='text-center w-15 mt-20 border-solid border-2 border-neutral-600 mb-3 cursor-pointer' onChange={handleDelimeterChange}>
                {delimeterOptions.map((delimeterOption,index)=>{
                    return(
                            <option key={index} value={delimeterOption}>{delimeterOption}</option>
                        )
                    })}
            </select>
            <div className='m-3 p-2 cursor-pointer'>
                <FaChevronLeft />
            </div>
            <div className='m-3 p-2 cursor-pointer' onClick={handleRightClick}>
                <FaChevronRight />
            </div>
        </div>
        <DataBox showNumberPannel={false} text={csvText} title={'Delimited Data Here...'}/>

        <div className='fixed  rounded-3xl  bg-slate-300 right-0'>
            <CiTwitter className='m-3 text-2xl' />
        </div>
        <div className='fixed  rounded-3xl  bg-slate-300 right-0 top-[43%]'>
            <FaFacebookF className='m-3 text-2xl' />
        </div>
    </div>
  )
}

export default Delimeter