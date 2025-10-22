"use client"
import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  let pathName = usePathname()
  let pg = pathName.split("/")[1]
  let buttonRef = useRef()
  let menuRef = useRef()
  const [show, setshow] = useState(false)
  const [ShowHam, setShowHam] = useState(false)
  const handleClick = () => {
    setshow(!show)
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)) {
        setshow(false)
        setShowHam(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [])
  const handleham = () => {
    setShowHam(!ShowHam)
  }

  return (
    <>
      <nav className='flex items-center'>

        <Link href="/Home">
          <Image className='min-[500px]:mt-[4.12px] min-[500px]:ml-[26.05px]' width={212.06} height={102.55} src="/images/Anveshak_logo.svg" alt="Logo" />
        </Link>
        {/* {!ShowHam ? (
          <Image
            onClick={handleham}
            className="hamburger w-10 cursor-pointer z-10"
            width={1920}
            height={1080}
            src="/images/Navbar/hamburger.svg"
            alt="hamburger"
          />
        ) : (
          <Image
            onClick={handleham}
            className="hamburger w-10 cursor-pointer z-10"
            width={1920}
            height={1080}
            src="/images/Navbar/Up.svg"
            alt="close"
          />
        )} */}



        <button ref={buttonRef} onClick={handleham} className=" min-[1500px]:hidden relative w-8 h-8 flex flex-col justify-between items-center right-5">
          {/* Top bar */}
          <span className={`h-[3px] w-8 bg-[#DD6408] rounded transition-all duration-300 ease-in-out ${ShowHam ? "rotate-45 translate-y-3" : ""}`}></span>

          {/* Middle bar */}
          <span className={`h-[3px] w-8 bg-[#DD6408] rounded transition-all duration-300 ease-in-out ${ShowHam ? "opacity-0" : ""}`}></span>

          {/* Bottom bar */}
          <span className={`h-[3px] w-8 bg-[#DD6408] rounded transition-all duration-300 ease-in-out ${ShowHam ? "-rotate-45 -translate-y-3" : ""}`}></span>
        </button>


        <div ref={menuRef} className={`nav_buttons max-[1500px]:overflow-hidden text-center items-center z-6 max-[1500px]:absolute max-[1500px]:bg-gray-800/50 max-[1500px]:backdrop-blur-sm max-[1500px]:top-[90px]  max-[1500px]:right-0 transition-all duration-500 ${ShowHam ? "max-[1500px]:max-h-[500px] max-[1500px]:opacity-100" : "max-[1500px]:max-h-0 max-[1500px]:opacity-0"}`}>
          <Link className={`${pg == "Home" || pg == "" ? "tab_hover" : ""} button max-[1500px]:w-[208px]`} href="/Home">HOME</Link>
          <div className='bg-white w-[90%] h-[0.5px] min-[1500px]:hidden '></div>
          <div ref={menuRef} className='flex flex-col relative'>
            <button className={`${pg == "Team_Verticals" || pg == "Current_Team" ? "tab_hover" : ""} button max-[1500px]:w-[208px]`} onClick={handleClick}>TEAM</button>
            <div className='text-center team flex flex-col'>
              <Link className={`button text-center bg-gray-800 min-[1500px]:bg-[#C0C0C0] transition-all duration-300 ease-in-out overflow-hidden  ${show ? "opacity-100 max-h-10 pointer-events-auto" : " opacity-0 max-h-0 pointer-events-none "} min-[1500px]:absolute  min-[1500px]:left-[50%] min-[1500px]:translate-x-[-50%] min-[1500px]:w-[225px]`} href="/Team_Verticals">TEAM VERTICALS</Link>
              <Link className={`button text-center bg-gray-800 min-[1500px]:bg-[#C0C0C0] transition-all duration-300 ease-in-out ${show ? "opacity-100 max-[1500px]:translate-y-0 min-[1500px]:translate-y-10 max-h-10 pointer-events-auto" : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"} min-[1500px]:absolute  min-[1500px]:left-[50%] min-[1500px]:translate-x-[-50%] min-[1500px]:w-[225px]`} href="/Current_Team">CURRENT TEAM</Link>
            </div>
          </div>
          <div className='bg-white w-[90%] h-[0.5px] min-[1500px]:hidden '></div>
          <Link className={`${pg == "Rovers" ? "tab_hover" : ""} button max-[1500px]:w-[208px]`} href="/Rovers">ROVERS</Link>
          <div className='bg-white w-[90%] h-[0.5px] min-[1500px]:hidden '></div>
          <Link className={`${pg == "Achievements" ? "tab_hover" : ""} button max-[1500px]:w-[208px]`} href="/Achievements">ACHIEVEMENTS</Link>
          <div className='bg-white w-[90%] h-[0.5px] min-[1500px]:hidden '></div>
          <Link className={`${pg == "Competitions" ? "tab_hover" : ""} button max-[1500px]:w-[208px]`} href="/Competitions">COMPETITIONS</Link>
          <div className='bg-white w-[90%] h-[0.5px] min-[1500px]:hidden '></div>
          <Link className={`${pg == "Media" ? "tab_hover" : ""} button max-[1500px]:w-[208px]`} href="/Media">MEDIA</Link>
          <div className='bg-white w-[90%] h-[0.5px] min-[1500px]:hidden '></div>
          <Link className={`${pg == "Sponsors" ? "tab_hover" : ""} button max-[1500px]:w-[208px]`} href="/Sponsors">SPONSORS</Link>
        </div>

      </nav>
    </>
  )
}
export default Navbar