import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import BasicMethods from '../components/BasicMethods'
import NonCoreMethods from '../components/NonCoreMethods'

export default function Main() {
    const ctx = useContext(AppContext)

    return (
        <div className='flex bg-zinc-800 flex-col items-center justify-center w-full pb-20 lg:px-28 px-4 pt-20'>
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
                <BasicMethods/>
                <NonCoreMethods/>
                
            </div>
        </div>
    )
}
