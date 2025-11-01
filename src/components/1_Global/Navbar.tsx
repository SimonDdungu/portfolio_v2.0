"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import Logo from "@/assets/Logos/logo-initials-upscaled.jpeg"

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const MobileMenu = useRef<HTMLDivElement>(null)
  const MobileMenuButton = useRef<HTMLButtonElement>(null)
  const [ActiveSectionId, setActiveSectionId] = useState('')




  useEffect(() => {

    const handleClickOutside = (e: MouseEvent) => {
      if (MobileMenu.current && !MobileMenu.current.contains(e.target as Node) || MobileMenuButton.current && MobileMenuButton.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }


    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen])


  useEffect(() => {
    let lastscroll = window.scrollY

    const handleScroll = () => {
      setIsMobileMenuOpen(false)
      const currentscroll = window.scrollY

      if (currentscroll > lastscroll && currentscroll > 20) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastscroll = currentscroll
    }

    window.addEventListener("scroll", handleScroll)



    return () => {
      window.removeEventListener("scroll", handleScroll)

    }
  }, [isVisible])

  useEffect(() => {

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isTablet = window.matchMedia('(min-height: 1070px)').matches;
    let thresholdValue: number;
    let rootMarginValue: string;

    if (isMobile) {
      thresholdValue = 0.2
      rootMarginValue = '-25% 0px'
    } else if (isTablet) {
      thresholdValue = 0.4
      rootMarginValue = '-70px 0px -38% 0px'
    } else {
      thresholdValue = 0.7
      rootMarginValue = '0px'
    }

    // IntersectionObserver for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id)
          }
        })
      },
      { rootMargin: rootMarginValue, threshold: thresholdValue }
    )

    // Observe all sections with an id
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section)
    })

    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      observer.disconnect()

      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])





  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#contact", label: "Contact", id: "contact" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 w-screen z-100 px-5 md:px-20 py-3  
    items-center ${isVisible ? "translate-y-0" : "-translate-y-full"} 
    transition-transform duration-300 ease-in-out bg-black/80 backdrop-blur-sm`}>


      <div className="flex flex-row items-center">

        <Link href="/" rel="noopener noreferrer" className="flex flex-row gap-5 items-center">
          <div className="w-15 h-15 rounded-full overflow-hidden">
            <Image src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </div>

          <span className="hidden xl:block capitalize text-base tracking-wider font-semibold">SIMON DDUNGU</span>
        </Link>

        <div className="hidden lg:flex flex-row mx-auto justify-between items-center gap-15 font-light text-sm">
          {navLinks.map((link) => {
            const isActive = ActiveSectionId === link.id
            return (
              <Link key={link.href} href={link.href} rel="noopener noreferrer"
                className={`px-5 py-2 rounded-2xl ${isActive ? "bg-(--dark-blue) text-white" : "text-gray-700"}`}>
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="lg:hidden flex items-center ml-auto">
          <button ref={MobileMenuButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden flex flex-row items-center justify-center p-2 rounded-md">
            {isMobileMenuOpen ? (<BiX className="text-3xl" />) : (<BiMenu className="text-3xl" />)}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div ref={MobileMenu} className={`lg:hidden  font-light text-sm ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} transition-all duration-300 ease-in-out overflow-hidden `}>
        <div className="space-y-1 pt-4 pb-3">
          {navLinks.map((link) => {
            const isActive = ActiveSectionId === link.id
            return (
              <Link key={link.href} href={link.href} rel="noopener noreferrer"
                className={`pl-2 py-2 ${isActive ? "bg-(--dark-blue) text-white" : "text-gray-700"} block rounded-lg`}>
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar