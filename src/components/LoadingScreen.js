import { useEffect, useRef } from "react"
import "./LoadingScreen.scss"
import { gsap } from "gsap"



export default function LoadingScreen(props) {

  const { view } = props

  const tl = useRef(null)

  useEffect(() => {

    let ctx = gsap.context(() => {
      // all your GSAP animation code here
      tl.current = gsap.timeline()
        .from(".upperSec", {
          duration: 2,
          y: "-500",
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .from(".lowerSec", {
          duration: 2,
          y: "500",
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .from(".center-description", {
          delay: 0.25,
          duration: 2,
          scale: 0.5,
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .from(".center-animation", {
          delay: 0.5,
          duration: 3,
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .from(".turning-piece", {
          rotate: 0,
          delay: 1,
          duration: 2,
          ease: "power1"
        }, "sequence-1")

        .to(".upperSec", {
          delay: 2.25,
          duration: 1.75,
          y: "50",
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .to(".lowerSec", {
          delay: 2.25,
          duration: 1.75,
          y: "-50",
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .to(".center-description", {
          delay: 2.5,
          duration: 2,
          scale: 0.5,
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .to(".center-animation", {
          delay: 2.5,
          duration: 2,
          opacity: 0,
          ease: "power3"
        }, "sequence-1")
        .to(".loading-container", {
          delay: 3.25,
          opacity: 0,
          duration: 1,
          ease: "power3"
        }, "sequence-1")
    });
    return () => ctx.revert(); // <- cleanup!
  }, [])


  return (
    <div className="loading-container" ref={tl}>
      <div className="name-container">
        <div className="row upperSec">
          <span className="upper">Z</span>
          <span className="upper">E</span>
        </div>
        <div className="row lowerSec">
          <span className="lower">I</span>
          <span className="lower">N</span>
        </div>
      </div>

      <div className="center-description">
        {(view === "default" || view === "landing") &&
          <p>ZENI is a clothing-based creative studio that embodies neutrality, elegance, and peacefulness in each meticulously crafted artworks.</p>
        }
        {view === "about" &&
          <p>A commitment to crafting garments that transcend mere clothing, embodying a serene and timeless aesthetic.</p>
        }

        {view === "process" &&
          <p>Elegantly crafting gender-neutral fashion with sustainable practices, and delivers wardrobes tailored to your unique style and values.
          </p>
        }



      </div>

      <div className="center-animation">
        <div className="turning-piece">
          <div className="line skew-1"></div>
          <div className="line skew-2"></div>
          <div className="line skew-3"></div>
          <div className="line skew-4"></div>
          <div className="line skew-5"></div>
        </div>
      </div>

    </div>
  )
}