

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/all";


import "./AboutPage.scss"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollSmoother)



export default function AboutPage(props) {

  const {loading} = props

  const divData = [
    {
      content: 'Tranquil Styling Focus',
      spanContent: 'At ZENI, we understand that ambiance plays a significant role in creating memorable events. Our expertise in event styling allows us to curate serene and elegant atmospheres that reflect our brand\'s values of peace and elegance. From intimate gatherings to grand celebrations, we meticulously design'
    },
    {
      content: 'Capsule Wardrobe Creation',
      spanContent: 'At ZENI, we believe in the power of simplicity and mindful consumption. Our expert stylists specialize in creating capsule wardrobes, thoughtfully curated collections of essential pieces that effortlessly blend together to create countless stylish ensembles. Through a detailed assessment of our clients\' lifestyle, preferences, and personal style, we craft a selection of garments that prioritize versatility, quality, and longevity. By streamlining their wardrobe and encouraging conscious choices, we help our clients embrace a clutter-free and serene environment, allowing them to focus on what truly matters while always looking effortlessly chic.'
    },
    {
      content: 'Sustainable Fashion',
      spanContent: 'ZENI is dedicated to driving change in the fashion industry by promoting sustainable practices and raising awareness about their importance. Our comprehensive educational workshops and resources delve into the environmental and social impacts of fashion, shedding light on issues such as fast fashion, textile waste, and fair labor conditions. We empower individuals with knowledge and practical tips to make conscious fashion choices that positively impact the planet. Through our educational initiatives, we aim to inspire a community of mindful consumers who understand the power of their choices in creating a more sustainable and equitable fashion future.'
    },
    {
      content: 'Mindfulness Workshops',
      spanContent: 'ZENI recognizes the profound connection between fashion and mindfulness, and we believe that dressing can be a transformative practice of self-expression and self-care. Our mindfulness workshops combine guided meditations, self-reflection exercises, and fashion-related discussions to create a holistic experience. We explore the concept of mindful dressing, encouraging individuals to be present in the moment, cultivate self-awareness, and develop a deeper relationship with their wardrobe. Through these workshops, we aim to inspire a sense of inner peace and harmony, empowering individuals to make conscious choices that align with their values and enhance their overall well-being.'
    },
    {
      content: 'Personal Styling Consultations',
      spanContent: 'At ZENI, we believe that personal style goes beyond trends, it\'s about embracing your unique essence and feeling at peace with your appearance. Our expert stylists offer personalized consultations to guide and inspire our clients on their style journey. Through thoughtful conversations and meticulous attention to detail, we curate a wardrobe that harmonizes with their individuality, fostering confidence and serenity in their everyday lives. Whether it\'s selecting the perfect ensemble for a special occasion or refining their overall style, our consultations are designed to empower our clients and help them radiate their inner beauty through their outward expression.'
    },
    {
      content: 'Gender-Neutral Design',
      spanContent: 'ZENI celebrates the beautiful diversity of individuals by offering gender-neutral fashion designs that transcend traditional norms and embrace individuality. Our expertise lies in crafting garments that blend timeless elegance with a non-binary aesthetic, allowing clients to express their true selves authentically. With meticulous attention to fit, fabric, and detailing, we create versatile pieces that can be styled effortlessly across a spectrum of identities. Our gender-neutral designs symbolize our commitment to inclusivity and our belief in a fashion world where everyone can feel comfortable and empowered to be their authentic selves.'
    },
    {
      content: 'Production Consultancy',
      spanContent: 'ZENI\'s commitment to ethical production extends beyond our own brand. We offer consultancy services to assist other fashion brands in implementing sustainable practices, promoting fair labor conditions, and reducing their environmental impact. Our experienced team provides comprehensive guidance on supply chain transparency, responsible sourcing of materials, and production processes that minimize waste and pollution. We believe that collaboration and knowledge-sharing are essential in driving industry-wide change, and through our consultancy services, we strive to support and inspire a new generation of ethical fashion pioneers.'
    },
  ];


  if (!loading) {
    let sm = ScrollSmoother.create({
      content: "#about-smooth-content",
      smooth: 2,
    });
  }

  useEffect(() => {    
    let expertisesArr = document.querySelectorAll(".item-container")
    expertisesArr.forEach(function(eachExpertise){
      const tl = gsap
      .timeline({paused: true})
      .fromTo(eachExpertise.querySelector('.item-popup'), {
        opacity: 0,
        height: "0em",
        scaleX: 0,
      }, {
        duration: 0.6,
        opacity: 1,
        height: "fit-content",
        scaleX: 1,
        transformOrigin: "50 0",
        ease: "power3",
      }, 0)
      .fromTo(eachExpertise.querySelector('.item-image'), {
        opacity: 0,
        y: "-25px",
      }, {
        opacity: 1,
        y: "0px",
        duration: 0.5,
      }, "-=0.3")
      .fromTo(eachExpertise.querySelector('.item-description'), {
        opacity: 0,
        y: "25px",
      },{
        opacity: 1,
        y: "0px",
        duration: 0.5,
      }, "-=0.3")



      eachExpertise.querySelector(".content-container").addEventListener("mouseenter", () => {
        eachExpertise.classList.add('focused')
        eachExpertise.firstChild.classList.add('focused')
        tl.play()
      });
      eachExpertise.querySelector(".content-container").addEventListener("mouseleave", () => {
        console.log('left')
        tl.reverse()
        eachExpertise.classList.remove('focused')
        eachExpertise.firstChild.classList.remove('focused')
      });

    })




    let ctx = gsap.context(() => {
      gsap.timeline()
      .from(".cinematic-shot", {
        duration: 1,
        scale: 2,
        ease: "power2",
        delay: 3.2
      },0)
      .from(".left", {
        duration: 1.5,
        x: "-100",
        opacity: 0,
        ease: "power3"
      },"<")
      .from(".right", {
        duration: 1.5,
        x: "100",
        opacity: 0,
        ease: "power3"
      },"<")
      .to(".cinematic-shot", {
        scrollTrigger: {
          trigger: ".cinematic-shot",
          start: "50% 48%",
          end: "bottom 50%",
          scrub: true
        },
        height: "200%",
      },0)

      gsap.from(".block-2-chapter", {
        scrollTrigger: {
          trigger: ".block-2-chapter",
          start: "top 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "top 40%",
          // markers: true,
          scrub: true
        },
        y: "-2vh",
        ease: "power3",
        opacity: 0,
      })

      gsap.from(".block-3-chapter", {
        scrollTrigger: {
          trigger: ".block-3-chapter",
          start: "top 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "top 40%",
          // markers: true,
          scrub: true
        },
        y: "-2vh",
        ease: "power3",
        opacity: 0,
      })

      gsap.from(".block-4-chapter", {
        scrollTrigger: {
          trigger: ".block-4-chapter",
          start: "top 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "top 40%",
          // markers: true,
          scrub: true
        },
        y: "-2vh",
        ease: "power3",
        opacity: 0,
      })

      gsap.from(".block-5-chapter", {
        scrollTrigger: {
          trigger: ".block-5-chapter",
          start: "top 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "top 40%",
          // markers: true,
          scrub: true
        },
        y: "-2vh",
        ease: "power3",
        opacity: 0,
      })
      
      gsap.from(".block-2 .timeline", {
        scrollTrigger: {
          trigger: ".block-2 .timeline",
          start: "top 20%", //top of the trigger hit the 50% mark of viewpot 
          end: "800px top",
          scrub: true,
          // markers: true,
        },
        height: "0px",
        ease: "linear",
        // opacity: 0,
      })
      gsap.from(".block-3 .timeline", {
        scrollTrigger: {
          trigger: ".block-3-chapter",
          start: "top 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "top 40%",
          scrub: true,
        },
        height: "0px",
        ease: "linear",
      })
      gsap.from(".block-5 .timeline", {
        scrollTrigger: {
          trigger: ".block-5-chapter",
          start: "top 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "top 40%",
          scrub: true,
        },
        height: "0px",
        ease: "linear",
      })

      gsap.from(".block-2 .description-1 .split-text", {
        scrollTrigger: {
          trigger: ".block-2 .description-1 .split-text",
          start: "top 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "500%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
        x: "-5vw",
        stagger: 0.1,
        ease: "power3",
        opacity: 0,
        duration: 1.5
      })

      gsap.from(".image-display-container .image-row", {
          scrollTrigger: {
            trigger: ".image-display-container .image-row",
            start: "top bottom", //top of the trigger hit the 50% mark of viewpot 
            end: "500% 50%",
            scrub: true,
            // toggleActions: "play none none reverse",
            // markers: true,
          },
          y: "5vw",
          stagger: 0.5,
          ease: "power3",
          opacity: 0,
          duration: 1.5
        })



      gsap.from(".block-2 .description-3 .split-text", {
        scrollTrigger: {
          trigger: ".block-2 .description-3 .split-text",
          start: "top bottom", //top of the trigger hit the 50% mark of viewpot 
          end: "bottom 60%",
          toggleActions: "play none none reset",
          // markers: true,
        },
        x: "10vw",
        stagger: 0.15,
        ease: "power3",
        opacity: 0,
        duration: 1.5
      })
      
      gsap.from(".block-2 .description-2", {
        scrollTrigger: {
          trigger: ".block-2 .description-2",
          start: "top 95%", //top of the trigger hit the 50% mark of viewpot 
          // end: "bottom 60%",
          toggleActions: "play none none reset",
          // markers: true,
        },
        y: "5vw",
        opacity: 0,
        ease: "power3",
        duration: 1.5
      })

      gsap.from(".block-3 .description-1", {
        scrollTrigger: {
          trigger: ".block-3 .description-1",
          start: "top 95%", //top of the trigger hit the 50% mark of viewpot 
          // end: "bottom 60%",
          toggleActions: "play none none reset",
          // markers: true,
        },
        y: "3vw",
        opacity: 0,
        ease: "power3",
        duration: 1.5
      })

      gsap.from(".block-3 .section-title", {
        scrollTrigger: {
          trigger: ".block-3 .section-title",
          start: "top 95%", //top of the trigger hit the 50% mark of viewpot 
          // end: "bottom 60%",
          toggleActions: "play none none reset",
          // markers: true,
        },
        x: "-4vw",
        opacity: 0,
        ease: "power3",
        duration: 1.5
      })

      gsap.from(".block-4 .creator", {
        scrollTrigger: {
          trigger: ".block-4 .creator",
          start: "top 95%", //top of the trigger hit the 50% mark of viewpot 
          // end: "bottom 60%",
          toggleActions: "play none none reset",
          // markers: true,
        },
        x: "-3vw",
        opacity: 0,
        ease: "power3",
        duration: 1
      })

      gsap.from(".block-4 .description-1", {
        scrollTrigger: {
          trigger: ".block-4 .description-1",
          start: "top bottom", //top of the trigger hit the 50% mark of viewpot 
          // end: "bottom 60%",
          toggleActions: "play none none reset",
          // markers: true,
        },
        y: "3vw",
        opacity: 0,
        ease: "power3",
        duration: 1.5
      })

      gsap.from(".block-4 .description-2 .split-text", {
        scrollTrigger: {
          trigger: ".block-4 .description-2 .split-text",
          start: "top bottom", //top of the trigger hit the 50% mark of viewpot 
          toggleActions: "play none none reset",
          // markers: true,
        },
        x: "-5vw",
        stagger: 0.1,
        ease: "power3",
        opacity: 0,
        duration: 1.5
      })

      gsap.from(".block-5 .description-1", {
        scrollTrigger: {
          trigger: ".block-5 .description-1",
          start: "top bottom", //top of the trigger hit the 50% mark of viewpot 
          // end: "bottom 60%",
          toggleActions: "play none none reset",
          // markers: true,
        },
        y: "3vw",
        opacity: 0,
        ease: "power3",
        duration: 1.5
      })

      gsap.from(".item-container ", {
        scrollTrigger: {
          trigger: ".item-container ",
          start: "-30% 85%", //top of the trigger hit the 50% mark of viewpot 
          end: "500%",
          toggleActions: "play none none reset",
        },
        x: "5vw",
        stagger: 0.2,
        ease: "power3",
        opacity: 0,  
        duration: 1.3    
      })

      gsap.from(".group", {
        scrollTrigger: {
          trigger: ".group",
          start: "top bottom", //top of the trigger hit the 50% mark of viewpot 
          end: "bottom top",
          scrub: true
        },
        scale: 1.15
      })
      gsap.from(".plant", {
        scrollTrigger: {
          trigger: ".plant",
          start: "top bottom", //top of the trigger hit the 50% mark of viewpot 
          end: "bottom top",
          scrub: true
        },
        scale: 1.15
      })



    })
    return () => ctx.revert();
  }, [])

  return (
    <div id="about-smooth-content" className="page-container">
      <div className="image-wrapper">
        <img className="cinematic-shot" src="img/cinematic-shot2.jpg" alt="landing-page-shot"></img>
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
        <div className="chapter small-des block-2-chapter">
          <span>chapter I</span>
        </div>
        <div className="description-1">
          <span className="split-text">ZENI values authenticity,</span>
          <span className="split-text">mindfulness, and</span>
          <span className="split-text">sustainability through</span>
          <span className="split-text">embracing individuality with</span>
          <span className="split-text">our gender-neutral designs.</span>
        </div>
          <div className="timeline"></div>
        <section className="image-display-container">
          <div className="image-row row-1">
            <img src="img/models/F5.jpg"></img>
            <img src="img/models/M3.jpg"></img>
            <img src="img/models/M2.jpg"></img>
            <img src="img/models/F3.jpg"></img>
            <img src="img/models/F4.jpg"></img>
          </div>
          <div className="image-row row-2">
            <img src="img/models/M5.jpg"></img>
            <img src="img/models/F1.jpg"></img>
            <img src="img/models/F6.jpg"></img>
          </div>
          <div className="image-row row-3">
            <img src="img/models/G1.jpg"></img>
          </div>
        </section>

        <div className="description-2 small-des">
          <span>We prioritize the well-being of our customers and the environment by using high-quality materials, promoting ethical production practices, and fostering a sense of harmony in everything we do</span>
        </div>

        <div className="description-3">
          <span className="split-text">We believe in the power of</span> 
          <span className="split-text">embracing one's true self</span> 
          <span className="split-text">and expressing individuality</span> 
          <span className="split-text">through our gender-neutral,</span> 
          <span className="split-text">timeless designs.</span>
        </div>

        <div className="description-4">
          <span>ZENI prioritize the <i>well-being</i> of our customers and the environment by using high-quality materials, promoting <i>ethical</i> production practices, and fostering a sense of <i>harmony</i> in everything we do</span>
        </div>

      </section>



      <section className="block-wrapper block-3">
        <div className="chapter small-des block-3-chapter">
          <span>chapter II</span>
        </div>
        <div className="timeline"></div>
        <div className="section-title">
          <span>our expertise</span>
        </div>

        <div className="expertise-list-container">

          {divData.map((item, index) => (
            <div
              key={index}
              className={`item-container item-${index + 1}`}
            >
              <span className="content-container">
                {item.content}
              </span>

                <div className={`item-popup item-popup-container-${index + 1}`}>
                  <div className="item-image-container">
                    <img className="item-image" src={`img/expertise/e${index + 1}.jpg`} alt={`img/expertise/e${index + 1}.jpg`}></img>
                  </div>
                  <div className="item-description">{item.spanContent}</div>
                </div>


            </div>
          ))}
        </div>

        <div className="image-container">
          <div className="image-wrap">
            <img className="group" src="img/models/G2.jpg"></img>
          </div>
          <div className="image-wrap">
           <img className="plant" src="img/N3.jpg"></img>
          </div>
        </div>

        <div className="description-1">
          <span>Committed to creating a <i>peaceful</i> and <i>elegant</i> experience for customers, our team members are dedicated to delivering excellence in every aspect of their work.</span>
        </div>

        <div className="description-2 small-des">
          <span>Indulge in the transformative experience of ZENI. Embrace the peace and elegance that our gender-neutral, timeless designs exude. We invite you to elevate your style and radiate serenity. Whether it's a personalized styling consultation, an exploration of sustainable fashion education, or the creation of a versatile capsule wardrobe, our dedicated team is here to guide you on a journey of self-expression and mindful fashion choices.</span>
          <br />
          <br />
          <span>
            Step into the world of ZENI, where elegance meets serenity, and discover the joy of clothing that speaks to your soul.
          </span>
        </div>
      </section>

      <section className="block-wrapper block-4">
        <div className="intro-container">
          <div className="chapter small-des block-4-chapter">
            <span>chapter III</span>
          </div>
          <div className="creator">
            <span>Michael Martins</span>
          </div>
        </div>

        <div className="author-container">
          <div className="description-1">
            <span>The founder and creator <i>of</i> </span>
            <span>ZENI Group</span>
          </div>

          <img src="img/models/creator.jpg" alt="creator"></img>

          <div className="description-2">
              <span className="split-text">Meet Michael Martins, the creative force steering ZENI towards timeless elegance and</span>
              <span className="split-text">serenity. Armed with a degree in <i>Sustainable Fashion</i> and a wealth of hands-on experience,</span>
              <span className="split-text">Michael seamlessly blends design expertise with a commitment to eco-conscious practices.</span>
              <span className="split-text">His passion for <i>gender-neutral</i> fashion and sustainability defines ZENI's ethos, where each</span>
              <span className="split-text">garment is a statement of authenticity and mindfulness.</span>
          </div>
        </div>

      </section>


      <section className="block-wrapper block-5">
        <div className="timeline"></div>
        <div className="chapter small-des block-5-chapter">
          <span>chapter IV</span>
          <span>THE TEAM</span>
        </div>
        <div className="description-1">
          <span>Meet</span>
          <span>the team</span>
        </div>

        <div className="member-container">
          <div className="member-wrapper">
            <img className="profile-pic" src="img/models/team1.jpg"></img>
            <span className="member-name">Zhang<br/>Wei</span>
            <span className="member-description">ZENI's meticulous designer, graduated from Beijing Institute of Fashion Technology. With a keen eye for sustainable fashion, he has collaborated on acclaimed collections.</span>
          </div>

          <div className="member-wrapper">
            <img className="profile-pic" src="img/models/team2.jpg"></img>
            <span className="member-name">Aisha<br/>Malik</span>
            <span className="member-description">ZENI's sustainability advocate, holds a degree in Environmental Science from Kuala Lumpur University. She intertwines her passion for fashion and sustainability to craft designs that resonate with eco-conscious values, enriching ZENI's commitment to a harmonious and mindful approach.</span>
          </div>
        </div>


      </section>
    </div>
  )
}