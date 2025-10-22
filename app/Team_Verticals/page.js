import React from 'react'
import Navbar from '@/components/Navbar'
import Verticals from '@/components/Verticals'
import MotionWrapper from '../../components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <MotionWrapper>
                    <div className='fixed top-0 w-full h-screen -z-3'>
                        <Image fill className="object-cover transition-opacity" priority src="/images/stars.svg" alt="" />
                    </div>

                <div>
                    <Navbar />
                    <ScrollMotion>
                        <div className='text-[#C0C0C0] font-[900] text-[55px] max-[700px]:text-[35px] flex justify-center mt-20'>TEAM VERTICALS</div>
                        <div className='flex justify-evenly flex-wrap my-10'>
                            <Verticals name="MECHANICAL" desc="Designs and fabricates the rover’s chassis, suspension, robotic arm, and mechanical subsystems to ensure optimal structural strength, terrain adaptability, and reliable performance in simulated planetary conditions" />
                            <Verticals name="ELEC&SOFT" desc="Develops the power systems, PCB design, motor control, autonomous navigation, and vision algorithms to enable intelligent, precise, and responsive operation of the rover across all tasks." />
                            <Verticals name="ASTROBIO" desc="Designs experiments and onboard analytical tools to collect, process, and interpret soil samples for detecting biosignatures and evaluating the habitability of extraterrestrial environments." />
                            <Verticals name="CPR" desc="Handles sponsorship acquisition, public engagement, content creation, branding, and media strategies to strengthen the team’s visibility, outreach efforts, and long-term industry and academic collaborations." />
                        </div>
                    </ScrollMotion>

                </div>
            </MotionWrapper>

        </>
    )
}

export default page
