import React, {useContext} from 'react'
import {FaReact, FaVuejs, FaCss3, FaSass, } from 'react-icons/fa'
import {SiNextdotjs, SiSupabase, SiFirebase, SiJavascript, SiTailwindcss, SiRedux, SiTypescript} from 'react-icons/si'
import {FiCheck} from 'react-icons/fi'
import {BsFillBootstrapFill} from 'react-icons/bs'
import AppContext from '../context/AppContext'

export default function Main() {
    const ctx = useContext(AppContext)

    return (
        <div className='flex flex-col items-center justify-center w-full h-full lg:px-28 px-4'>
            <div className='text-center'>
                <h3 className='text-xl'>
                    Привет, Я <span 
                        onClick={() => ctx.handleModal()}
                        className='text-yellow-500 underline font-semibold cursor-pointer'
                    >
                        Богдан Огнистый
                    </span> 👋
                </h3>
                <h2 className='text-4xl font-semibold'>
                    Front-end Developer
                </h2>
                <h4 className='text-lg mt-8'>
                    Я занимаюсь веб разработкой, каждый день тружусь чтобы стать лучше в этом. Мне очень нравится то, чем я занимаюсь
                </h4>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 mt-10 items-center justify-center'>
                <div className='bg-zinc-700 bg-opacity-40 shadow-md rounded-2xl p-4 h-[241px]'>
                    <h5 className='text-2xl mb-4 font-bold text-center'>В основном использую</h5>
                    <ul className='flex flex-col gap-3 text-3xl'>
                        <li className=' flex items-center gap-2 '>
                            <SiJavascript className='text-[#EBD13A]'/>
                            <span className='text-xl relative after:h-[38px] after:w-[1px] after:bg-white after:absolute after:right-[-5px] after:top-[-5px]'>
                                JavaScript
                            </span>
                            <ul className='flex flex-col gap-2 pl-4'>
                                <li className='relative flex items-center gap-2 before:w-4 before:h-[1px] before:bg-white before:absolute before:left-[-20px]'>
                                    <FaReact className='text-[#5ED3F3]'/> 
                                    <span className='text-xl'>
                                        React js
                                    </span> 
                                    <ul>
                                        <li className='flex items-center gap-2'>
                                            <SiRedux className='text-[#6F45B1]'/> 
                                            <span className='text-xl'>
                                                Redux
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                                <li className='relative flex items-center gap-2 before:w-4 before:h-[1px] before:bg-white before:absolute before:left-[-20px]'>
                                    <SiNextdotjs className='text-[#1C252C]'/> 
                                    <span className='text-xl'>
                                        Next js
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <hr />
                        <li className='flex items-center gap-2'>
                            <FaCss3 className='text-[#2760E5]'/>
                            <span className='text-xl relative after:h-[38px] after:w-[1px] after:bg-white after:absolute after:right-[-5px] after:top-[-5px]'>
                                CSS3
                            </span>
                            <ul className='flex flex-col gap-2 pl-4'>
                                <li className='relative flex items-center gap-2 before:w-4 before:h-[1px] before:bg-white before:absolute before:left-[-20px]'>
                                    <SiTailwindcss className='text-[#35B3EB]'/> 
                                    <span className='text-xl'>
                                        Tailwind
                                    </span> 
                                </li>
                                <li className='relative flex items-center gap-2 before:w-4 before:h-[1px] before:bg-white before:absolute before:left-[-20px]'>
                                    <FaSass className='text-[#C36291]'/> 
                                    <span className='text-xl'>
                                        Sass
                                    </span> 
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='bg-zinc-700 bg-opacity-40 shadow-md rounded-2xl p-4 h-[241px] flex flex-col '>
                        <h5 className='text-2xl mb-4 font-bold text-center'>
                            Приходилось работать с
                        </h5>
                        <div className='flex items-center justify-center flex-col gap-4'>  
                            <ul className='flex flex-col gap-3 text-3xl'>
                                <li className='flex items-center gap-2'>
                                    <FaVuejs className='text-[#3FB27F]'/>
                                    <span className='text-xl'>Vue js</span>
                                    <ul className='text-lg'>
                                        <li className='flex items-center gap-1'>
                                            <FiCheck/> 
                                            <span>
                                                Vuex
                                            </span> 
                                        </li>
                                        <li className='flex items-center gap-1'>
                                            <FiCheck/>
                                            <span>
                                                Vue router
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <hr className='h-[1px] w-full mt-2'/>
                            <ul className='flex gap-3 text-3xl'>
                                <li className='flex items-center gap-2'>
                                    <SiSupabase className='text-[#3BC389]'/>
                                    <span className='text-xl'>
                                        Supabase
                                    </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <SiFirebase className='text-[#F29D0D]'/>
                                    <span className='text-xl'>
                                        Firebase
                                    </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <BsFillBootstrapFill className='text-[#6A419D]'/>
                                    <span className='text-xl'>
                                        Bootstrap
                                    </span>
                                </li>
                            </ul>
                        </div>   
                    </div>
                </div>
                
            </div>
        </div>
    )
}
