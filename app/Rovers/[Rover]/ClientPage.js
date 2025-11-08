"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import MotionWrapper from '../../../components/MotionWrapper'

const Rover = () => {
    let params = useParams()

    const roverData = {
        ISAAC: {
            img_url: "/images/Rovers/rover_1.png",
            desc: "The Isaac rover showcases a leap forward in design and functionality with the implementation of a robust Controller Area Network (CAN) system, custom-built motor drivers, and an integrated steering mechanism. By adopting CAN communication, Isaac achieves reliable and efficient data exchange between its various subsystems, ensuring synchronized operation and real-time control. The use of custom motor drivers further optimizes the performance of its motors, providing precise control over speed and torque while enhancing energy efficiency. Coupled with its steering capability, Isaac can navigate challenging terrain with improved maneuverability and adaptability."
        },
        HEISENBERG: {
            img_url: "/images/Rovers/rover_2.png",
            desc: "The Heisenberg rover marks a significant milestone by implementing a steering mechanism for the first time in its design history. This advancement allows the rover to maneuver with far greater precision and flexibility compared to previous models with fixed wheels. By integrating an active steering system, Heisenberg can adjust the angle of its wheels to navigate complex and unpredictable terrain more effectively, reducing the risk of getting stuck or damaging its wheels."
        },
        HUBBLE: {
            img_url: "/images/Rovers/rover_3.png",
            desc: "The Hubble rover is a fully autonomous robotic system designed to handle every aspect of its mission without direct human intervention. From complex manipulation tasks, such as operating its robotic arm to collect samples or interact with scientific instruments, to advanced navigation across challenging terrain, the rover relies entirely on its sophisticated onboard systems. Its autonomy allows it to analyze its surroundings, plan safe and efficient paths, avoid obstacles, and perform scientific experiments independently."
        },
        GALILEO: {
            img_url: "/images/Rovers/rover_4.png",
            desc: "Galileo comes as an enhanced iteration of our preceding 6-wheeled rovers, specifically designed to address the prevalent camber-related challenges encountered during traversal. Moreover, we have substantially augmented the ground clearance to facilitate superior navigation across obstacles. In pursuit of an expanded work-envelope, we have transitioned from linear actuators to worm gears for the precise manipulation of the shoulder and elbow joints, enabling a heightened range of motion. The implementation of worm gear technology has facilitated the utilization of friction gripping in the rover's gripper system. This advanced gripping mechanism employs 3D printed flexible fingers composed of thermoplastic polyurethane (TPU), ensuring enhanced dexterity and adaptability. Furthermore, the wire management within the rover has been significantly enhanced through the integration of newly developed easily detachable modular connectors, optimizing efficiency and facilitating streamlined maintenance."
        },
        FORESIGHT: {
            img_url: "/images/Rovers/rover_5.png",
            desc: "After a two-year break due to COVID-19, we returned to our institution to continue the Anveshak journey.Despite this challenges, we were determined to upgrade our previous rover. We upgraded our arm by using two linear actuators, demonstrating our resourcefulness and commitment to innovation despite the setbacks we faced."
        },
        DARKNIGHT: {
            img_url: "/images/Rovers/rover_6.png",
            desc: "Dark Knight, is a marked improvement over the previous iterations. The new design is our largest yet, and is significantly more robust. We placed an emphasis on modularity and stability. The rover has a wider base area and an arm with a larger workspace. The electronics are also modularized, allowing for faster debugging and reliability. In addition, the system architecture was optimized and faster algorithms were implemented in order to improve performance."
        },
        CAESAR: {
            img_url: "/images/Rovers/rover_7.png",
            desc: "Caesar is a 6 wheeled rocker bogie with custom made wheels and an amazing ground clearance of 40 cm. The new, lightweight manipulator holds an end effector with adaptive fingers, capable of wrapping around objects of all shapes and sizes. The state of the art electronic system makes sure that the rover is able to operate seamlessly and reliably. The new software core improves the autonomous capabilities and the ease of controlling the rover."
        },
        BADGER: {
            img_url: "/images/Rovers/rover_8.png",
            desc: "New rover design shifted to a 4 wheel design that saw the implementation of a steering mechanism and a bar differential to stabilize the chassis box. The manipulator was designed to be modular and the gripper was completely fastener free. We reached the 25th position in URC 2018, a steady improvement from URC 2017, while our innovative designs were highly appreciated by other teams & judges. From qualifying to participate in the European Rover Challenge(ERC) 2016 to actually finishing in the top 25 positions in University Rover Challenge(URC) 2018, we as a team have grown at a rapid pace & have learned & improved at each stage."
        },
        AURORA: {
            img_url: "/images/Rovers/rover_9.png",
            desc: "Our first rover featured a 6 wheel design with a modified rocker bogie suspension system. With custom manufactured aluminium wheels, this rover could easily navigate moderately hard to rocky terrain with ease. The manipulator was mounted on 2 separate points on the chassis to improve the stability of the rover and provide better weight distribution. In our debut attempt, we qualified for URC 2017, eventually finishing 29th out of 70+ teams from across the world."
        },
    }
    let name = params.Rover
    let pic = roverData[name].img_url
    let para = roverData[name].desc

    return (
        <>
        <MotionWrapper>
            <div className='fixed top-0 w-full h-screen -z-3'>
                <Image fill className="object-cover transition-opacity" src="/images/stars_2.svg" alt=""/>
            </div>
            
                <div className='relative bg-[#D9D9D9] z-0 h-[90vh] max-[700px]:h-[400px] max-[500px]:h-[300px] max-[400px]:h-[250px] max-[900px]:h-[500px] overflow-hidden'>
                    <Navbar />
                    <Image width={1680} height={673} className='w-full h-full max-[700px]:h-[400px] max-[900px]:h-[500px] max-[400px]:h-[250px] max-[500px]:h-[300px] absolute top-0 left-[50%] translate-x-[-50%] -z-[1] bg-[rgba(0,0,0,0.5)]' src={pic} alt="" />
                    <div className="absolute inset-0 bg-black opacity-40 z-0 pointer-events-none"></div>
                    <h1 className='absolute bottom-0 left-[50%] translate-x-[-50%] text-white font-[700] text-[120px] max-[660px]:text-[60px] max-[1000px]:text-[90px] ' >{name}</h1>
                </div>
                <div className='bg-slate-500 w-[100%] h-[10px]'></div>
                <p className='w-[100%]  mx-auto font-[500] text-[32px] text-justify max-[660px]:text-[15px] max-[1000px]:text-[20px] text-white bg-[#00000081] p-5'>{para}</p>
                <div className='bg-slate-500 w-[100%] h-[10px]'></div>
                </MotionWrapper>

        </>
    )
}

export default Rover
