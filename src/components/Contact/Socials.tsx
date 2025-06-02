"use client"
import Image from "next/image"
import Link from "next/link"
import Github from '@/assets/tech-stack/github-5.svg'
import Linkedin from "../../../public/images/socials/linkedin.svg"
import Gmail from "../../../public/images/socials/gmail.svg"

const Socials = () => {
  return (
    <div className="py-5">
        <div className="mb-4">
            <h5 className="text-gray-300 font-semibold tracking-wider">Socials</h5>
        </div>

        <div className="flex flex-row gap-10 flex-wrap items-center justify-start">
            <div className="flex gap-3 items-center">
                <Image src={Github} alt="Github" className="w-14 object-contain" />
                <Link href="https://github.com/SimonDdungu" target="_blank" 
                className="text-sm hover:underline transition-all ease-in">SimonDdungu</Link>
            </div>

            <div className="flex gap-3 items-center">
                <Image src={Linkedin} alt="Linkedin" className="w-10 object-contain" />
                <Link href="https://www.linkedin.com/in/simon-d-575483304/" target="_blank" 
                className="text-sm hover:underline transition-all ease-in">Simon Ddungu</Link>
            </div>

            <div className="flex gap-3 items-center">
                <Image src={Gmail} alt="Gmail" className="w-10 object-contain" />
                <Link  href="mailto:dev.simonddungu@gmail.com" target="_blank" 
                className="text-sm hover:underline transition-all ease-in">dev.simonddungu@gmail.com</Link>
            </div>
        </div>
    </div>
  )
}

export default Socials