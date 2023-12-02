
import "./TopNav.scss"
import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function TopNav(props) {

  const {loading} = props

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
    <nav className={`top-nav-container ${isScrollingUp ? 'hide' : ''} ${loading? '': 'navTransition'}`}>
      <div className="top-nav-wrapper">
        <div className="ourwork-button">
          <span className="underline">OUR WORK</span>
        </div>
        <span className="name">ZENI</span>
        <div className="nav-selection-wrapper">
          <span className="underline">ABOUT</span>
          <span className="underline">PROCESS</span>
          <span className="underline">CONTACT</span>
        </div>
      </div >
    </nav>
  )
}