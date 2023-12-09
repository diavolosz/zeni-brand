import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


import LoadingScreen from './components/LoadingScreen';
import AboutPage from './components/AboutPage';
import Scrollbar from './components/Scrollbar';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';

gsap.registerPlugin(ScrollSmoother)

function App() {



  const [loading, setLoading] = useState(true)
  let body = document.querySelector('body')

  useEffect(() => {
    setTimeout(function() {
      body.classList.add('disabled-scroll')
    }, 1200)
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
