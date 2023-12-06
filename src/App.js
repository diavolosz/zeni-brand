import logo from './logo.svg';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';
import AboutPage from './components/AboutPage';
import Scrollbar from './components/Scrollbar';
import { useEffect, useState } from 'react';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';

function App() {

  const [loading, setLoading] = useState(true)
  let body = document.querySelector('body')

  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 400);
    setTimeout(function() {
      body.classList.add('disabled-scroll')
    }, 600)
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
