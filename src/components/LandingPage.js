

import { useEffect } from "react"
import { gsap } from "gsap"
import "./LandingPage.scss"


export default function LandingPage() {

  useEffect(() => {

    let ctx = gsap.context(() => {
      gsap.from(".cinematic-shot", {
        delay: 3,
        duration: 1,
        scale: 2,
        ease: "power2"
      })

      gsap.from(".left", {
        delay: 3,
        duration: 1.5,
        x: "-100",
        opacity: 0,
        ease: "power3"
      })

      gsap.from(".right", {
        delay: 3,
        duration: 1.5,
        x: "100",
        opacity: 0,
        ease: "power3"
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

        <div className="description-1 small-des">
          <span>ZENI aims to bring a sense of calm and tranquility to the wearer, allowing them to embrace their individuality and express with grace and poise</span>
        </div>

        <div className="description-2">
          <span>
          Serenity of Style - we strive to create a <i>peaceful</i> and <i>elegant</i> experience, allowing our customers to connect with their <i>inner serenity</i> while making a positive impact on the world around them
          </span>
        </div>

        <div className="description-3 small-des">
          <span>scroll down to learn more about all of our mission & team</span>
        </div>

      </section>



      {/* <section className="block-wrapper block-2">
        this is block 2
      </section>



      <section className="block-wrapper block-3">
        this is block 3
      </section> */}
    </div>
  )
}