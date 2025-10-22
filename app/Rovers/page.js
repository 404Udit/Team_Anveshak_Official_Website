import React from 'react'
import Navbar from '@/components/Navbar'
import Rover_cards_l from '@/components/Rover_cards_l'
import Rover_cards_r from '@/components/Rover_cards_r'
import Support_btn from '@/components/Support_btn'
import Image from 'next/image'
import MotionWrapper from '../../components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'


const Rovers = () => {
    return (
        <>
        <MotionWrapper>
            <div>
                <div className='fixed top-0 w-full h-screen -z-3'>
                    <Image fill  className="object-cover transition-opacity" src="/images/Rovers/bg_img.svg" alt="" />
                </div>
                
                <Navbar />
                <Support_btn/>
                <div className='flex justify-center bg-[#D9D9D9] p-5 mt-40'>
                    <Image width={10} height={30} priority className='w-auto h-auto' src="/images/Rovers/our_rovers.svg" alt="" />
                </div>
                <Rover_cards_l img_url="/images/Rovers/rover_1.png" year="2025" name="ISSAC" desc="Metal Wheels Rolling" />
                <Rover_cards_r img_url="/images/Rovers/rover_2.png" year="2024" name="HEISENBERG" desc="Steerable robust rover" />
                <Rover_cards_l img_url="/images/Rovers/rover_3.png" year="2024" name="HUBBLE" desc="Autonomous Rover" />
                <Rover_cards_r img_url="/images/Rovers/rover_4.png" year="2023" name="GALILEO" desc="Anveshak Rises" />
                <Rover_cards_l img_url="/images/Rovers/rover_5.png" year="2022" name="FORESIGHT" desc="Post Pandemic ray of Hope." />
                <Rover_cards_r img_url="/images/Rovers/rover_6.png" year="2020" name="DARKNIGHT" desc="Why so serious?" />
                <Rover_cards_l img_url="/images/Rovers/rover_7.png" year="2019" name="CAESAR" desc="Robust. Compact. Simple." />
                <Rover_cards_r img_url="/images/Rovers/rover_8.png" year="2018" name="BADGER" desc="Cuteness overloaded.." />
                <Rover_cards_l img_url="/images/Rovers/rover_9.png" year="2017" name="AURORA" desc="Metal wheels rolling!" />
               
            </div>
             </MotionWrapper>
        </>
    )
}

export default Rovers
