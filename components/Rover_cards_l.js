import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScrollMotion_l from './ScrollMotion_l'

const Rover_cards_l = (props) => {
    return (
        <>
        <ScrollMotion_l>
            <div className='bg-black flex justify-evenly mt-15 mb-24'>
                <div>
                    <Link href={`/Rovers/${props.name}`}><Image width={560} height={350} className='  w-[560px] h-[350px]  max-[500px]:w-[200px] max-[700px]:w-[400px] max-[500px]:h-[150px] max-[700px]:h-[250px] max-[1000px]:w-[500px] max-[1000px]:h-[300px] rounded-[25px]' src={props.img_url} alt="" /></Link>
                </div>
                <div className='flex flex-col justify-center text-white text-[36px] text-center max-[500px]:gap-0 gap-2'>
                    <span className='max-[900px]:text-[24px] max-[500px]:text-[20px] font-normal'>{props.year}</span>
                    <Link href={`/Rovers/${props.name}`}><span className='font-bold max-[500px]:text-[20px] max-[900px]:text-[28px] text-[#DD6408]'>{props.name}</span></Link>
                    <span className='font-normal text-[32px] max-[500px]:text-[15px] max-[900px]:text-[28px]'>{props.desc}</span>
                </div>
            </div>
        </ScrollMotion_l>
        </>
    )
}

export default Rover_cards_l
