// import React from 'react'
// import Navbar from '@/components/Navbar'
// import Support_btn from '@/components/Support_btn'
// import Achievement_card from '@/components/Achievement_card'
// import Image from 'next/image'
// import MotionWrapper from '../../components/MotionWrapper'

// const Achievements = () => {
//     return (
//         <>
//         <MotionWrapper>
//             <div className=''>
//                 <Navbar />
//                 <Support_btn />
//                 <Image width={1636} height={920} priority className='fixed top-0 w-[100%] -z-1' src="/images/stars.svg" alt="" />
//                 <div className='flex justify-center bg-[#D9D9D9] p-5 mt-40'>
//                     <Image width={925} height={68} src="/images/Achievements/Our_journey.svg" alt="" />
//                 </div>


//                 <div className='mt-40 absolute left-[50%] translate-x-[-50%]'>
//                     <Image width={184} height={720} className='' src="/images/Achievements/path_2.svg" alt="" />
//                     <Image width={195} height={4580} className='' src="/images/Achievements/path.svg" alt="" />
//                     <div className=' absolute top-1 -left-7 w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[8%] -right-5  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[18%] -left-5  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[27%] -right-5  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[37.5%] -left-7  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[47%] -right-5  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[57%] -left-7  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[69%] -right-5  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>


//                     <div className=' absolute top-[81%] -left-3  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>

//                     <div className=' absolute top-[91.5%] -right-9  w-[80px] h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'><div className='w-[50px] h-[50px] rounded-full bg-[#DD6408]'></div></div>


//                 </div>


//                 <div className='w-full h-[5600px] relative'>


//                     <div className='flex flex-col justify-between h-[4500px] relative left-[250px] top-[125px] w-fit'>

//                         <div>
//                             <Achievement_card rank="1st" comp="CAC 25" desc="Team Anveshak emerged as the champions of CAC’25, winning the Caterpillar Autonomy Challenge held at IIT Madras." />
//                         </div>
//                         <div className='relative bottom-20'>
//                             <Achievement_card rank="4th" comp="IROC 24" desc="Defying all the odds Team Anveshak emerged fourth in IRoC'24 , a competition hosted by ISRO." />
//                         </div>
//                         <div className=' relative bottom-30'>
//                             <Achievement_card rank="2nd" comp="IRC 2024" desc="Defying all the odds Team Anveshak emerged first runner up in IRC'24 and champions of Autonomous Mission." />
//                         </div>
//                         <div className='relative bottom-30'>
//                             <Achievement_card rank="12th" comp="Mars Society South Asia (MSSA) Hackathon" desc="Visualised mars in a different perspective, focusing on human survival and analyse the possibility of colonisation." />
//                         </div>
//                         <div className='relative bottom-10'>
//                             <Achievement_card rank="" comp="International Rover Design Challenge" desc="Designed a rover to explore Martian lava tubes which are expected to have high possibility of existence of life analogous to lava tubes on Earth." />
//                         </div>

//                     </div>

//                     <div className='flex flex-col justify-between  h-[4500px] absolute right-[240px] top-[540px] '>

//                         <div>
//                             <Achievement_card rank="8th" comp="IRC 2025" desc="Anveshak secured 8th place globally at IRC’25, proving their mettle at the prestigious International Rover Challenge" />
//                         </div>
//                         <div className='relative'>
//                             <Achievement_card rank="6th" comp="ARC 2024" desc="Rover with four Steerable wheels and a manipulator with custom made cycloidal gearbox was tested." />
//                         </div>
//                         <div className='relative'>
//                             <Achievement_card rank="12th" comp="URC 2019" desc="We designed the next generation Mars rover that will one day work along with the astronauts to explore the red planet. Ended up as one of the top 12 teams in the world out of more than 84+ teams." />
//                         </div>
//                         <div className='relative'>
//                             <Achievement_card rank="" comp="Indian Rover Design Challenge 2020(IRDC)" desc="We designed the next generation Mars rover which shall be fully equipped and mission ready for future astronaut-assistive exploration operations on Mars." />
//                         </div>
//                         <div className='relative top-25'>
//                             <Achievement_card rank="12th" comp="European Rover Challenge(ERC)" desc="Participating in ERC, helped us to work exclusively on the software module and test it on an actual rover virtually." />
//                         </div>

//                     </div>

//                 </div>

//             </div>
//             </MotionWrapper>

//         </>
//     )
// }

// export default Achievements





import React from "react";
import Navbar from "@/components/Navbar";
import Support_btn from "@/components/Support_btn";
import Achievement_card from "@/components/Achievement_card";
import Image from "next/image";
import MotionWrapper from "../../components/MotionWrapper";

const achievements = [
  { side: "left", rank: "1st", comp: "CAC 25", desc: "Team Anveshak emerged as the champions of CAC’25, winning the Caterpillar Autonomy Challenge held at IIT Madras." },
  { side: "right", rank: "8th", comp: "IRC 2025", desc: "Anveshak secured 8th place globally at IRC’25, proving their mettle at the prestigious International Rover Challenge" },
  { side: "left", rank: "4th", comp: "IROC 24", desc: "Defying all the odds Team Anveshak emerged fourth in IRoC'24 , a competition hosted by ISRO." },
  { side: "right", rank: "6th", comp: "ARC 2024", desc: "Rover with four Steerable wheels and a manipulator with custom made cycloidal gearbox was tested." },
  { side: "left", rank: "2nd", comp: "IRC 2024", desc: "Defying all the odds Team Anveshak emerged first runner up in IRC'24 and champions of Autonomous Mission." },
  { side: "right", rank: "12th", comp: "URC 2019", desc: "We designed the next generation Mars rover... Ended up as one of the top 12 teams in the world out of more than 84+ teams." },
  { side: "left", rank: "12th", comp: "MSSA Hackathon", desc: "Visualised mars in a different perspective, focusing on human survival and analyse the possibility of colonisation." },
  { side: "right", rank: "", comp: "IRDC 2020", desc: "We designed the next generation Mars rover which shall be fully equipped and mission ready for astronaut-assistive exploration operations." },
  { side: "left", rank: "", comp: "International Rover Design Challenge", desc: "Designed a rover to explore Martian lava tubes which are expected to have high possibility of existence of life analogous to lava tubes on Earth." },
  { side: "right", rank: "12th", comp: "ERC", desc: "Participating in ERC helped us to work exclusively on the software module and test it virtually." },
];

const Achievements = () => {
  return (
    <MotionWrapper>
      <div className="relative">
        <Navbar />
        <Support_btn />

        {/* Background stars */}
        {/* <Image width={1636} height={920} priority className="fixed top-0 w-full -z-10" src="/images/stars.svg" alt=""/> */}
        <div className='fixed top-0 w-full h-screen -z-3'>
          <Image fill className="object-cover transition-opacity" src="/images/stars.svg" alt="" />
        </div>

        {/* Header */}
        <div className="flex justify-center bg-[#D9D9D9] p-5 mt-40">
          <Image
            width={925}
            height={68}
            src="/images/Achievements/Our_journey.svg"
            alt=""
          />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center my-20 px-4">
          {/* Vertical line */}
          <div className="absolute left-1/2 max-[900px]:hidden top-0 bottom-0 w-1 bg-gray-400 -translate-x-1/2" />

          <div className="space-y-32 w-full max-w-5xl">
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`flex flex-col min-[900px]:flex-row items-center ${a.side === "left"
                    ? "min-[900px]:justify-start min-[900px]:text-right"
                    : "min-[900px]:justify-end min-[900px]:text-left"
                  }`}
              >
                {a.side === "left" && (
                  <div className="hidden min-[900px]:block w-1/2 pr-8">
                    <div className="flex justify-end">
                      <Achievement_card {...a} />
                    </div>
                  </div>
                )}

                {/* Circle marker */}
                <div className="relative max-[900px]:hidden z-10 flex items-center justify-center w-10 h-10 bg-[#D9D9D9] rounded-full border-4 border-[#DD6408] mx-4" />

                {a.side === "right" && (
                  <div className="hidden min-[900px]:block w-1/2 pl-8">
                    <div className="flex">
                      <Achievement_card {...a} />
                    </div>
                  </div>
                )}

                {/* Mobile: always full width */}
                <div className="block min-[900px]:hidden w-full my-4">
                  <Achievement_card {...a} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Achievements;







