import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import AppContext from '../context/AppContext'

export default function Header() {
    const ctx = useContext(AppContext)
    return (
        <div className='fixed z-50 lg:px-28 px-4 w-full h-14 bg-zinc-900 bg-opacity-20 hover:bg-opacity-60 hover:shadow-md transition'>
            <ul className='flex items-center justify-center gap-10 h-full text-lg font-semibold'>
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
                <li 
                    onClick={() => ctx.handleModal()}
                    className={`relative cursor-pointer text-yellow-300 before:transition-all before:bottom-[-5px] before:w-full before:absolute before:h-1 before:bg-yellow-300`}>
                    Контакты
                </li>
            </ul>
        </div>
    )
}
