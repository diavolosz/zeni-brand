import logo from './logo.svg';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './components/LandingPage';
import Scrollbar from './components/Scrollbar';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true)
  let body = document.querySelector('body')

  useEffect(() => {
    body.classList.add('disabled-scroll')
    setTimeout(() => {
      setLoading(false)
      body.classList.remove('disabled-scroll')
    }, 4000)
  }, [])

  return (
    <div className={`App ${loading? "disabled-scroll": ""}`}>

      <Scrollbar />

      {loading? <LoadingScreen /> : null}
    
      
      <LandingPage />

    </div>
  );
}

export default App;
