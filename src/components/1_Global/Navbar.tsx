"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { BiMenu, BiX } from "react-icons/bi"

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(()  => {
    let lastscroll = window.scrollY

    const handleScroll = () => {
      const currentscroll = window.scrollY

      if(currentscroll > lastscroll && currentscroll > 20) {
        setIsVisible(false)
      }else {
        setIsVisible(true)
      }
      lastscroll = currentscroll
    }


    window.addEventListener("scroll", handleScroll)


    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isVisible])



  const navLinks = [
    { href: "/", label: "Home"},
    { href: "/about", label: "About"},
    { href: "/#Projects", label: "Projects"},
    { href: "/skills", label: "Skills"},
    { href: "/contact", label: "Contact"}
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
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                className={`px-5 py-2 rounded-2xl ${pathname === link.href ? "bg-(--dark-blue) text-white" : "text-gray-700"}`}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="lg:hidden flex items-center ml-auto">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden flex flex-row items-center justify-center p-2 rounded-md">
                  {isMobileMenuOpen ? (<BiX className="text-3xl"/>) : (<BiMenu className="text-3xl"/>)}
                </button>
            </div>

        </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden  font-light text-sm ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} transition-all duration-300 ease-in-out overflow-hidden `}>
            <div className="space-y-1 pt-2 pb-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                className={`pl-2 py-2 ${pathname === link.href ? "bg-(--dark-blue) text-white" : "text-gray-700"} block rounded-lg`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
    </nav>
  )
}

export default Navbar