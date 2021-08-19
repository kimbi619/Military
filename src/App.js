import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import News from './components/News';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Home />
        {/* <News /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
