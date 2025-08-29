"use client"
import Image from "next/image"
import Link from "next/link"
import Github from '@/assets/tech-stack/github-5.svg'
import Linkedin from "../../../public/images/socials/linkedin.svg"
import Gmail from "../../../public/images/socials/gmail.svg"
import Whatsapp from "../../../public/images/socials/whatsapp-8.svg"

const Socials = () => {
  return (
    <div className="py-5">
        <div className="mb-4">
            <h5 className="text-gray-300 font-semibold tracking-wider">Socials</h5>
        </div>

        <div className="flex flex-row gap-x-10 gap-y-5 flex-wrap items-center justify-start">
            <Link href="https://github.com/SimonDdungu" target="_blank"  className="flex gap-3 items-center">
                <Image src={Github} alt="Github" className="w-10 md:w-14 object-contain" />
                <p className="text-sm hover:underline transition-all ease-in">SimonDdungu</p>
            </Link>

            <Link href="https://www.linkedin.com/in/simon-d-575483304/" target="_blank"  className="flex gap-3 items-center">
                <Image src={Linkedin} alt="Linkedin" className="w-10 object-contain" />
                <p className="text-sm hover:underline transition-all ease-in">Simon Ddungu</p>
            </Link>

            <Link  href="mailto:dev.simonddungu@gmail.com" target="_blank" className="flex gap-3 items-center">
                <Image src={Gmail} alt="Gmail" className="w-10 object-contain" />
                <p className="text-sm hover:underline transition-all ease-in">dev.simonddungu@gmail.com</p>
            </Link>

            <Link  href="https://wa.me/+256770421734" target="_blank"  className="flex gap-3 items-center">
                <Image src={Whatsapp} alt="Whatsapp" className="w-10 object-contain" />
                <p className="text-sm hover:underline transition-all ease-in">+256770421734</p>
            </Link>
        </div>
    </div>
  )
}

export default Socials