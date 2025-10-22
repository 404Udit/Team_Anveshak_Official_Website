"use client"

import React from 'react'
import Link from 'next/link'
import Verticals_card_ani from './Verticals_card_ani'
const Verticals = (props) => {
  return (
    <>
    <Verticals_card_ani>
      <Link href={`/Current_Team/${props.name}`}>
        <div     style={{ backfaceVisibility: 'hidden',}} className='flex flex-col  hover:scale-110 transition-all cursor-pointer mt-20'>
         <div className='bg-[#DD6408] text-white font-[700] text-[40px] max-[1500px]:text-[35px] max-[500px]:w-[300px] max-[500px]:text-[20px] rounded-t-[25px] text-center w-[330px]'>{props.name}</div>
          <div className='bg-[#D9D9D9] text-[22px] font-[500] max-[500px]:text-[14px] max-[500px]:h-[200px]  max-[500px]:w-[300px] max-[1500px]:text-[18px] max-[1500px]:h-[300px] max-[1500px]:rounded-b-[25px] uppercase text-center text-[#DD6408] h-[400px] w-[330px] p-4'>{props.desc}</div>
        </div>
        </Link>
      </Verticals_card_ani>
    </>
  )
}

export default Verticals


