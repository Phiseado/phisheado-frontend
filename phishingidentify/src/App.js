import './css/App.css';
import Menubar from './components/Menubar';
import Router from "./router/Router";

function App() {
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
