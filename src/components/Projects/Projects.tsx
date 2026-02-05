import React from 'react'
import Agrixapp from '../../../public/images/projects/Agrixapp2.png'
import PCA from '../../../public/images/projects/Pivosoftcodingacademy.png'
import Brueilex from '../../../public/images/projects/Brueilexgroup.png'
import Vinniq from '../../../public/images/projects/Vinniqmedia.png'
import ISBATGPA from "../../../public/images/projects/IsbatGPACalculator.png"
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiGit, SiGithub, SiTypescript } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
    const projects = [
        {
        image: Brueilex,
        name: "Brueilex Group", 
        description: "Brueilex Group offers reliable water and energy solutions for homes, farms and businesses in Uganda. From irrigation systems, solar energy, boreholes, generators to water pumping ensuring efficiency, sustainability and consistent performance.",
        techStack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiGit, SiGithub],
        link: "https://brueilexgroup.com",
        },
         {
        image: ISBATGPA,
        name: "ISBAT GPA Calculator", 
        description: "A simple ISBAT GPA calculator designed for ISBAT university students to compute semester and cumulative GPA easily.",
        techStack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiGit, SiGithub],
        link: "https://isbat-gpa-calculator.vercel.app/",
        },
        {
        image: Vinniq,
        name: "Vinniq Media", 
        description: "Vinniq Media provides professional photography and videography for portraits, events and media productions creating beautiful, high-quality images and videos for every occasion, from personal projects to commercial ventures.",
        techStack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiGit, SiGithub],
        link: "https://vinniqmedia.com",
        },
        {
        image: Agrixapp,
        name: "AgriX", 
        description: "AgriX is an all-in-one platform that empowers farmers to sell produce, buy agro-inputs, access farming tips and track weather updates while allowing consumers to buy fresh, local food directly from the source.",
        techStack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiGit, SiGithub],
        link: "https://agrixfarm.com/",
        },  
        
        {
        image: PCA,
        name: "Pivosoft Coding Academy", 
        description: "Pivosoft Coding Academy is a free online mentorship platform helping beginners learn web development, mobile app development, backend and version control, with guidance from experienced mentors.",
        techStack: [SiNextdotjs, SiJavascript, SiTailwindcss, SiGit, SiGithub],
        link: "https://academy.pivosoft.com",
        },
    ]

  return (
    <section id="projects" className='py-20 px-5 bg-gray-950'>
        <div className="md:max-w-5xl mx-auto">
            <div className="mb-10">
                <h2 className='text-3xl text-center font-semibold tracking-wide'>My Projects</h2>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {projects.map((project, index) => (
                        <div key={index} className='bg-gray-900 px-2 pt-2 pb-8 rounded-2xl cursor-default'>
                            <div className='mb-5 rounded-lg overflow-hidden xl:w-119 xl:h-66'>
                                <Image src={project.image} alt={project.name} className='object-cover w-full h-full' />
                            </div>

                        <div className='px-5'>

                            
                            <div className='mb-5'>
                                <h5 className='mb-3 font-semibold capitalize pb-2 border-b-2'>{project.name}</h5>

                                <p className='text-sm font-light tracking-wide md:h-23 lg:h-20'>
                                    {project.description}
                                </p>
                            </div>

                            <div className='mb-8'>
                                <h5 className='mb-3 font-semibold capitalize tracking-wide pb-2 border-b-2'>Tech Stack</h5>

                                <div className='flex flex-row gap-3 items-center text-sm'>
                                    {project.techStack.map((Icon, index) => (
                                        <Icon key={index} className='text-2xl'/>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <Link href={project.link} target="_blank" rel="noopener noreferrer" className='px-5 py-2 mt-5 bg-(--dark-blue) text-gray-200 rounded-lg
                                hover:bg-blue-900 transition-all ease-in-out duration-300 '>
                                Visit Website
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects