

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



      <section className="block-wrapper block-2">
        <div className="chapter small-des">
          <span>chapter I</span>
        </div>
        <div className="description-1">
          <span>ZENI values authenticity, mindfulness, and sustainability through embracing individuality with our gender-neutral designs.</span>
        </div>
        <section className="image-display-container">
          <div className="timeline"></div>
          <div className="row-1">
            <img src="img/models/F5.png"></img>
            <img src="img/models/M3.png"></img>
            <img src="img/models/M2.png"></img>
            <img src="img/models/F3.png"></img>
            <img src="img/models/F4.png"></img>
          </div>
          <div className="row-2">
            <img src="img/models/M5.png"></img>
            <img src="img/models/F1.png"></img>
            <img src="img/models/F6.png"></img>
          </div>
          <div className="row-3">
            <img src="img/models/G1.png"></img>
          </div>
        </section>

        <div className="description-2 small-des">
          <span>We prioritize the well-being of our customers and the environment by using high-quality materials, promoting ethical production practices, and fostering a sense of harmony in everything we do</span>
        </div>

        <div className="description-3">
          <span>We believe in the power of embracing one's true self and expressing individuality through our gender-neutral, timeless designs.</span>
        </div>

        <div className="description-4">
          <span>ZENI prioritize the <i>well-being</i> of our customers and the environment by using high-quality materials, promoting <i>ethical</i> production practices, and fostering a sense of <i>harmony</i> in everything we do</span>
        </div>

      </section>



      <section className="block-wrapper block-3">
        <div className="chapter small-des">
          <span>chapter II</span>
        </div>
        <div className="timeline"></div>
        <div className="section-title">
          <span>our expertise</span>
        </div>

        <div className="expertise-list-container">
          <span className="item-7">Tranquil Styling</span>
          <span className="item-4">Capsule Wardrobe Creation</span>
          <span className="item-2">Sustainable Fashion</span>
          <span className="item-5">Mindfulness Workshops</span>
          <span className="item-3">Personal Styling Consultations</span>
          <span className="item-1">Gender-Neutral Design</span>
          <span className="item-6">Production Consultancy</span>
        </div>

        <div className="image-container">
          <img className="group" src="img/models/G2.png"></img>
          <img className="plant" src="img/N3.png"></img>
        </div>

        <div className="description-1">
          <span>Committed to creating a <i>peaceful</i> and <i>elegant</i> experience for customers, our team members are dedicated to delivering excellence in every aspect of their work.</span>
        </div>

        <div className="description-2 small-des">
          <span>Indulge in the transformative experience of ZENI. Embrace the peace and elegance that our gender-neutral, timeless designs exude. We invite you to elevate your style and radiate serenity. Whether it's a personalized styling consultation, an exploration of sustainable fashion education, or the creation of a versatile capsule wardrobe, our dedicated team is here to guide you on a journey of self-expression and mindful fashion choices.</span>
          <br/>
          <br/>
          <span>
          Step into the world of ZENI, where elegance meets serenity, and discover the joy of clothing that speaks to your soul.
          </span>
        </div>
      </section>

      {/* <section className="block-wrapper block-3">
        this is block 4
      </section> */}
    </div>
  )
}