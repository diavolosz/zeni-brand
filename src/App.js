import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/all";
import gsap from 'gsap';


import LoadingScreen from './components/LoadingScreen';
import AboutPage from './components/AboutPage';
import Scrollbar from './components/Scrollbar';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';

gsap.registerPlugin(ScrollSmoother)
gsap.registerPlugin(ScrollToPlugin)

function App() {



  const [loading, setLoading] = useState(true)
  let body = document.querySelector('body')

  useEffect(() => {
    gsap.to(window, { duration: 0.5, scrollTo:0 });

    setTimeout(function() {
      body.classList.add('disabled-scroll')
    }, 700)
    setTimeout(() => {
      setLoading(false)
      body.classList.remove('disabled-scroll')
    }, 4000)

  }, [])

  return (
    <div className={`App ${loading ? "disabled-scroll" : ""}`}>
      <TopNav loading={loading}/>
      <Scrollbar />
      {loading ? <LoadingScreen /> : null}
      {/* <LandingPage /> */}

      <AboutPage />

    </div>
  );
}

export default App;
