

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/all";


import "./Process.scss"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)




export default function Process(props) {

  const { loading } = props
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  if (!loading) {
    let sm = ScrollSmoother.create({
      content: ".process-page-container",
      smooth: 2,
    });
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      let titleTl = gsap.timeline()
        .from(".cinematic-shot", {
          duration: 1,
          scale: 1.3,
          ease: "power2",
          delay: 3.2
        }, 0)
        .from(".left", {
          duration: 1.5,
          x: "-100",
          opacity: 0,
          ease: "power3"
        }, "<")
        .from(".mid", {
          duration: 1.5,
          y: "-100",
          opacity: 0,
          ease: "power3"
        }, "<")
        .from(".right", {
          duration: 1.5,
          x: "150",
          opacity: 0,
          ease: "power3"
        }, "<")
        .to(".cinematic-shot", {
          scrollTrigger: {
            trigger: ".cinematic-shot",
            start: "50% 50%",
            end: "bottom 50%",
            scrub: true,
            markers: true,
          },
          height: "120%",
        }, 0)
    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, [])

  useEffect(() => {
    const handleResize = () => { setWindowWidth(window.innerWidth) };
    window.addEventListener('resize', handleResize);

    let cardYOffset = -82
    let cardXOffset = '35dvw'



    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: '.scroll-container',
          start: 'bottom bottom',
          end: "+=" + (windowWidth * 5),
          pin: true,
          scrub: true,
        }
      })
        .to(".card-1 .title", {
          x: cardXOffset
        })
        .to(".card-1", {
          yPercent: cardYOffset
        })
        .fromTo(".card-1 .header", {
          opacity: 0,
          x: -50
        }, {
          opacity: 1,
          x: 0
        }, "<")
        .to(".card-1 .title", {
          x: 0
        })

        .to(".card-2 .title", {
          x: cardXOffset
        }, "<")
        .to(".card-2", {
          yPercent: cardYOffset
        })
        .fromTo(".card-2 .header-wrapper", {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0
        }, "<")
        .fromTo(".card-2 img", {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0
        }, "<")
        .to(".card-2 .title", {
          x: 0
        })

        .to(".card-3 .title", {
          x: cardXOffset
        }, "<")
        .to(".card-3", {
          yPercent: cardYOffset
        })
        .fromTo(".card-3 .header", {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0
        }, "<")
        .fromTo(".card-3 img", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0
        }, "<")
        .to(".card-3 .title", {
          x: 0
        })

        .to(".card-4 .title", {
          x: cardXOffset
        }, "<")
        .to(".card-4", {
          yPercent: cardYOffset
        })
        .to(".card-4 .title", {
          x: 0
        })

        .to(".card-5 .title", {
          x: cardXOffset
        }, "<")
        .to(".card-5", {
          yPercent: cardYOffset
        })
        .to(".card-5 .title", {
          x: 0
        })

        .to(".card-6 .title", {
          x: cardXOffset
        }, "<")
        .to(".card-6", {
          yPercent: cardYOffset
        })
        .to(".card-6 .title", {
          x: 0
        })
    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, [windowWidth])

  useEffect(() => {
    document.getElementById('autoplay').play();
  }, [])




  return (
    <div className="process-page-container">

      <div className="image-wrapper">
        <img className="cinematic-shot" src="img/cinematic-shot.jpg" alt="landing-page-shot"></img>
        <div className="image-title">
          <div className="image-title-inner-wrapper">
            <span className="left">How</span>
            <span className="mid">we</span>
            <span className="right">Work</span>
          </div>
        </div>
      </div>


      <div className="scroll-container">
        <div className="intro-card">
          <div className="inner-warpper">
            <div className="description-1 small-des">
              <span >Our mission is to intimately understand the essence of your brand, uncover its unique narrative, and skillfully convey it to your audience through the art of storytelling.</span>
            </div>
            <div className="description-2">
              <span>Whether you're a burgeoning startup or a global enterprise,</span>
              <span>ZENI is dedicated to capturing and articulating the distinctive</span>
              <span>essence of your narrative.</span>
            </div>
            <div className="description-3 small-des">
              <span>scroll down to learn more about</span>
              <span>our work process.</span>
            </div>
          </div>
        </div>

        <div className="card-container">

          <div className="card card-1">
            <div className="card-title">
              <span className="step">1 step</span>
              <span className="title">identify target styling</span>
            </div>

            <div className="card-desc-1 card-desc-container">
              <div className="header">identify target</div>
              <div className="block-1">
                <div className="video-container">
                  <video id="autoplay" autoPlay loop muted>
                    <source src="video/v1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="block-2">
                  <span className="header"><i>styling</i></span>
                  <span className="step-text">1 STEP</span>
                  <div className="desc desc-style">Personalized styling consultations establish deep connections, ensuring garments reflect individuality, confidence, and serenity in everyday life.</div>
                </div>
              </div>
            </div>
          </div>


          <div className="card card-2">
            <div className="card-title">
              <span className="step">2 step</span>
              <span className="title">Craft Gender-Neutral Designs</span>
            </div>
            <div className="card-desc-1 card-desc-container">
              <div className="header-wrapper">
                <div className="header">Craft  <i>Gender-</i></div>
                <div className="header"><i>Neutral</i> Designs</div>
              </div>
              <div className="block-1">
                <div className="image-container">
                  <img src="img/process/blk1.jpg" alt="placeholder"></img>
                </div>
                <div className="desc desc-style">
                  Craft gender-neutral designs celebrating authenticity, freedom of expression, elegance, and peace, transcending boundaries with inclusivity and versatility.
                </div>
              </div>
            </div>
          </div>


          <div className="card card-3">
            <div className="card-title">
              <span className="step">3 step</span>
              <span className="title">Curate Wardrobes Capsule</span>
            </div>

            <div className="card-desc-3 card-desc-container">
              <div className="header">Curate Wardrobes</div>
              <div className="block-1">
                <div className="left-container">
                  <span className="header">Capsule</span>
                  <span className="step-text">3 STEP</span>
                  <div className="desc-container">
                    <div className="desc">
                      Experienced stylists meticulously craft adaptable collections, blending classic garments to promote simplicity, functionality, and mindful consumption.
                    </div>
                    <div className="desc right">Each piece reflects individual style and values, ensuring a curated wardrobe resonating with personal expression and ethical choices.
                    </div>
                  </div>
                </div>
                <div className="right-container">
                <img src="img/process/blk3.jpg" alt="placeholder"></img>
                </div>
              </div>
            </div>
          </div>



          <div className="card card-4">
            <div className="card-title">
              <span className="step">4 step</span>
              <span className="title">Practice Mindful Fashion</span>
            </div>
          </div>
          <div className="card card-5">
            <div className="card-title">
              <span className="step">5 step</span>
              <span className="title">Educate on Sustainability</span>
            </div>
          </div>
          <div className="card card-6">
            <div className="card-title">
              <span className="step">6 step</span>
              <span className="title">Advise Ethical Production</span>
            </div>
          </div>
        </div>


      </div>

    </div>

  )
}