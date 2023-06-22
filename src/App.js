import logo from './logo.svg';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './components/LandingPage';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div className="App">
      {loading? <LoadingScreen /> : null}
    
      
      <LandingPage />

    </div>
  );
}

export default App;
