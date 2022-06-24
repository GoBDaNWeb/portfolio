import React from 'react'
import {SiNextdotjs, SiSupabase, SiTailwindcss, SiRedux, SiGithub} from 'react-icons/si'
import {CgMediaLive} from 'react-icons/cg'
import {FaWrench} from 'react-icons/fa'

export default function ProjectCard({project}) {
    return (
        <div className='w-[400px] bg-zinc-700 bg-opacity-50 rounded-2xl shadow-md '>
            <div className={`bg-${project.img} relative bg-cover w-full h-80 bg-center rounded-t-2xl group`}>
                <div className={`absolute flex items-center justify-center w-10 h-10 border-4 border-solid z-40 border-zinc-800 rounded-full top-[-10px] right-[-10px] ${
                    project.status === 1 
                    ? 'bg-green-500' : 
                    project.status === 2 
                    ? 'bg-yellow-500' : 
                    project.status === 3 ? 
                    'bg-red-500' : ''}`
                }
                >
                    {
                        project.status === 1
                        ? <div></div> : 
                        project.status === 2 
                        ? <FaWrench/> :
                        project.status === 3
                        ? <div className='font-bold'>!</div> : ''
                    }  
                </div>
                <div className='w-full h-full overflow-hidden rounded-t-2xl'>
                {
                    project.status !== 1
                    &&  <div className='bg-black bg-opacity-70 w-full duration-300 transition translate-y-[-20rem] group-hover:translate-y-0 h-[50%] rounded-t-2xl'>
                            <h4 className='text-center p-4'>
                                {project.status_message}
                            </h4>
                        </div>
                }
                </div>
                
            </div>
            <div className='p-4 text-center'>
                <h2 className='text-2xl font-semibold'>{project.title}</h2>
                <ul className='flex items-center justify-evenly text-4xl mt-4'>
                    {
                        project.methods.map(method => (

                            <li className='flex flex-col items-center'>
                                {method.icon}
                                <span className='text-lg'>
                                    {method.title}
                                </span>
                            </li>
                        ))
                    }
                </ul>
                <hr className='my-2'/>
                <h5>
                    {project.description}
                </h5>
                <div className='flex justify-center items-center gap-6 mt-8'>
                    <a 
                        target="_blank" 
                        href={project.link_github} 
                        className='flex items-center gap-2 border-[1px] border-solid border-[#1A1D21] p-2 rounded-2xl hover:bg-[#1A1D21] transition group'
                    >
                        <SiGithub className='text-[#1A1D21] transition group-hover:text-white text-3xl'/>
                        <span>
                            GitHub
                        </span>
                    </a>
                    {
                        project.link_live_demo
                        && (
                            <a 
                                target="_blank" 
                                href={project.link_live_demo} 
                                className='flex items-center gap-2 border-[1px] border-solid border-[#35B3EB] p-2 rounded-2xl hover:bg-[#35B3EB] transition group'
                            >
                                <CgMediaLive className='text-[#35B3EB] transition group-hover:text-white text-3xl'/>
                                <span>
                                    Live Demo
                                </span>
                            </a>
                        )
                    }
                   
                </div>
            </div>
            <div className='hidden'>
                <div className={`bg-intercourse bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-crypto bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-todosh bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-weather bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-kiwi bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
                <div className={`bg-movies bg-center bg-no-repeat bg-cover w-full h-full`}></div> 
            </div>
        </div>
    )
}
