import './css/App.css';
import Menu from './components/Menu';
import Router from "./router/Router";
import NoAvailable from './components/NoAvailable';
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

  const today = new Date()
  var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
  var newdate = new Date(utc + (3600000 * 2));
  const hour = newdate.getHours()

  return (
    (hour < 2 || hour > 8 ?
      <div className='App'>
        <Menu />
        <Router />
      </div>
      : <NoAvailable hour={hour} />
    ));
}

export default App;
