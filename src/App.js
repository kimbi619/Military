import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Home />

      </div>
      {/* <img src={landing} className="" alt="landing img" /> */}
    </div>
  );
}

export default App;
