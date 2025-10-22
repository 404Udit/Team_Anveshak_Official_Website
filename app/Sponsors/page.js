import React from 'react'
import Navbar from '@/components/Navbar'
import Support_btn from '@/components/Support_btn'
import Image from 'next/image'
import MotionWrapper from '../../components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'

const Sponsors = () => {
    return (
        <div>
            <MotionWrapper>
                <Navbar />
                <Support_btn />
                <div className='fixed top-0 w-full h-screen -z-3'>
                    <Image fill priority className='object-cover transition-opacity' src="/images/stars.svg" alt="" />
                </div>
                <ScrollMotion>
                    <div className='bg-[#D9D9D9] py-5 flex justify-center items-center mt-40 '>
                        <Image width={452} height={70} className='max-[600px]:w-[300px] max-[600px]:h-[50px]' src="/images/Sponsors/our_sponsors.svg" alt="" />
                    </div>
                    <div className='flex flex-wrap max-[1500px]:gap-10 mt-10 justify-center items-center'>
                        <Image width={373} height={373} className='w-[200px] h-[200px]' src="/images/Sponsors/pcb.png" alt="" />
                        <Image width={450} height={160} src="/images/Sponsors/ansys.svg" alt="" />
                        <Image width={328} height={128} src="/images/Sponsors/pololu.svg" alt="" />
                        <Image width={454} height={247} src="/images/Sponsors/creality.svg" alt="" />
                    </div>
                </ScrollMotion>
            </MotionWrapper>
        </div>
    )
}

export default Sponsors
