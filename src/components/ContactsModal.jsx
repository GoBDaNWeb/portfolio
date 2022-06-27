import React, {useContext} from 'react'
import {FaTelegramPlane, FaVk} from 'react-icons/fa'
import AppContext from '../context/AppContext'
import {AiFillPhone, AiFillMail, AiOutlineClose} from 'react-icons/ai'
import Backdrop from './Backdrop'

export default function ContactsModal() {
    const ctx = useContext(AppContext)
    console.log(ctx);
    return (
        <Backdrop closeModal={() => ctx.handleContactsModal()}>
             <div 
                onClick={e => e.stopPropagation()} 
                className='bg-zinc-700 w-96 rounded-2xl p-4 flex flex-col justify-center relative'
            >  
                <div 
                    onClick={() => ctx.handleContactsModal()}
                    className='absolute flex items-center justify-center text-xl text-white right-[-10px] top-[-10px] w-10 h-10 bg-zinc-800 rounded-full cursor-pointer'
                >
                    <AiOutlineClose/>
                </div>
                <h4 className='text-center text-3xl font-semibold'>Мои контакты</h4>
                <div className='text-4xl mt-8'>
                    <div>
                        <a href='https://t.me/Gobdan1' target='_blank' className='flex items-center p-2 gap-2 cursor-pointer hover:bg-zinc-800 transition rounded-2xl'>
                            <FaTelegramPlane className='text-[#158CC7]'/>
                            <span className='text-xl'>
                                Telegram
                            </span>
                        </a>
                        <a href='https://vk.com/bogduc' target='_blank' className='flex items-center p-2 gap-2 cursor-pointer hover:bg-zinc-800 transition rounded-2xl'>
                            <FaVk className='text-[#2787F5]'/>
                            <span className='text-xl'>
                                VK
                            </span>
                        </a>
                    </div>
                    <hr />
                    <div>
                        <div className='flex items-center p-2 gap-2'>
                            <AiFillPhone className='text-gray-500'/>
                            <span className='text-xl'>
                                +7 (949) 315-70-97
                            </span>
                        </div>
                        <div className='flex items-center p-2 gap-2'>
                            <AiFillMail className='text-gray-500'/>
                            <span className='text-xl'>
                                bogdan.ognitsiy@yandex.ru
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Backdrop>
    )
}
