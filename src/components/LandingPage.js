


import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import getRandomNumber from '../util/randomNumRange';
import './LandingPage.scss';
import ImageDrag from './ImageDrag';







export default function LandingPage(props) {

  gsap.registerPlugin(Draggable)
  gsap.registerPlugin(InertiaPlugin)

  let imageDataSet = [
    { src: "img/draggables/D11.jpg", sizeClass: "class-1", offSetFactor: -0.05, yOffSet: 5, xOffSet: 2, displayDelay: 4.16 },
    { src: "img/draggables/D5.jpg", sizeClass: "class-2", offSetFactor: -0.08, yOffSet: 3, xOffSet: -5, displayDelay: 4.10 },
    { src: "img/draggables/D20.jpg", sizeClass: "class-1", offSetFactor: -0.05, yOffSet: 5, xOffSet: -4, displayDelay: 4.02 },
    { src: "img/draggables/D2.jpg", sizeClass: "class-3", offSetFactor: -0.1, yOffSet: 4, xOffSet: -5, displayDelay: 4.04 },
    { src: "img/draggables/D3.jpg", sizeClass: "class-4", offSetFactor: -0.005, yOffSet: 2, xOffSet: 0, displayDelay: 3.97 },
    { src: "img/draggables/D6.jpg", sizeClass: "class-5", offSetFactor: -0.01, yOffSet: 3, xOffSet: -2, displayDelay: 4.41 },
    { src: "img/draggables/D7.jpg", sizeClass: "class-6", offSetFactor: -0.08, yOffSet: 0, xOffSet: -6, displayDelay: 4.29 },
    { src: "img/draggables/D8.jpg", sizeClass: "class-7", offSetFactor: -0.06, yOffSet: 0, xOffSet: -9, displayDelay: 3.71 },
    { src: "img/draggables/D9.jpg", sizeClass: "class-8", offSetFactor: -0.08, yOffSet: -3, xOffSet: -6, displayDelay: 4.13 },
    { src: "img/draggables/D10.jpg", sizeClass: "class-1", offSetFactor: -0.1, yOffSet: 0, xOffSet: -3, displayDelay: 3.51 },
    { src: "img/draggables/D1.jpg", sizeClass: "class-6", offSetFactor: -0.05, yOffSet: 0, xOffSet: -4, displayDelay: 4.29 },
    { src: "img/draggables/D12.jpg", sizeClass: "class-7", offSetFactor: -0.03, yOffSet: 1, xOffSet: -5, displayDelay: 3.86 },
    { src: "img/draggables/D13.jpg", sizeClass: "class-10", offSetFactor: -0.06, yOffSet: 0, xOffSet: -3, displayDelay: 4.34 },
    { src: "img/draggables/D18.jpg", sizeClass: "class-2", offSetFactor: -0.08, yOffSet: 0, xOffSet: -4.5, displayDelay: 3.77 },
    { src: "img/draggables/D15.jpg", sizeClass: "class-3", offSetFactor: -0.02, yOffSet: 4, xOffSet: 1, displayDelay: 3.57 },
    { src: "img/draggables/D16.jpg", sizeClass: "class-6", offSetFactor: -0.04, yOffSet: 4, xOffSet: -2, displayDelay: 4.01 },
    { src: "img/draggables/D17.jpg", sizeClass: "class-1", offSetFactor: -0.09, yOffSet: 0, xOffSet: -1, displayDelay: 3.57 },
    { src: "img/draggables/D14.jpg", sizeClass: "class-6", offSetFactor: -0.05, yOffSet: 3, xOffSet: 2, displayDelay: 4.43 },
    { src: "img/draggables/D19.jpg", sizeClass: "class-3", offSetFactor: -0.08, yOffSet: 0, xOffSet: 0, displayDelay: 3.88 },
    { src: "img/draggables/D4.jpg", sizeClass: "class-6", offSetFactor: -0.04, yOffSet: 0, xOffSet: -4, displayDelay: 4.45 },
    { src: "img/draggables/D21.jpg", sizeClass: "class-7", offSetFactor: -0.1, yOffSet: 0, xOffSet: -3, displayDelay: 3.97 },
    { src: "img/draggables/D22.jpg", sizeClass: "class-6", offSetFactor: -0.06, yOffSet: 0, xOffSet: 0, displayDelay: 3.67 },
    { src: "img/draggables/D23.jpg", sizeClass: "class-10", offSetFactor: -0.03, yOffSet: 0, xOffSet: -3, displayDelay: 4.43 },
    { src: "img/draggables/D24.jpg", sizeClass: "class-5", offSetFactor: -0.07, yOffSet: 0, xOffSet: -4, displayDelay: 4.18 },
    { src: "img/draggables/D26.jpg", sizeClass: "class-10", offSetFactor: -0.03, yOffSet: -1, xOffSet: 0, displayDelay: 4.43 },
    { src: "img/draggables/D25.jpg", sizeClass: "class-9", offSetFactor: 0, yOffSet: 0, xOffSet: -4, displayDelay: 4.34 },
  ]


  const [xPosition, setXPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dragRef = useRef(null);

  const { view } = props

  useEffect(() => {
    setTimeout(() => {


      let InitialPosition

      const imgDraggable = Draggable.create(".image-set", {
        type: 'x',
        bounds: ".scroller-container",
        edgeResistance: 0.8,
        dragResistance: 0.3,
        throwProps: true,
        overshootTolerance: 0.5,
        inertia: true,
        cursor: 'grab',
        zIndexBoost: false,
        onDrag: function () {
          setXPosition((this.x - InitialPosition) / InitialPosition * 100)
          // console.log('dragging', (this.x - InitialPosition))
          // console.log('dragging', (this.x - InitialPosition)/InitialPosition*100)
          gsap.to('.text', { opacity: 0, duration: 0.8 })
        },
        onThrowUpdate: function () {
          setXPosition((this.x - InitialPosition) / InitialPosition * 100)
          // console.log('throwing', (this.x - InitialPosition))
          // console.log('throwing', (this.x - InitialPosition)/InitialPosition*100)
        },
        onThrowComplete: function () {
          gsap.to('.text', { opacity: 1, duration: 0.8 })
        }
      })[0];

      //find the width of draggable to set mid point on initial
      let width = imgDraggable.minX
      gsap.set('.image-set', { x: `${width / 2}` })

      //set initial position for future update 
      InitialPosition = imgDraggable.x

      // Event listener for window resize
      // Add event listener for window resize
      const handleResize = () => { setWindowWidth(window.innerWidth) };
      window.addEventListener('resize', handleResize);

    }, 100);
  }, [windowWidth]);



  useEffect(() => {
    let imgDisplayArr = document.querySelectorAll('.imgDisplay')
    imgDisplayArr.forEach((el, index) => {
      gsap.fromTo(el, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1.8 + Math.random() * (2.5 - 1.8),
        delay: imageDataSet[index].displayDelay - 0.08
      })
    })
  }, [])



  return (
    <div className="landing-page-container">
      <div className='scroller-container'>

        <div ref={dragRef} className='image-set'>
          {imageDataSet.map((imgData, index) => (
            <img
              key={index}
              src={imgData.src}
              className={`${imgData.sizeClass} imgDisplay`}
              // style={{transform: `translateX(${imgData?.xOffSet}px)`}}
              style={{
                transform: `translateX(${(xPosition * imgData?.offSetFactor) + imgData?.xOffSet}dvw) translateY(${imgData.yOffSet}dvh)`,
              }}
              alt={imgData.src}
            />
          ))}
        </div>
      </div>

      <div className='background-pattern-container'>
        <div className='top pattern-row'>
          <span className='text'>Tranquil Styling</span>
          <span className='text'>Mindfulness Workshops</span>
          <span className='text'>Sustainable Fashion</span>
        </div>
        <div className='mid pattern-row'>
          <span className='text'>Capsule Wardrobe</span>
          <span className='text'>Styling Consultations</span>
        </div>
        <div className='bot pattern-row'>
          <span className='text'>Gender-Neutral Design</span>
          <span className='text'>Renewal Services</span>
          <span className='text'>Production Consultancy</span>
        </div>
      </div>


      <div className='geo-pattern'>
        <div className='top-right'></div>
        <div className='bot-right'></div>
        <div className='skew-top-left'></div>
        <div className='skew-top-right-1'></div>
        <div className='skew-top-right-2'></div>
        <div className='skew-bot-left'></div>
      </div>

      <div className='slogan-container'>
        <p>ZENI is a clothing-based creative studio that embodies neutrality, elegance, and peacefulness in each meticulously crafted artworks.</p>
      </div>
    </div>
  )
}