import React, {useContext} from 'react'
import image from '../assets/group.png' 
import AppContext from '../context/AppContext'

export default function About() {
    const ctx = useContext(AppContext)

    return (
        <div className='flex bg-zinc-800 flex-col items-center justify-center w-full pb-20 lg:px-28 px-4 pt-40'>
            <div className='flex flex-col lg:flex-row items-center '>
                <img src={image} alt="123" />
                <div className='flex flex-col items-start'>
                    <h3 className='text-xl text-yellow-500 bg-zinc-700 rounded-2xl shadow-md p-2 px-4 mb-2'>Кто я</h3>
                    <p className='text-left'>
                        Меня зовут <span 
                            onClick={() => ctx.handleModal()}
                            className='text-yellow-500 underline font-semibold cursor-pointer'
                        >
                            Огнистый Богдан Васильевич
                        </span> ,<br /> Я являюсь Front-end Разработчиком, изучаю это направление уже полтора года, <br/> закончил курсы Frontend разработчика в академии <a href='https://www.donstep.com/' target='_balnk' className='text-yellow-500 '>ШАГ</a> в городе Донецк. <br />
                        На данный момент являюсь студентом очной формы обучения на 3-м курсе в ДонНТУ на факультете компьютерных наук и технологий.
                    </p>
                </div>
            </div>
        </div>
    )
}
