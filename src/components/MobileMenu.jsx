import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {FaTelegramPlane, FaVk} from 'react-icons/fa'
import {AiFillPhone, AiFillMail} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'
import AppContext from '../context/AppContext'

export default function MobileMenu() {
    const ctx = useContext(AppContext)

    return (
        <div>
             <ul className={`fixed transition pt-20 bg-black w-full bg-opacity-90 flex flex-col gap-4 p-10 justify-start items-start z-50 ${ctx.isOpenMobileMenu ? 'translate-y-0' : 'translate-y-[-50rem]'}`}>
                <NavLink 
                    to={'/'} 
                    className='relative cursor-pointer before:transition-all before:bottom-[-5px] before:hover:w-full before:w-[50%] before:absolute before:h-1 before:bg-white nav-link'
                >
                    Главная
                </NavLink>
                <NavLink 
                    to={'/portfolio'} 
                    className='relative cursor-pointer before:transition-all before:bottom-[-5px] before:hover:w-full before:w-[50%] before:absolute before:h-1 before:bg-white nav-link'
                >
                    Проекты
                </NavLink>
                <NavLink 
                    to={'/about'} 
                    className='relative cursor-pointer before:transition-all before:bottom-[-5px] before:hover:w-full before:w-[50%] before:absolute before:h-1 before:bg-white nav-link'
                >
                    Немного обо мне
                </NavLink>
                <li>
                    <div className='text-lg mt-8'>
                        <div>
                            <a href='https://t.me/Gobdan1' target='_blank' className='flex items-center p-2 gap-2 cursor-pointer hover:bg-zinc-800 transition rounded-2xl'>
                                <FaTelegramPlane className='text-[#158CC7]'/>
                                <span >
                                    Telegram
                                </span>
                            </a>
                            <a href='https://vk.com/bogduc' target='_blank' className='flex items-center p-2 gap-2 cursor-pointer hover:bg-zinc-800 transition rounded-2xl'>
                                <FaVk className='text-[#2787F5]'/>
                                <span >
                                    VK
                                </span>
                            </a>
                            <a href='https://github.com/GoBDaNWeb' target='_blank' className='flex items-center p-2 gap-2 cursor-pointer hover:bg-zinc-800 transition rounded-2xl'>
                                <SiGithub className='text-[#fff]'/>
                                <span >
                                    GitHub
                                </span>
                            </a>
                        </div>
                        <hr />
                        <div>
                            <div className='flex items-center p-2 gap-2'>
                                <AiFillPhone className='text-gray-500'/>
                                <span>
                                    +7 (949) 315-70-97
                                </span>
                            </div>
                            <div className='flex items-center p-2 gap-2'>
                                <AiFillMail className='text-gray-500'/>
                                <span>
                                    bogdan.ognitsiy@yandex.ru
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
