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
import Process from './components/Process';

gsap.registerPlugin(ScrollSmoother)
gsap.registerPlugin(ScrollToPlugin)

function App() {



  const [loading, setLoading] = useState(true)
  const [view, setView] = useState('process')
  // const [view, setView] = useState('default')

  let body = document.querySelector('body')
  

  let showLoading = () => {
    setLoading(true)
    // body.classList.add('disabled-scroll')
    setTimeout(() => {
      setLoading(false)
      // body.classList.remove('disabled-scroll')
      // ScrollSmoother.create({
      //   content: ".App",
      //   smooth: 2,
      // });
    }, 4000)

  }

  let setViewLoad = (view) => {
    setView(view)
    showLoading()
  }

  useEffect(() => {
    showLoading()
  }, [])

  return (
    <div className={`App ${loading ? "disabled-scroll" : ""}`}>
      <TopNav loading={loading} setViewLoad={setViewLoad} view={view}/>
      <Scrollbar />

      {/* {loading ? <LoadingScreen view={view}/> : null} */}
      {/* {view === 'landing' && <LandingPage view={view}/>} */}
      {/* {view === 'default' && <LandingPage view={view}/>} */}
      {/* {view === 'about' && <AboutPage loading={loading}/>} */}

      {view === 'process' && <Process loading={loading}/>}


    </div>
  );
}

export default App;
