import React from 'react'
import {FiCheck} from 'react-icons/fi'
import {FaVuejs, FaNodeJs} from 'react-icons/fa'
import {SiTypescript, SiSupabase, SiFirebase} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'

export default function NonCoreMethods() {
    return (
        <div className='bg-zinc-700 bg-opacity-40 shadow-md rounded-2xl p-4 sm:h-[241px] flex flex-col '>
                        <h5 className='sm:text-2xl text-lg mb-4 font-bold text-center'>
                            Приходилось работать с
                        </h5>
                        <div className='flex items-center justify-center flex-col gap-4'>  
                            <ul className='flex flex-col sm:flex-row items-center justify-center gap-3 text-2xl'>
                                <li className='flex items-center gap-2'>
                                    <FaVuejs className='text-[#3FB27F]'/>
                                    <span className='text-lg'>Vue js</span>
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
                                <li  className='flex items-center gap-2'>
                                    <FaNodeJs className='text-[#84BB00]'/>
                                    <span className='text-lg'>Node js</span>
                                </li>
                                <li  className='flex items-center gap-2'>
                                    <SiTypescript className='text-[#0174C1]'/>
                                    <span className='text-lg'>TypeScript</span>
                                </li>
                            </ul>
                            <hr className='h-[1px] w-full mt-2'/>
                            <ul className='flex flex-col sm:flex-row items-center justify-center gap-3 text-2xl'>
                                <li className='flex items-center gap-2'>
                                    <SiSupabase className='text-[#3BC389]'/>
                                    <span className='text-lg'>
                                        Supabase
                                    </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <SiFirebase className='text-[#F29D0D]'/>
                                    <span className='text-lg'>
                                        Firebase
                                    </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <BsFillBootstrapFill className='text-[#6A419D]'/>
                                    <span className='text-lg'>
                                        Bootstrap
                                    </span>
                                </li>
                            </ul>
                        </div>   
                    </div>
    )
}
