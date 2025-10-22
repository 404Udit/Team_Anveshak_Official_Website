import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollMotion_r from './ScrollMotion_r'


const Rover_cards_r = (props) => {
    return (
        <>
        <ScrollMotion_r>
            <div className='bg-black flex justify-evenly mt-15 mb-24'>
                <div className='flex flex-col justify-center  text-white text-[36px] text-center gap-2'>
                    <span className='font-normal max-[500px]:text-[20px] max-[900px]:text-[24px]'>{props.year}</span>
                    <Link href={`/Rovers/${props.name}`}><span className='font-bold max-[500px]:text-[20px] max-[900px]:text-[28px] text-[#DD6408]'>{props.name}</span></Link>
                    <span className='font-normal text-[32px] max-[500px]:text-[15px] max-[900px]:text-[28px]'>{props.desc}</span>
                </div>
                <div>
                    <Link href={`/Rovers/${props.name}`}><Image width={560} height={350} className='max-[700px]:w-[400px] max-[500px]:w-[200px] max-[500px]:h-[150px] max-[700px]:h-[250px] max-[1000px]:w-[500px] max-[1000px]:h-[300px] rounded-[25px]' src={props.img_url} alt="" /></Link>
                </div>

            </div>
        </ScrollMotion_r>
        </>
    )
}

export default Rover_cards_r
