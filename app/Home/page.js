import React from 'react'
import "./page.css"
import Navbar from '@/components/Navbar'
import Support_btn from '@/components/Support_btn'
import Image from 'next/image'
import MotionWrapper from '@/components/MotionWrapper'
import ScrollMotion from '@/components/ScrollMotion'
import LogoMotion from '@/components/LogoMotion'
import FloatingParticles from '@/components/FloatingParticles'

const Home = () => {
    return (
        <>
            <MotionWrapper>
                    <div className="upper_page relative">
                        <div className='absolute h-[110vh] w-full -z-2 
                        [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] 
                        [mask-repeat:no-repeat] 
                        [mask-size:100%_100%]'>
                            <Image className='object-cover transition-opacity
                                       [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] 
                                       [mask-repeat:no-repeat] 
                                       [mask-size:100%_100%]' priority fill quality={100} src="/images/upper_page_bg.svg" alt="" />
                        </div>

                        <div className="absolute inset-0 hidden min-[500px]:block pointer-events-none z-10">
                            <FloatingParticles />
                        </div>
                        <div className='object-cover transition-opacity
                                       [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] 
                                       [mask-repeat:no-repeat] 
                                       [mask-size:100%_100%] Image_Cover absolute top-0 left-0 w-full h-[110vh] bg-black opacity-30 -z-1'></div>


                        <Navbar />

                        <Support_btn />
                        <LogoMotion>
                            <div className="team_anveshak max-[1100px]:-translate-y-12 max-[550px]:-translate-y-[30vh] ">

                                <span className=''><svg className='max-[1100px]:w-[500px] max-[1100px]:h-[200px] max-[550px]:w-[300px] max-[550px]:h-[150px]' width="1000" height="400" viewBox="0 0 674 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_7_43)">
                                        <path
                                            d="M161.47 21.19L161.91 0.729999H226.48L226.81 21.19H217.68L215.7 6.89H203.6C203.526 11.4367 203.453 16.0567 203.38 20.75C203.38 25.37 203.38 30.0633 203.38 34.83V38.79C203.38 43.3367 203.38 47.8833 203.38 52.43C203.453 56.9767 203.526 61.5233 203.6 66.07L213.06 67.06V73H175.33V67.06L184.68 66.07C184.826 61.5967 184.9 57.0867 184.9 52.54C184.9 47.9933 184.9 43.4467 184.9 38.9V34.83C184.9 30.21 184.9 25.59 184.9 20.97C184.9 16.2767 184.826 11.5833 184.68 6.89H172.69L170.6 21.19H161.47ZM238.116 6.67V0.729999H294.216L294.986 19.65H285.856L283.656 6.89H265.286C265.213 11.07 265.14 15.2867 265.066 19.54C265.066 23.7933 265.066 28.0833 265.066 32.41H276.946L278.266 23.83H284.646V47.48H278.266L276.946 38.9H265.066C265.066 43.96 265.066 48.7633 265.066 53.31C265.14 57.8567 265.213 62.3667 265.286 66.84H285.856L288.056 54.08H297.186L296.416 73H238.116V67.06L246.366 66.18C246.513 61.7067 246.586 57.1967 246.586 52.65C246.586 48.1033 246.586 43.52 246.586 38.9V34.83C246.586 30.2833 246.586 25.7367 246.586 21.19C246.586 16.57 246.513 12.0233 246.366 7.55L238.116 6.67ZM337.306 17.56L328.176 45.61H346.216L337.306 17.56ZM306.396 73V67.06L315.306 65.74L337.636 0.619994H348.966L371.516 66.51L378.226 67.28V73H344.236V67.28L352.706 66.18L348.196 51.99H326.086L321.686 65.74L330.046 67.06V73H306.396ZM386.793 73V67.06L397.463 65.74V7.76999L387.783 6.67V0.729999H416.823L434.753 49.13L451.583 0.729999H479.413V6.67L471.603 7.55C471.529 12.0233 471.456 16.57 471.383 21.19C471.383 25.7367 471.383 30.2833 471.383 34.83V38.9C471.383 43.4467 471.383 47.9933 471.383 52.54C471.456 57.0867 471.529 61.6333 471.603 66.18L479.743 67.06V73H444.653V67.06L452.683 66.07C452.829 61.5967 452.866 57.2333 452.793 52.98C452.793 48.7267 452.829 44.8033 452.903 41.21L453.123 16.9L433.543 73H425.073L404.063 16.79L404.613 38.79V65.63L413.633 67.06V73H386.793Z"
                                            fill="#DD6408" />
                                        <path
                                            d="M18.1348 193L47.2348 112.6H50.4348L21.3348 193H18.1348ZM4.13477 193L33.2348 112.6H36.3348L7.33477 193H4.13477ZM11.1348 193L40.1348 112.6H43.4348L14.3348 193H11.1348ZM76.7348 193L50.6348 120.9L52.2348 116.4L79.9348 193H76.7348ZM69.7348 193L47.2348 130.7L48.7348 126.1L72.9348 193H69.7348ZM62.7348 193L43.7348 140.4L45.3348 135.9L65.9348 193H62.7348ZM34.4348 166.4L35.5348 163.4H48.7348L49.8348 166.4H34.4348ZM32.0348 173.1L33.1348 170.1H51.1348L52.2348 173.1H32.0348ZM29.6348 179.7L30.7348 176.7H53.5348L54.6348 179.7H29.6348ZM163.52 193V112.6H166.52V193H163.52ZM150.32 193V112.6H153.32V193H150.32ZM156.92 193V112.6H159.92V193H156.92ZM110.12 193V112.6H113.12V193H110.12ZM96.9199 193V112.6H99.9199V193H96.9199ZM103.52 193V112.6H106.52V193H103.52ZM146.72 165.3L116.72 122.2V116.9L146.72 160V165.3ZM146.72 176.9L116.72 133.8V128.5L146.72 171.6V176.9ZM146.72 188.5L116.72 145.4V140.1L146.72 183.2V188.5ZM223.633 193L196.533 112.6H199.733L226.833 193H223.633ZM209.633 193L182.533 112.6H185.733L212.833 193H209.633ZM216.633 193L189.533 112.6H192.733L219.833 193H216.633ZM225.533 177.9L223.933 173L244.133 112.6H247.333L225.533 177.9ZM222.033 167.4L220.433 162.7L237.133 112.6H240.333L222.033 167.4ZM229.033 188.1L227.433 183.5L251.133 112.6H254.333L229.033 188.1ZM283.538 193V112.6H286.538V193H283.538ZM270.338 193V112.6H273.338V193H270.338ZM276.938 193V112.6H279.938V193H276.938ZM290.138 115.6V112.6H330.038V115.6H290.138ZM290.138 122.2V119.2H330.038V122.2H290.138ZM290.138 128.8V125.8H330.038V128.8H290.138ZM290.138 147.7V144.7H324.338V147.7H290.138ZM290.138 154.3V151.3H324.338V154.3H290.138ZM290.138 160.9V157.9H324.338V160.9H290.138ZM290.138 179.8V176.8H330.038V179.8H290.138ZM290.138 186.4V183.4H330.038V186.4H290.138ZM290.138 193V190H330.038V193H290.138ZM375.714 181.3C370.98 181.3 367.08 180.4 364.014 178.6C360.947 176.733 359.28 174.267 359.014 171.2L361.914 170.4C361.914 172.667 363.18 174.567 365.714 176.1C368.314 177.567 371.647 178.3 375.714 178.3C379.914 178.3 383.314 177.533 385.914 176C388.58 174.467 389.914 172.5 389.914 170.1C389.914 167.833 388.814 166 386.614 164.6C384.414 163.2 381.414 161.967 377.614 160.9L371.414 159.1C363.147 156.7 356.914 153.667 352.714 150C348.514 146.333 346.414 141.3 346.414 134.9C346.414 130.3 347.68 126.233 350.214 122.7C352.814 119.1 356.314 116.267 360.714 114.2C365.18 112.133 370.214 111.1 375.814 111.1C380.88 111.1 385.447 111.933 389.514 113.6C393.647 115.2 397.047 117.5 399.714 120.5C402.447 123.5 404.18 127 404.914 131L402.014 131.8C401.414 128.267 399.914 125.167 397.514 122.5C395.114 119.833 392.047 117.767 388.314 116.3C384.58 114.833 380.414 114.1 375.814 114.1C370.747 114.1 366.214 115.033 362.214 116.9C358.28 118.7 355.147 121.167 352.814 124.3C350.547 127.433 349.414 131.033 349.414 135.1C349.414 140.567 351.314 144.967 355.114 148.3C358.98 151.567 364.68 154.233 372.214 156.3L378.414 158C383.014 159.267 386.58 160.8 389.114 162.6C391.647 164.4 392.914 166.833 392.914 169.9C392.914 173.3 391.347 176.067 388.214 178.2C385.08 180.267 380.914 181.3 375.714 181.3ZM375.714 187.9C369.447 187.9 364.18 186.533 359.914 183.8C355.714 181 353.247 177.367 352.514 172.9L355.514 172.1C356.047 175.967 358.114 179.067 361.714 181.4C365.38 183.733 370.047 184.9 375.714 184.9C379.847 184.9 383.48 184.267 386.614 183C389.747 181.733 392.18 179.967 393.914 177.7C395.647 175.433 396.514 172.833 396.514 169.9C396.514 165.833 394.98 162.633 391.914 160.3C388.847 157.9 384.614 155.967 379.214 154.5L373.114 152.8C366.647 151 361.68 148.733 358.214 146C354.747 143.267 353.014 139.633 353.014 135.1C353.014 131.7 353.98 128.7 355.914 126.1C357.914 123.5 360.647 121.467 364.114 120C367.58 118.467 371.48 117.7 375.814 117.7C379.88 117.7 383.514 118.333 386.714 119.6C389.98 120.8 392.647 122.533 394.714 124.8C396.78 127.067 398.047 129.7 398.514 132.7L395.514 133.5C395.047 129.633 392.98 126.533 389.314 124.2C385.714 121.867 381.214 120.7 375.814 120.7C372.014 120.7 368.614 121.333 365.614 122.6C362.614 123.8 360.247 125.5 358.514 127.7C356.847 129.833 356.014 132.3 356.014 135.1C356.014 138.9 357.514 141.9 360.514 144.1C363.58 146.3 368.014 148.233 373.814 149.9L379.814 151.6C386.014 153.333 390.847 155.633 394.314 158.5C397.78 161.3 399.514 165.1 399.514 169.9C399.514 173.433 398.514 176.567 396.514 179.3C394.514 181.967 391.714 184.067 388.114 185.6C384.58 187.133 380.447 187.9 375.714 187.9ZM375.714 194.5C370.514 194.5 365.814 193.7 361.614 192.1C357.48 190.433 354.047 188.133 351.314 185.2C348.647 182.2 346.914 178.667 346.114 174.6L349.014 173.8C349.68 177.4 351.18 180.533 353.514 183.2C355.914 185.8 359.014 187.833 362.814 189.3C366.614 190.767 370.914 191.5 375.714 191.5C381.18 191.5 385.947 190.6 390.014 188.8C394.147 186.933 397.347 184.4 399.614 181.2C401.947 177.933 403.114 174.167 403.114 169.9C403.114 164.233 401.147 159.7 397.214 156.3C393.28 152.9 387.747 150.167 380.614 148.1L374.714 146.4C369.847 145 366.114 143.467 363.514 141.8C360.914 140.133 359.614 137.9 359.614 135.1C359.614 131.833 361.147 129.233 364.214 127.3C367.28 125.3 371.147 124.3 375.814 124.3C380.347 124.3 384.08 125.233 387.014 127.1C389.947 128.967 391.614 131.4 392.014 134.4L389.114 135.2C388.98 132.867 387.68 130.967 385.214 129.5C382.814 128.033 379.68 127.3 375.814 127.3C372.147 127.3 369.014 128 366.414 129.4C363.88 130.8 362.614 132.633 362.614 134.9C362.614 136.967 363.78 138.633 366.114 139.9C368.514 141.167 371.647 142.367 375.514 143.5L381.214 145.2C389.28 147.6 395.447 150.733 399.714 154.6C403.98 158.4 406.114 163.567 406.114 170.1C406.114 174.833 404.814 179.067 402.214 182.8C399.68 186.467 396.114 189.333 391.514 191.4C386.98 193.467 381.714 194.5 375.714 194.5ZM437.229 193V112.6H440.229V193H437.229ZM424.029 193V112.6H427.029V193H424.029ZM430.629 193V112.6H433.629V193H430.629ZM489.129 193V112.6H492.129V193H489.129ZM475.929 193V112.6H478.929V193H475.929ZM482.529 193V112.6H485.529V193H482.529ZM443.829 147.7V144.7H472.329V147.7H443.829ZM443.829 154.3V151.3H472.329V154.3H443.829ZM443.829 160.9V157.9H472.329V160.9H443.829ZM523.154 193L552.254 112.6H555.454L526.354 193H523.154ZM509.154 193L538.254 112.6H541.354L512.354 193H509.154ZM516.154 193L545.154 112.6H548.454L519.354 193H516.154ZM581.754 193L555.654 120.9L557.254 116.4L584.954 193H581.754ZM574.754 193L552.254 130.7L553.754 126.1L577.954 193H574.754ZM567.754 193L548.754 140.4L550.354 135.9L570.954 193H567.754ZM539.454 166.4L540.554 163.4H553.754L554.854 166.4H539.454ZM537.054 173.1L538.154 170.1H556.154L557.254 173.1H537.054ZM534.654 179.7L535.754 176.7H558.554L559.654 179.7H534.654ZM632.839 139.4L630.939 136.9L648.539 112.6H652.239L632.839 139.4ZM637.039 144.8L635.139 142.3L656.739 112.6H660.439L637.039 144.8ZM641.239 150.2L639.339 147.7L664.939 112.6H668.639L641.239 150.2ZM615.139 193V112.6H618.139V193H615.139ZM601.939 193V112.6H604.939V193H601.939ZM608.539 193V112.6H611.539V193H608.539ZM665.839 193L626.839 142.5L628.739 140L669.639 193H665.839ZM657.539 193L622.839 148.1L624.739 145.5L661.339 193H657.539ZM649.139 193L618.839 153.7L620.639 151.2L652.939 193H649.139Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_7_43" x="0.134766" y="0.619995" width="673.505" height="201.88"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_43" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_43" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                </span>


                                <span className='w-[80vw] animate-logo-glow'>#EXPLORE THE UNEXPLORED</span>
                            </div>
                        </LogoMotion>
                    </div>



                <div className='fixed top-0 w-full h-screen -z-3'>
                    <Image fill className="object-cover transition-opacity" priority src="/images/stars.svg" alt="" />
                </div>




                <ScrollMotion>
                    <div className="before_about_us">
                        <div className="text">
                            <span>45+</span>
                            <span> MEMBERS</span>
                        </div>

                        <div className="seperator"></div>
                        <div className="text">
                            <span>12 </span>
                            <span>DISCIPLINES</span>
                        </div>

                        <div className="seperator"></div>
                        <div className="text">
                            <span>9</span>
                            <span>ROVERS</span>
                        </div>

                    </div>
                </ScrollMotion>




                <ScrollMotion>
                    <div id="About_us" className="about_us_container">
                        <div className="about_us">
                            <span>ABOUT US</span>
                            <span>Team Anveshak is a dedicated group of 65+ undergraduate students from the Indian Institute of
                                Technology Madras (IIT Madras) who are passionate about robotics and committed to pushing the boundaries
                                of technological innovation. Since our inception in early 2016, we have spent countless days and nights
                                perfecting our craft. </span>
                            <span>With a strong focus on creating cost-effective solutions, the team actively participates in
                                international competitions such as the University Rover Challenge (URC), where they showcase their
                                expertise in designing and operating autonomous rovers. Beyond competitions, Team Anveshak aims to make
                                a lasting impact by developing robotic systems for human assistance, disaster rescue operations, and
                                exploration purposes. Team Anveshak deploys interdisciplinary approaches to redefine the possibilities
                                of robotics and contribute to a better future.</span>
                        </div>
                    </div>
                </ScrollMotion>

                <ScrollMotion>
                    <div className="IIT_M_container">
                        <div className="IIT_M_block">
                            <div className="iit_heading"><span>IIT</span> <span>MADRAS</span></div>
                            <div className="first_block">
                                <span>Indian Institute of Technology Madras (IIT Madras) is one of India’s top engineering institutions,
                                    It has been ranked under NIRF as #1 for six consecutive years (2019 - 2024) as the best Engineering
                                    Institution in the country under NIRF by MHRD, Government of India. Founded in 1959, the institute
                                    is a hub for innovation, research, and entrepreneurship. With over 100+ cutting-edge labs, a
                                    thriving startup ecosystem, and the prestigious Centre for Innovation (CFI), IIT Madras fosters a
                                    culture where students turn bold ideas into real-world solutions</span>
                                <Image width={456} height={285} className='w-auto h-auto' src="/images/IIT_main_gate.jpg" alt="" />
                            </div>
                            <div className="second_block">
                                <Image width={323} height={323} src="/images/IIT_LOGO.png" alt="" />
                                <span>At IIT Madras, academic rigor goes hand in hand with a vibrant campus life, where students engage
                                    in a multitude of extracurricular activities, clubs, and events. Research at IIT Madras spans a wide
                                    spectrum of fields, with faculty and students collaborating on ground-breaking projects, pushing the
                                    boundaries of knowledge and contributing to societal advancements. and a vibrant student community,
                                    IIT Madras environment for innovation, creativity, and holistic growth. With 140+ CSR partners and
                                    CSR projects worth Rs. 200+ crores in the past few years, the Institute has been pioneering
                                    technology-driven advancement. <a className='cursor-pointer hover:underline' target="_blank" href="https://www.iitm.ac.in/">more</a></span>

                            </div>
                        </div>
                    </div>
                </ScrollMotion>




                <ScrollMotion>
                    <div className="achievements_container mb-100">
                        <h2>RECENT ACHIEVEMENTS</h2>
                        <div className="card_container flex-wrap">
                            <div className="card">
                                <span className="rank">1st</span>
                                <span className="comp">CAC&#39;25</span>
                                <p className="para">TEAM ANVESHAK EMERGED AS THE CHAMPIONS OF CAC&#39;25, WINNING THE CATERPILLAR AUTONOMY
                                    CHALLENGE HELD AT IIT MADRAS</p>
                            </div>
                            <div className="card">
                                <span className="rank">2nd</span>
                                <span className="comp">IRC&#39;24</span>
                                <p className="para">TEAM ANVESHAK EMERGED FIRST RUNNER UP IN IRC&#39;24 AND CHAMPIONS OF AUTONOMOUS MISSION.</p>
                            </div>
                            <div className="card">
                                <span className="rank">4th</span>
                                <span className="comp">IROC&#39;24</span>
                                <p className="para">TEAM ANVESHAK EMERGED FOURTH IN IROC&#39;24 , A COMPETITION HOSTED BY ISRO.</p>
                            </div>
                            <div className="card">
                                <span className="rank">6th</span>
                                <span className="comp">ARC&#39;24</span>
                                <p className="para">ROVER WITH FOUR STEERABLE WHEELS AND A MANIPULATOR WITH CUSTOM MADE CYCLOIDAL GEARBOX
                                    WAS TESTED.</p>
                            </div>
                        </div>
                    </div>
                </ScrollMotion>

            </MotionWrapper>
        </>
    )
}

export default Home
