


import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import './LandingPage.scss';
import ImageDrag from './ImageDrag';







export default function LandingPage() {

  gsap.registerPlugin(Draggable)
  gsap.registerPlugin(InertiaPlugin)

  useEffect(() => {
    gsap.quickTo(".imageContainer", "x", { duration: 0.6, ease: "power3" })
    gsap.quickTo(".imageContainer", "y", { duration: 0.6, ease: "power3" })


    Draggable.create(".imageContainer", {
      type: 'x,y',
      bounds: ".boundContainer",
      edgeResistance: 0.8,
      dragResistance: 0.3,
      throwProps: true,
      overshootTolerance: 0.5,
      maxDuration: 0.75,
      inertia: true,
      cursor: 'grab',
    });

  }, []);






  return (
    <div className="landing-page-container boundContainer">
      <div className='imageContainer'>

      {/* <ImageDrag /> */}

      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      <img src='img/N3.png'></img>
      </div>
    </div>
  )
}