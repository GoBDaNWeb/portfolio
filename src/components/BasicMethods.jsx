import React from 'react'
import {FaReact, FaCss3, FaSass} from 'react-icons/fa'
import {SiJavascript, SiRedux, SiTailwindcss, SiNextdotjs} from 'react-icons/si'

export default function BasicMethods() {
    return (
        <div className='bg-zinc-700 bg-opacity-40 shadow-md rounded-2xl p-4 sm:h-[241px]'>
            <h5 className='text-2xl mb-4 font-bold text-center'>В основном использую</h5>
            <ul className='flex flex-col gap-3 text-2xl'>
                <li className='flex flex-col sm:flex-row items-center gap-2 '>
                    <SiJavascript className='text-[#EBD13A]'/>
                    <span className='text-xl relative sm:after:h-[37px] sm:after:w-[1px] sm:after:bg-white sm:after:absolute sm:after:right-[-5px] sm:after:top-[-5px]'>
                        JavaScript
                    </span>
                    <ul className='flex flex-col gap-2 pl-4'>
                        <li className='relative flex flex-col sm:flex-row items-center gap-2 sm:before:w-4 sm:before:h-[1px] sm:before:bg-white sm:before:absolute sm:before:left-[-20px]'>
                            <div className='flex gap-2'>
                                <FaReact className='text-[#5ED3F3]'/> 
                                <span className='text-xl'>
                                    React js
                                </span>
                            </div>
                            <ul>
                                <li className='flex items-center gap-2'>
                                    <SiRedux className='text-[#6F45B1]'/> 
                                    <span className='text-xl'>
                                        Redux
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li className='relative flex items-center gap-2 sm:before:w-4 sm:before:h-[1px] sm:before:bg-white sm:before:absolute sm:before:left-[-20px]'>
                            <SiNextdotjs className='text-[#1C252C]'/> 
                            <span className='text-xl'>
                                Next js
                            </span>
                        </li>
                    </ul>
                </li>
                <hr />
                <li className='flex flex-col sm:flex-row items-center gap-2'>
                    <div className='flex gap-2'>
                        <FaCss3 className='text-[#2760E5]'/>
                        <span className='text-xl relative sm:after:h-[37px] sm:after:w-[1px] sm:after:bg-white sm:after:absolute sm:after:right-[-5px] sm:after:top-[-5px]'>
                            CSS3
                        </span>
                    </div>
                    <ul className='flex flex-col gap-2 pl-4'>
                        <li className='relative flex items-center gap-2 sm:before:w-4 sm:before:h-[1px] sm:before:bg-white sm:before:absolute sm:before:left-[-20px]'>
                            <SiTailwindcss className='text-[#35B3EB]'/> 
                            <span className='text-xl'>
                                Tailwind
                            </span> 
                        </li>
                        <li className='relative flex items-center gap-2 sm:before:w-4 sm:before:h-[1px] sm:before:bg-white sm:before:absolute sm:before:left-[-20px]'>
                            <FaSass className='text-[#C36291]'/> 
                            <span className='text-xl'>
                                Sass
                            </span> 
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
