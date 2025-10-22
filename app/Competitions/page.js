import React from 'react'
import Navbar from '@/components/Navbar'
import Support_btn from '@/components/Support_btn'
import Link from 'next/link'
import Image from 'next/image'
import MotionWrapper from '../../components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'

const Competitions = () => {
    return (
        <>
        <MotionWrapper>
            <Image width={1643} height={943} priority className='fixed top-0 w-full -z-1' src="/images/stars.svg" alt="" />
            <Navbar />
            <Support_btn />

            <ScrollMotion>
            <div className='h-[245px] max-[960px]:h-auto max-[1450px]:h-[200px] max-[960px]:w-[90vw] max-[960px]:flex-wrap max-[960px]:justify-center mt-64 mb-20 flex bg-[#D9D9D9] p-5 items-center justify-evenly w-[90vw] mx-auto rounded-[45px]'>

                <Link href="/Competitions/IRC">
                    <div className='max-[1450px]:w-[120px] max-[1450px]:h-[120px] w-[170px] h-[170px] max-[960px]:w-[200px] max-[960px]:mb-5 relative animate-scale-once anim-delay-0'>
                        <div className='hover:scale-110 group flex flex-col items-center'>
                            <Image width={142} height={142} className='max-[1450px]:w-[100px] max-[1450px]:h-[100px] w-[142px] h-[142px] cursor-pointer group-hover:scale-110 transition-all' src="/images/Competitions/IRC.png" alt="" />
                            <Image width={41} height={67} className='max-[1450px]:w-[50px] max-[1450px]:h-[30px] h-[41px] w-[67px] cursor-pointer transition-all' src="/images/Competitions/IRC.svg" alt="" />
                        </div>
                    </div>
                </Link>


                <Link href="/Competitions/URC">
                    <div className='max-[960px]:w-[200px] max-[960px]:flex max-[960px]:justify-center max-[960px]:items-center  max-[1450px]:w-[150px] max-[1450px]:h-[70px] w-[170px] h-[110px] relative animate-scale-once anim-delay-200'>
                        <Image width={150} height={96} className='max-[1450px]:w-[100px] max-[1450px]:h-[60px]   w-[150px] h-[96px] cursor-pointer hover:w-[170px] hover:h-[110px] transition-all' src="/images/Competitions/URC.png" alt="" />
                    </div>
                </Link>

                <Link href="/Competitions/ARC">
                    <div className='max-[960px]:w-[200px] w-[180px] max-[960px]:flex max-[960px]:justify-center max-[960px]:items-center h-[180px] max-[1450px]:w-[120px] max-[1450px]:h-[120px] relative animate-scale-once anim-delay-400'>
                        <Image width={160} height={160} className=' max-[1450px]:w-[100px] max-[1450px]:h-[100px]  w-[160px] h-[160px] cursor-pointer hover:w-[180px] hover:h-[180px] transition-all' src="/images/Competitions/ARC.png" alt="" />
                    </div>
                </Link>

                <Link href="/Competitions/ERC">
                    <div className='max-[960px]:w-[200px] max-[1450px]:w-[220px] max-[1450px]:h-[120px] w-[320px] h-[160px] relative animate-scale-once anim-delay-600'>
                        <Image width={300} height={147} className=' max-[1450px]:w-[200px] max-[1450px]:h-[100px] w-[300px] h-[147px] cursor-pointer hover:w-[320px] hover:h-[160px] transition-all' src="/images/Competitions/ERC.png" alt="" />
                    </div>
                </Link>

                <Link href="/Competitions/IROC">
                    <div className='max-[960px]:w-[200px] max-[1450px]:w-[220px] max-[1450px]:h-[80px] w-[345px] h-[110px] relative animate-scale-once anim-delay-800'>
                        <Image width={327} height={92} className=' max-[1450px]:w-[200px] max-[1450px]:h-[60px] w-[327px] h-[92px] cursor-pointer hover:w-[345px] hover:h-[110px] transition-all' src="/images/Competitions/IROC.png" alt="" />
                    </div>
                </Link>

            </div>
            </ScrollMotion>
            </MotionWrapper>
        </>
    )
}

export default Competitions
