import React from 'react'
import ScrollMotion from './ScrollMotion'

const Achievement_card = (props) => {
    return (
        <>
            <ScrollMotion>
                <div className='relative p-6 bg-neutral-900 border border-[#DD6408]/50 rounded-xl shadow-md shadow-[#DD6408]/20'>
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#DD6408] rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#DD6408] rounded-br-xl"></div>
                    <div className='flex flex-col bg-[#D9D9D999] w-[450px] max-[1100px]:w-[350px] max-[900px]:w-full rounded-[60px] pb-10 pt-5 px-5'>
                        <span className='font-[700] text-[64px] max-[1100px]:text-[40px] text-center text-white h-fit'>{props.rank}</span>
                        <span className='font-[700] text-[40px] max-[1100px]:text-[30px] text-center text-[#DD6408]'>{props.comp}</span>
                        <span className='font-[700] text-[23px] max-[1100px]:text-[18px] text-justify text-white leading-[30px] px-8'>{props.desc}</span>
                    </div>
                </div>
            </ScrollMotion>
        </>
    )
}
export default Achievement_card