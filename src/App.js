import logo from './logo.svg';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './components/LandingPage';
import Scrollbar from './components/Scrollbar';
import { useEffect, useState } from 'react';
import TopNav from './components/TopNav';

function App() {

  const [loading, setLoading] = useState(true)
  let body = document.querySelector('body')

  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
    body.classList.add('disabled-scroll')
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

      <LandingPage />

    </div>
  );
}

export default App;
