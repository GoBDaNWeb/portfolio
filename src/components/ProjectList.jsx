import React from 'react'
import {projects} from '../config/data'
import ProjectCard from './ProjectCard'

export default function ProjectList() {
    console.log(projects);
    return (
        <div className='flex flex-wrap gap-10 items-center justify-center '>
            {
                projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))
            }
        </div>
    )
}
