import React from 'react'
import Navbar from '@/components/Navbar'
import Support_btn from '@/components/Support_btn'
import Image from 'next/image'
import MotionWrapper from '../../components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'

const Media = () => {
  return (
    <div>
      <MotionWrapper>


        <div className='fixed top-0 w-full h-screen -z-3'>
          <Image fill priority className='object-cover transition-opacity' src="/images/stars.svg" alt="" />
        </div>


        <Navbar />
        <Support_btn />
        <div className='max-[1000px]:hidden'>
          <div className='bg-[#D9D9D9] mt-40 flex justify-center items-center py-6'>
            <Image width={452} height={70} src="/images/Media/outreach.svg" alt="" />
          </div>
          <div className='flex flex-col gap-15 mt-35 mx-20 mb-20 '>
            <ScrollMotion>
              <div className='flex gap-20 overflow-hidden'>
                <Image width={826} height={480} className='w-[40%] h-[480px]' src="/images/Media/indian_express.png" alt="" />
                <Image width={520} height={480} className='w-[55%]  h-[480px]' src="/images/Media/TOI.png" alt="" />
              </div>
            </ScrollMotion>
            <ScrollMotion>
              <div className='flex gap-10 overflow-hidden'>
                <Image width={825} height={570} className='w-[70%] h-[570px]' src="/images/Media/TOI_2.png" alt="" />
                <Image width={489} height={570} className='w-[30%] h-[570px]' src="/images/Media/img_4.png" alt="" />
              </div>
            </ScrollMotion>
            <ScrollMotion>
              <div className='flex gap-10 overflow-hidden'>
                <Image width={523} height={530} className='w-[40%] h-[530px]' src="/images/Media/Telegraph_india.png" alt="" />
                <Image width={764} height={530} className='w-[60%] h-[530px]' src="/images/Media/img_6.png" alt="" />
              </div>
            </ScrollMotion>
          </div>
        </div>


        <div className='min-[1000px]:hidden'>
          <div className='bg-[#D9D9D9] mt-40 flex justify-center items-center py-6'>
            <Image width={452} height={70} src="/images/Media/outreach.svg" alt="" />
          </div>
          <div className='flex flex-col gap-15 mt-35 mx-20 max-[1000px]:mx-10 mb-20 '>
            <div className='flex gap-20 overflow-hidden max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:w-full'>
              <ScrollMotion>
                <Image width={826} height={480} className='w-[40%] max-[1000px]:w-[100vw] h-[480px]' src="/images/Media/indian_express.png" alt="" />
              </ScrollMotion>
              <ScrollMotion>
                <Image width={520} height={480} className='w-[55%] max-[1000px]:w-[100vw]  h-[480px]' src="/images/Media/TOI.png" alt="" />
              </ScrollMotion>
            </div>
            <div className='flex gap-10 overflow-hidden max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:w-full'>
              <ScrollMotion>
                <Image width={825} height={570} className='w-[70%] max-[1000px]:w-[100vw]  h-[570px]' src="/images/Media/TOI_2.png" alt="" />
              </ScrollMotion>
              <ScrollMotion>
                <Image width={489} height={570} className='w-[30%] max-[1000px]:w-[100vw]  h-[570px]' src="/images/Media/img_4.png" alt="" />
              </ScrollMotion>
            </div>
            <div className='flex gap-10 overflow-hidden max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:w-full'>
              <ScrollMotion>
                <Image width={523} height={530} className='w-[40%] max-[1000px]:w-[100vw]  h-[530px]' src="/images/Media/Telegraph_india.png" alt="" />
              </ScrollMotion>
              <ScrollMotion>
                <Image width={764} height={530} className='w-[60%] max-[1000px]:w-[100vw]  h-[530px]' src="/images/Media/img_6.png" alt="" />
              </ScrollMotion>
            </div>
          </div>
        </div>

      </MotionWrapper>
    </div>
  )
}

export default Media
