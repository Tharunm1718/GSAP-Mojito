import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(SplitText)

function Herosection() {
    const videoRef = useRef()
    const startvalue = "center 60%"
    const endvalue = "bottom top"

    useGSAP(() => {
        const heroText = new SplitText(".title", { type: "chars, words" })
        const subtitle = new SplitText(".subtitle", { type: "lines" })
        heroText.chars.forEach(element => {
            element.classList.add("text-gradient")
        })

        gsap.from(heroText.chars, {
            y: 200,
            stagger: 0.06,
            duration: 1.8,
            ease: "expo.out"
        });

        gsap.from(subtitle.lines, {
            y: 100,
            stagger: 0.06,
            duration: 1,
            delay: 1,
            opacity: 0,
            ease: "expo.out"
        })

        let t1 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        )

        t1.to(".left-leaf", {
            y: -300
        }, 0)

        t1.to(".right-leaf", {
            y: 300
        }, 0)

        const t2 = gsap.timeline(
            {
                scrollTrigger: {
                    target: "video",
                    scrub: true,
                    start: startvalue,
                    end: endvalue,
                    pin: true
                }
            }
        )

        videoRef.current.onloadedmetadata = () => {
            t2.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
    })
    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">Mojito</h1>
                <img src="../../public/images/hero-left-leaf.png" className="left-leaf"></img>
                <img src="../../public/images/hero-right-leaf.png" className="right-leaf"></img>
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br />of Summer
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src="../../public/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </>
    )
}

export default Herosection