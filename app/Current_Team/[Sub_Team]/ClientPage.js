"use client"


import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import CurrentTeam from '@/components/CurrentTeam'
import MotionWrapper from '../../../components/MotionWrapper'

const SubTeam = () => {
    let params = useParams();
    console.log(params.Sub_Team)
    return (
        <div>
            <MotionWrapper>
                <div className='fixed top-0 w-full h-screen -z-3'>
                    <Image fill className="object-cover transition-opacity" priority src="/images/stars.svg" alt="" />
                </div>
                {params.Sub_Team == "MECHANICAL" && <> <h1 className='font-[900] text-[60px] max-[700px]:text-[40px] text-[#C0C0C0] uppercase text-center mt-10'>MECH MODULE</h1>
                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>HEADS OF MODULE</h2>
                     <div className='flex max-[1400px]:flex-wrap gap-20 justify-center mt-15 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Heads/Aayush_Anuj_Chodhary.jpg" name="Aayush Chodhary" position="Head of Mechanical" />
                     </div>
                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>LEADS</h2>

                     <div className='flex max-[1700px]:flex-wrap gap-20 justify-center mt-20 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Swaraj_Manoj_Lonikar.jpg" name="Swaraj Lonikar" position="Mechanical Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Udit_Srivastava.jpg" name="Udit Srivastava" position="Chassis & Traversal Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Lavanya_Rajagopalan_Iyer.jpg" name="Lavanya" position="Manipulator Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Raaghava_Murthi.jpg" name="Raaghava" position="Manipulator & Traversal Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Ankit_Khushal_Kesrod.jpg" name="Ankit Kesrod" position="Chassis Lead" />
                     </div>

                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>TEAM MEMBERS</h2>
                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Shubhkarman_Singh_Sandhu.jpg" name="Shubhkarman Singh Sandhu " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Geddam_Sharon_Raj.jpg" name="Sharon Raj Geddam " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Donga_Dwij_Rajesh.jpg" name="Dwij Donga " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Shahid_Ibrahim_V_N.jpg" name="Shahid Ibrahim " position="Project Member" />
                    </div>
                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20'>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Niphade_Sarthak_Navnath.jpg" name="Sarthak Niphade" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Tharunvarma_R.JPG" name="Tharunvarma.R " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Lohitha_V.jpg" name="V. Lohitha" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Subbulakshmi_P.jpg" name="Subbulakshmi P" position="Project Member" />
                    </div>
                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20'>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Mech/Anany_Malela.jpeg" name="Ananya Malela " position="Project Member" />
                    </div></>}

                {decodeURIComponent(params.Sub_Team) == "ELEC&SOFT" && <><h1 className='font-[900] text-[60px] max-[700px]:text-[40px] text-[#C0C0C0] uppercase text-center mt-10'>ELECTRONICS AND SOFTWARE MODULE</h1>
                <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>HEADS OF MODULE</h2>
                     <div className='flex max-[1400px]:flex-wrap gap-20 justify-center mt-15 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Heads/Pranav.jpg" name="Pranav" position="Head of Electronics & Software" />
                     </div>

                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>LEADS</h2>

                     <div className='flex max-[1700px]:flex-wrap gap-20 justify-center mt-20 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Bhuvanesh_S.jpg" name="Bhuvanesh sundar" position="Electronics Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Pozhilan_Karthikeyan.jpg" name="Pozhilan Karthikeyan" position="Electronics Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Suthinthararaj_B.jpg" name="Suthinthararaj B" position="Electronics Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Soham_Ashish_Warde.jpeg" name="Soham Warde" position="Software Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Aditya_Girish.jpg" name="Aditya Girish" position="Software Lead" /> 
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Ashok_Kumar_Meena.jpg" name="Ashok Kumar Meena" position="Architecture Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Geeta_Priyanka.jpg" name="Geeta Priyanka" position="Communication Systems Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Ritvik_Tlr.jpeg" name="TL Ritvik" position="Drone Module Lead" />
                     </div>

                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>TEAM MEMBERS</h2>



                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Adeesh_Jain.jpg" name="Adeesh Jain" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Akhand_Veer_Garg.jpeg" name="Akhand Veer Garg" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Ananth_Raghav_Pai.jpg" name="Ananth Raghav Pai" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Apoorv_Shah.jpg" name="Apoorv Shah" position="Project Member" />
                    </div>
                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Bhatewara_Aditya_Rahul.jpeg" name="Aditya Bhatewara" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Harish_Saravanakumar.jpg" name="Harish" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Nipurn_Khetan.jpeg" name="Nipurn Khetan" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Nithin_K.jpg" name="K. Nithin" position="Project Member" />
                    </div>
                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20'>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Pavan_Naveen_M.jpg" name="M Pavan Naveen " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Prahlad_Seshadri.jpg" name="Prahlad Seshadri " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/E&S/Srivatsan_S.jpg" name="Srivatsan S" position="Project Member" />
                    </div></>}

                {params.Sub_Team == "ASTROBIO" && <> <h1 className='font-[900] text-[60px] max-[700px]:text-[40px] text-[#C0C0C0] uppercase text-center mt-10'>ASTROBIO MODULE</h1>
                <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>HEADS OF MODULE</h2>
                     <div className='flex max-[1400px]:flex-wrap gap-20 justify-center mt-15 '>
                        <CurrentTeam  img_url="/images/Team_Photos/Team_Heads/Sneha_Dharshini_P.jpg" name="Sneha Dharshini P" position="Head of Astrobiology" />
                     </div>
                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>LEADS</h2>

                     <div className='flex max-[1700px]:flex-wrap gap-20 justify-center mt-20 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Akade_Tejas_Deepak.jpg" name="Tejas Akade" position="AstroBio Lead" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Anamika_Anand.jpg" name="ANAMIKA ANAND" position="AstroBio Lead" />
                     </div>

                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>TEAM MEMBERS</h2>


                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20'>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Astro/Abishekapriyan_S.jpg" name="Abishekapriyan S" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Astro/Devesh_Bhargava.jpg" name="Devesh  Bhargava" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Astro/Eshwaranath.JPG" name="Eshwaranath " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Astro/Keerthana_Brijesh.jpg" name="Keerthana Brijesh " position="Project Member" />
                    </div>
                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20'>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Astro/Mudavath_Praveen_Kumar.jpg" name="Mudavath Praveen Kumar " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Astro/Samhita_Muthukumar.jpg" name="Samhita Muthukumar " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/Astro/Varsithaa_Shri_R.jpg" name="Varsithaa Shri R" position="Project Member" />
                    </div></>}


                {params.Sub_Team == "CPR" && <> <h1 className='font-[900] text-[60px] max-[700px]:text-[40px] text-[#C0C0C0] uppercase text-center mt-10'>CORPORATE & PUBLIC RELATION MODULE</h1>
                <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>HEADS OF MODULE</h2>
                     <div className='flex max-[1400px]:flex-wrap gap-20 justify-center mt-15 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Heads/Aayush_Anuj_Chodhary.jpg" name="Aayush Chodhary" position="Head of CPR" />
                     </div>
                     <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>LEADS</h2>
                     <div className='flex max-[1700px]:flex-wrap gap-20 justify-center mt-20 '>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Leads/Anamika_Anand.jpg" name="ANAMIKA ANAND" position="CPR Lead" />
                     </div>
                      <h2 className='font-[700] text-[40px] max-[700px]:text-[30px] mt-20 text-center text-[#DD6408]'>TEAM MEMBERS</h2>
                    <div className='flex max-[1400px]:flex-wrap gap-20 justify-center my-20'>
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/CPR/Naghul_Pranav_K_S.jpg" name="Naghul Pranav " position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/CPR/Ranjani_L.jpg" name="L Ranjani" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/CPR/Santhosh_Kumar_V.jpg" name="Santhosh Kumar" position="Project Member" />
                        <CurrentTeam img_url="/images/Team_Photos/Team_Members/CPR/Monica_Kannan.jpg" name="Monica Kannan" position="Project Member" />
                    </div></>}

            </MotionWrapper>


        </div>
    )
}

export default SubTeam
