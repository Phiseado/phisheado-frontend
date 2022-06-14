import './css/App.css';
import Menu from './components/Menu';
import Router from "./router/Router";
import { useEffect } from 'react';
import { reTrainUrlModel } from './api/api';

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      reTrainUrlModel()
      // once every 20 days the url model will be retrained
    }, parseInt(20 * 24 * 60 * 60 * 1000));
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <Menu />
      <Router />
    </div>
  );
}

export default App;
