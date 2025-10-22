import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import MotionWrapper from '../../components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'


const Suport_Us = () => {
  return (
    <div>
      <MotionWrapper>
        <div className='fixed top-0 w-full h-screen -z-3'>
          <Image fill priority className='object-cover transition-opacity' src="/images/stars.svg" alt="" />
        </div>
        <ScrollMotion>

          <Navbar />
          <div className='bg-[#D9D9D9] py-5  flex justify-center items-center mt-25'>
            <Image width={364} height={70} className='max-[600px]:w-[250px] h-[50px]' src="/images/Support_us/support_us.svg" alt="" />
          </div>
          <div className='bg-black px-30 max-[1350px]:px-20 max-[1000px]:px-10 max-[500px]:px-5 py-20 mt-30 text-justify'>
            <div className='flex flex-col gap-10'>
              <h1 className='font-[600] text-[#DD6408] text-[35px] max-[800px]:text-[30px] max-[700px]:text-center leading-[35px]'>Support Innovation Sponsor Team Anveshak</h1>
              <span className='font-[350] text-[24px] max-[800px]:text-[20px] leading-[35px] text-white tracking-widest'>Team Anveshak is the official Mars Rover team of IIT Madras, formed by a passionate group of undergraduate students from diverse engineering backgrounds. We design, build, and test next-generation rovers to compete at global platforms like the University Rover Challenge (URC) in the USA — one of the most prestigious Mars Rover competitions in the world.</span>
              <span className='font-[350] text-[24px] max-[800px]:text-[20px] leading-[35px] text-white tracking-widest'>Our goal is to not just build rovers, but to inspire innovation, promote interdisciplinary collaboration, and push the boundaries of space robotics.</span>
            </div>


            <div className='flex flex-col mt-30'>
              <h1 className='font-[600] text-[#DD6408] text-[35px] max-[700px]:text-center max-[800px]:text-[30px] leading-[35px]'>Ways You Can Support Us</h1>
              <h2 className='font-[400] text-white text-[35px] max-[800px]:text-[30px] max-[700px]:text-center leading-[35px] mt-10 mb-5'>Corporate Sponsorship</h2>
              <span className='font-[350] text-[24px] max-[800px]:text-[20px] leading-[35px] text-white tracking-widest flex flex-col'>
                Partner with us as a sponsor and gain high-impact brand visibility:
                <ul className='list-disc max-[700px]:text-left  max-[500px]:text-[18px] max-[500px]:leading-[30px] list-inside relative left-10 max-[500px]:left-0 leading-[50px]'>
                  <li>Logo placement on our rover, jerseys, website, and event banners</li>
                  <li>Recognition in media coverage, competition reports, and promotional videos</li>
                  <li>Access to IIT Madras&#39; talent pool for recruitment, R&D, and campus engagement</li>
                  <li>Opportunities to fulfill your CSR and STEM outreach goals</li>
                </ul>
                <span className='leading-[50px] text-left'>📩 Email us at: teamanveshak@smail.iitm.ac.in</span>
                <span>📞 Call us: +91-99302 28078</span>
              </span>
            </div>

            <div>
              <h1 className='font-[400] text-white text-[35px] max-[800px]:text-[30px] max-[700px]:text-center leading-[35px] mt-10 mb-5'>Individual Contributions</h1>
              <span className='font-[350] text-[24px] max-[800px]:text-[20px] leading-[35px] text-white tracking-widest'>Every contribution big or small takes us one step closer to building and testing our next rover. Your support directly funds:</span>
              <ul className='font-[350] max-[700px]:text-left text-[24px] max-[800px]:text-[20px] max-[500px]:text-[18px] max-[500px]:leading-[30px] text-white tracking-widest list-disc list-inside relative left-10 max-[500px]:left-0 leading-[50px]'>
                <li>Component procurement (motors, sensors, boards)</li>
                <li>Simulation & prototyping tools</li>
                <li>Field testing, logistics, and competition travel</li>
              </ul>
            </div>

            <div className='flex flex-col gap-10 mt-20'>
              <h1 className='font-[600] text-[#DD6408] text-[35px] max-[700px]:text-center max-[800px]:text-[30px] leading-[35px]'>Donate to Team Anveshak</h1>
              <span className='font-[350] text-[24px] leading-[35px] max-[800px]:text-[20px] text-white tracking-widest text-left'>Team Anveshak accepts online donation through our <a target='_blank' rel="noopener noreferrer" className='underline text-[#DD6408] text-[26px] max-[800px]:text-[22px]' href=""> Crowd-Funding portal</a></span>
              <span className='font-[350] text-[24px] leading-[35px] max-[800px]:text-[20px] text-white tracking-widest text-left'>For sponsorships please contact us at <a className='text-[#DD6408]' target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=teamanveshak@smail.iitm.ac.in">teamanveshak@smail.iitm.ac.in</a></span>
            </div>

          </div>
          <div className='bg-[#FFFFFF] h-[6px] w-full'></div>
        </ScrollMotion>
      </MotionWrapper>
    </div>
  )
}

export default Suport_Us
