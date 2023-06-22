

import { useEffect } from "react"
import { gsap } from "gsap"
import "./LandingPage.scss"


export default function LandingPage() {

  useEffect(() => {

    let ctx = gsap.context(() => {
      gsap.from(".cinematic-shot", {
        delay: 3,
        duration: 1,
        scale: 1.5,
        ease: "power2"
      })

      gsap.from(".left", {
        delay: 3,
        duration: 1.5,
        x: "-300",
        opacity: 0,
        ease: "power2"
      })

      gsap.from(".right", {
        delay: 3,
        duration: 1.25,
        x: "300",
        opacity: 0,
        ease: "power1"
      })

    })
    return () => ctx.revert();
  }, [])

  return (
    <div className="page-container">
      <div className="image-wrapper">
        <img className="cinematic-shot" src="img/cinematic-shot.png" alt="landing-page-shot"></img>
        <div className="about-us">
          <span className="left">About</span> <span className="right">Us</span>
        </div>
      </div>



      <section className="block-wrapper block-1">
        this is block 1
      </section>
      <section className="block-wrapper block-2">
        this is block 2
      </section>
      <section className="block-wrapper block-3">
        this is block 3
      </section>
    </div>
  )
}