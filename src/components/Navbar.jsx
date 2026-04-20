import { navLinks } from "../../public/constents";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



function Navbar() {

    useGSAP(()=>
    {
        let navTwin = gsap.timeline({
            scrollTrigger : {
                trigger : "nav",
                start : "bottom top"
            }
        })

        navTwin.fromTo("nav", {backgroundColor : "transparent"}, {
            backgroundColor : "#00000050",
            backgroundFilter : "blur(10px)",
        })
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="../../public/images/logo.png"></img>
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.title}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar