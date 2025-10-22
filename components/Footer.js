import React from 'react'
import "./Footer.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="left_footer">
                    <div className="contact">
                        <h2>CONTACT US</h2>
                        <ul>
                            <li>Email : <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=teamanveshak@smail.iitm.ac.in"><span>teamanveshak@smail.iitm.ac.in</span></a></li>
                            <li>Faculty : <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=anujt@iitm.ac.in"><span>anujt@iitm.ac.in</span></a></li>
                            <li>Phone : <span>+91 99302 28078</span></li>
                        </ul>
                    </div>
                    <div className="address">
                        <h2>ADDRESS</h2>
                        <span>Center for Innovation, Sudha and Sankar Innovation Hub, IIT Madras, Chennai, Tamilnadu - 600036</span>
                    </div>
                </div>

                <div className="middle_footer">
                    <Link href="/Home"><Image className="logo cursor-pointer" width={290} height={140} src="/images/Anveshak_logo.svg" alt="" /></Link>
                    <div className="social">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/anveshak_iitm"><Image width={63} height={50} src="/images/Footer/insta.png" alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/anveshak-iitm/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BCmoFZ3ZSQBGkEWomEP6zQg%3D%3D"><Image width={63} height={50} src="/images/Footer/linked_in.png" alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TeamAnveshak"><Image width={77} height={60} src="/images/Footer/youtube.png" alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=teamanveshak@smail.iitm.ac.in"><Image width={74}  height={58} src="/images/Footer/gmail.webp" alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/anveshak.iitm"><Image width={76} height={60} src="/images/Footer/facebook.webp" alt="" /></a>
                    </div>

                </div>

                <div className="right_footer">
                    <h2>QUICK LINKS</h2>
                    <ul className='transition-all duration-[0.5s]'>
                        <li className='relative hover:text-center'><Link href="#About_us">ABOUT US</Link></li>
                        <li className='relative hover:text-center'><Link href="/Current_Team">TEAM</Link></li>
                        <li className='relative hover:text-center'><Link href="/Rovers">ROVERS</Link></li>
                        <li className='relative hover:text-center'><Link href="/Media">MEDIA</Link></li>
                        <li className='relative hover:text-center'><Link href="/Support_Us">SUPPORT US</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
