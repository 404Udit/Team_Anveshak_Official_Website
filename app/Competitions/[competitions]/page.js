"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Support_btn from '@/components/Support_btn'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import MotionWrapper from '../../../components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'

const Competitions = () => {
  let params = useParams()
  const compData = {
    IRC: {
      first_name: "INTERNATIONAL",
      second_name: "ROVER CHALLENGE",
      img_url: "/images/Competitions/team/IRC.png",
      desc_1: "SPROS IRC is a space robotics engineering competition. It challenges university students to conceptualise, design, develop and operate an astronaut-assistive next-generation space Rover and perform specific missions in Mars simulated conditions.",
      desc_2: "The objective of the competition is to provide students with a real-world interdisciplinary engineering experience, combining practical engineering skills with soft skills, including business planning and project management."
    },
    URC: {
      first_name: "UNIVERSITY",
      second_name: "ROVER CHALLENGE",
      img_url: "/images/Competitions/team/URC.png",
      desc_1: "The University Rover Challenge (URC) is the world's premier robotics competition for college students.  Held annually in the desert of southern Utah in the United States, URC challenges student teams to design and build the next generation of Mars rovers that will one day work alongside astronauts exploring the Red Planet.  URC consistently draws an international field of the most talented and promising students around.  The competition played a pivotal role in expanding our understanding of robotics and space exploration, reinforcing our commitment to excellence in this field.",
      desc_2: ""
    },
    ARC: {
      first_name: "ANATOLIAN",
      second_name: "ROVER CHALLENGE",
      img_url: "/images/Competitions/team/ARC.png",
      desc_1: "We participated in the Anatolian Rover Challenge 2023 held in Ankara, Turkiye, where we achieved a commendable 6th position among the competing teams. The competition comprised four challenging missions, each testing our rover's versatility and capabilities. The Night Mission pushed our engineering prowess by navigating through low-light conditions, emphasizing the importance of robust vision systems. The Maintenance mission showcased our team's agility in addressing unexpected challenges and ensuring the rover's operational efficiency. Astrobiology required meticulous sample collection and analysis, simulating extraterrestrial exploration scenarios. Autonomous Navigation tested our rover's ability to navigate unfamiliar terrains independently. The experience was invaluable, providing us with insights into real-world problem-solving and enhancing our skills in robotics and space exploration.",
      desc_2: ""
    },
    ERC: {
      first_name: "EUROPEAN",
      second_name: "ROVER CHALLENGE",
      img_url: "/images/Competitions/team/blank.jpg",
      desc_1: "The European Rover Challenge (ERC) is a prestigious international competition where student teams from around the world design, build, and operate Mars rover prototypes to complete tasks simulating real space exploration missions.",
      desc_2: "Team Anveshak proudly participates in ERC, showcasing our cutting-edge engineering, robust design thinking, and multidisciplinary collaboration. Our rover is built to tackle challenges like terrain navigation, autonomous traversal, sample collection, and equipment servicing — all inspired by real Martian missions.Through ERC, we test our rover under rigorous conditions, learn from global experts, and push the boundaries of innovation in space robotics.",
    },

    IROC: {
      first_name: "ISRO ROBOTIC CHALLENGE",
      second_name: "ROVER CHALLENGE",
      img_url: "/images/Competitions/team/blank.jpg",
      desc_1: "Indian Space Research Organisation(ISRO) successfully landed Chandrayaan-3 Vikram on the lunar surface and Pragyan explored near to the southern pole of the Moon. Post this accomplishment, it is time to look at future robotic exploration missions to the Moon and other planetary bodies. It has been a constant endeavour at ISRO that, we create unique opportunities for academia & industry to participate in the technology developmental activities commensurate with organisational objectives. ",
      desc_2: "In line with these objectives, U R Rao Satellite Centre (URSC) solicits from the youth of India, innovative ideas and designs of robotic rovers for future missions through the conduct of IRoC-U. The objective here is to provide development opportunities in space robotics to the participating entities and to leverage the creative thinking among the youth of our Nation for ISRO interplanetary missions. It is also expected to play an important role in augmenting ISRO’s activities in space exploration.",
    },

  }
  let comp = params.competitions;


  return (
    <>
      <MotionWrapper>

        <div className='fixed top-0 w-full h-screen -z-3'>
          <Image fill className="object-cover transition-opacity" src="/images/stars_2.svg" alt="" />
        </div>
        <Navbar />
        <Support_btn />
        <div className='absolute top-0 w-full h-[95vh]  max-[800px]:h-[70vh] max-[550px]:h-[60vh] overflow-hidden '>
          <Image width={826} height={427} className=' w-full h-full object-cover object-center -z-1' src={compData[comp].img_url} alt="" />
        </div>

        <div className="absolute inset-0 h-[95vh] max-[800px]:h-[70vh] max-[550px]:h-[60vh] bg-black opacity-30"></div>

        <div className='w-full h-[calc(95vh-110px)] max-[800px]:h-[calc(70vh-110px)] max-[550px]:h-[calc(60vh-110px)] text-[95px] max-[1000px]:text-[60px] max-[600px]:text-[40px] max-[400px]:text-[30px] font-[800] flex flex-col justify-end items-center'>
          <h1 className='text-[#DD6408]  relative z-1'>{compData[comp].first_name}</h1>
          <h1 className='text-white  relative z-1 '>{compData[comp].second_name}</h1>
        </div>

        <div className='bg-[#D9D9D9] font-[600] text-[30px] max-[1000px]:text-[25px] max-[700px]:text-[20px] text-justify flex flex-col gap-10 py-10 px-30 max-[1000px]:px-10 my-20'>
          <span>{compData[comp].desc_1}</span>
          <span>{compData[comp].desc_2}</span>
        </div>
      </MotionWrapper>
    </>
  )
}

export default Competitions
