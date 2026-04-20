import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import gsap from "gsap"
import Herosection from "./components/HeroSection"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App()
{
  return(
    <>
    <Navbar />
    <Herosection />
    <div className="h-dvh bg-black" />
    </>
  )
}

export default App