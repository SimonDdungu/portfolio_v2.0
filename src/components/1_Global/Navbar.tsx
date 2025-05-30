"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [ActiveSectionId, setActiveSectionId] = useState('')

  useEffect(() => {
    let lastscroll = window.scrollY

    const handleScroll = () => {
      const currentscroll = window.scrollY

      if (currentscroll > lastscroll && currentscroll > 20) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastscroll = currentscroll
    }


    window.addEventListener("scroll", handleScroll)

    document.documentElement.style.scrollBehavior = 'smooth'



    // IntersectionObserver for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px', threshold: 0.8 }
    )

    // Observe all sections with an id
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section)
    })


    return () => {
      window.removeEventListener("scroll", handleScroll)

      document.documentElement.style.scrollBehavior = 'auto'

      observer.disconnect()
    }
  }, [isVisible])



  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#contact", label: "Contact", id: "contact" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 w-screen z-100 px-5 md:px-20 py-3 md:py-5  
    items-center ${isVisible ? "translate-y-0" : "-translate-y-full"} 
    transition-transform duration-300 ease-in-out bg-black/80 backdrop-blur-sm`}>


      <div className="flex flex-row items-center">

        <div>
          <div>Logo</div>
        </div>

        <div className="hidden lg:flex flex-row mx-auto justify-between items-center gap-15 font-light text-sm">
          {navLinks.map((link) => {
            const isActive = ActiveSectionId === link.id
            return (
              <Link key={link.href} href={link.href}
                className={`px-5 py-2 rounded-2xl ${isActive ? "bg-(--dark-blue) text-white" : "text-gray-700"}`}>
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="lg:hidden flex items-center ml-auto">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden flex flex-row items-center justify-center p-2 rounded-md">
            {isMobileMenuOpen ? (<BiX className="text-3xl" />) : (<BiMenu className="text-3xl" />)}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden  font-light text-sm ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} transition-all duration-300 ease-in-out overflow-hidden `}>
        <div className="space-y-1 pt-2 pb-3">
          {navLinks.map((link) => {
            const isActive = ActiveSectionId === link.id
            return(
            <Link key={link.href} href={link.href}
              className={`pl-2 py-2 ${isActive ? "bg-(--dark-blue) text-white" : "text-gray-700"} block rounded-lg`}>
              {link.label}
            </Link>
          )})}
        </div>
      </div>
    </nav>
  )
}

export default Navbar