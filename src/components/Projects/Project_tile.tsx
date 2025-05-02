import Image from 'next/image'
import Agrixapp from '../../../public/images/projects/Agrixapp.png'
import { SiNextdotjs, SiTailwindcss, SiGithub, SiTypescript } from 'react-icons/si'
import Link from 'next/link'

const Project_tile = () => {
  return (
    <div className='bg-gray-900 px-2 pt-2 pb-8 rounded-2xl'>
        <div className='mb-5 rounded-lg overflow-hidden'>
            <Image src={Agrixapp} alt="Agrix" className='object-cover w-full h-full' />
        </div>

        <div className='px-5'>

            
            <div className='mb-5'>
                <h5 className='mb-3 font-semibold capitalize pb-2 border-b-2'>Agrix</h5>

                <p className='text-sm font-light tracking-wide'>
                    {`Agrix is an all-in-one platform that empowers farmers to sell produce, buy agro-inputs, access farming tips, and
                    track weather updates while allowing consumers to buy fresh, local food directly from the source.`}
                </p>
            </div>

            <div className='mb-8'>
                <h5 className='mb-3 font-semibold capitalize tracking-wide pb-2 border-b-2'>Tech Stack</h5>

                <div className='flex flex-row gap-3 items-center text-sm'>
                    <SiNextdotjs className='text-2xl' />
                    <SiTypescript className='text-2xl' />
                    <SiTailwindcss className='text-2xl' />
                    <SiGithub className='text-2xl' />
                </div>
            </div>

            <div>
                <Link href="https://agrixapp.com" target="_blank" className='px-5 py-2 mt-5 bg-(--dark-blue) text-gray-200 rounded-lg
                hover:bg-blue-900 transition-all ease-in-out duration-300 '>
                Visit Website
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Project_tile