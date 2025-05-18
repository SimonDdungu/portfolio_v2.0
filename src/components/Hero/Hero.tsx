import Link from "next/link"
const Hero = () => {
  return (
    <section id="Home" className="px-5 py-30 md:px-20 md:py-50 ">
        <div className="mx-auto md:max-w-5xl">
            <div className="mb-3">
                <span className="text-sm uppercase text-gray-200 tracking-wider">Simon Ddungu</span>
            </div> 

            <div className="mb-5 tracking-wide uppercase font-light text-sm text-gray-400">
                <p>Full Stack Developer | Computer Science Student - UG</p>
            </div>

            <div className="text-lg md:text-2xl mb-8 tracking-widest uppercase font-bold">
                <p>
                Developing websites and applications that are user-friendly, responsive and SEO-optimized, 
                ensuring ease of use and discoverability.
                </p>
            </div>

            <div className="flex flex-row gap-5 items-center text-sm">

                <Link href="#projects" className="px-4 py-2 bg-(--dark-blue) text-gray-200 rounded-lg">
                View Projects
                </Link>

                <Link href="#contact" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
                Contact Me
                </Link>

            </div>
        </div>
    </section>
  )
}

export default Hero