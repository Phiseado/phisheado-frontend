import './css/App.css';
import Menubar from './components/Menubar';
import Router from "./router/Router";
import { useEffect } from 'react';
import { reTrainUrlModel } from './api/api';

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      reTrainUrlModel()
      // once a month the url model will be retrained
    }, 2629800000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <Menubar />
      <div className="p-distance">
        <Router />
      </div>
    </div>
  );
}

export default App;
