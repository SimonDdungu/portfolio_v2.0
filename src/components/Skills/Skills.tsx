import Image from 'next/image'

import Nextjs from '@/assets/tech-stack/nextjs-2.svg'
import Reactjs from '@/assets/tech-stack/react-1.svg'
import Typescript from '@/assets/tech-stack/typescript.svg'
import Javascript from '@/assets/tech-stack/javascript.svg'
import Tailwind from '@/assets/tech-stack/tailwind-css.svg'

import NodeJs from '@/assets/tech-stack/nodejs-1.svg'
import ExpressJs from '@/assets/tech-stack/express-3.png'
import Python from '@/assets/tech-stack/python.svg'
import Django from '@/assets/tech-stack/django-1.svg'
import Mysql from '@/assets/tech-stack/mysql.svg'
import Postgresql from '@/assets/tech-stack/postgresql.svg'
import Sqlite from '@/assets/tech-stack/sqlite-4.svg'
import MongoDB from '@/assets/tech-stack/mongodb-2.svg'

import Github from '@/assets/tech-stack/github-5.svg'
import Git from '@/assets/tech-stack/git.svg'
import Postman from '@/assets/tech-stack/postman.svg'
import Vscode from '@/assets/tech-stack/visual-studio-code.svg'
import Ubuntu from "@/assets/tech-stack/ubuntu-4.svg"

import Ngrok from '@/assets/tech-stack/ngrok3.svg'
import DBeaver from '@/assets/tech-stack/DBeaver.svg'



const Skills = () => {
    const Frontend = [
        { skill: 'Next.js', icon: Nextjs},
        { skill: 'React.js', icon: Reactjs},
        { skill: 'Javascript', icon: Javascript},
        { skill: 'Typescript', icon: Typescript},
        { skill: 'Tailwind CSS', icon: Tailwind},
    ]

    const Backend = [
        { skill: 'NodeJs', icon: NodeJs},
        { skill: 'ExpressJs', icon: ExpressJs},
        { skill: 'Python', icon: Python},
        { skill: 'Django', icon: Django},
        { skill: 'MongoDB', icon: MongoDB},
        { skill: 'SQLite', icon: Sqlite},
        { skill: 'MySQL', icon: Mysql},
        { skill: 'PostgreSQL', icon: Postgresql},
    ]

    const Tools = [
        { tool: 'Git', icon: Git},
        { tool: 'Github', icon: Github},
        { tool: 'Postman', icon: Postman},
       // { tool: 'Ngrok', icon: Ngrok},
        { tool: 'DBeaver', icon: DBeaver},
        { tool: 'Ubuntu', icon: Ubuntu},
        { tool: 'Vscode', icon: Vscode},
    ]
  return (
    <section id="skills" className='py-20 px-5 bg-gray-900'>
        <div className="md:max-w-5xl mx-auto">
            <div className="mb-10 md:mb-20">
                <h2 className='text-3xl text-center font-semibold tracking-wide'>My Skills</h2>
            </div>

            <div className='mb-20'>
                <h5 className='text-lg text-center mb-5'>Front End</h5>

                <div className='flex flex-rows flex-wrap gap-10 items-center justify-center'>
                    {Frontend.map((skill, index) => (
                        <div key={index} className='w-15'>
                            <Image src={skill.icon} alt={skill.skill} className='object-contain w-full'/>
                        </div>
                    ))}
                </div>
            </div>


            <div className='mb-20'>
                <h5 className='text-lg text-center mb-5'>Back End</h5>

                <div className='flex flex-rows flex-wrap gap-10 items-center justify-center'>
                    {Backend.map((skill, index) => (
                        <div key={index} className='w-15'>
                            <Image src={skill.icon} alt={skill.skill} className='object-contain w-full'/>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <h5 className='text-lg text-center mb-5'>Tools</h5>

                <div className='flex flex-rows flex-wrap gap-10 items-center justify-center'>
                    {Tools.map((tool, index) => (
                        <div key={index} className='w-15'>
                            <Image src={tool.icon} alt={tool.tool} className='object-contain w-full'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills