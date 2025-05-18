import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"

const Home_page = () => {
  return (
    <>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </>
  )
}

export default Home_page