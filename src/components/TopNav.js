
import "./TopNav.scss"
import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function TopNav(props) {

  const {loading, setViewLoad, view} = props

  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".top-nav-container", {
        delay: 3,
        duration: 1,
        y: "-70",
        opacity: 0
      })
    })
    return () => ctx.revert();
  }, [])

  useEffect(() => {
    let lastScrollPosition = window.scrollY;
    function handleScroll() {
      console.log('scrolling')
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      lastScrollPosition = currentScrollPosition;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`top-nav-container ${isScrollingUp ? 'hide' : ''} ${loading? '': 'navTransition'}`} 
      style={{color: `${view === "landing" || view === "default"? '#351d0de0' : '#d7c4b8ff'}`}}>
      <div className="top-nav-wrapper">
        <div className="ourwork-button">
          <span className="underline">OUR WORK</span>
        </div>
        <span className="name" onClick={() => {setViewLoad('landing')}}>ZENI</span>
        <div className="nav-selection-wrapper">
          <span className="underline" onClick={() => {setViewLoad('about')}}>ABOUT</span>
          <span className="underline" onClick={() => {setViewLoad('process')}}>PROCESS</span>
          <span className="underline">CONTACT</span>
        </div>
      </div >
    </nav>
  )
}