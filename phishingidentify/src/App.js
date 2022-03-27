import './css/App.css';
import UrlList from "./components/UrlList";
import InputMessage from "./components/InputMessage";
import Statistics from "./components/Statistics";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <div className='App'>
      <HeaderBar />
      <div className="grid">
        <div className="col-5">
          <UrlList />
        </div>
        <div className="col-7">
          <div className="grid">
            <div className="col-12">
              <Statistics />
            </div>
            <div className="col-12">
              <InputMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
