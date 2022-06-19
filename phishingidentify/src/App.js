import './css/App.css';
import Menu from './components/Menu';
import Router from "./router/Router";
import NoAvailable from './components/NoAvailable';

function App() {
  const today = new Date()
  var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
  var newdate = new Date(utc + (3600000 * 2));
  const hour = newdate.getHours()

  return (
    (hour < 2 || hour > 7 ?
      <div className='App'>
        <Menu />
        <Router />
      </div>
      : <NoAvailable hour={hour} />
    ));
}

export default App;
