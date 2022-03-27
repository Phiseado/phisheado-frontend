import './css/App.css';
import UrlList from "./components/UrlList";
import InputMessage from "./components/InputMessage";
import Statistics from "./components/Statistics";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <div className='App'>
      <HeaderBar />
      <div className="grid p-grid-overall">
        <div className="col-5 p-urllist-component">
          <UrlList />
        </div>
        <div className="col-7 p-right-component">
          <Statistics />
          <InputMessage />
        </div>
      </div>
    </div>
  );
}

export default App;
