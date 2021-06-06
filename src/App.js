import { React } from 'react';
import Navbar from './Components/Navbar';
import Main from './Sections/Main';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Scrolldown from './Components/Scrolldown.js';
import ReactGA from 'react-ga';

//styling
import './App.css';

function App() {
  return (
    <div className="App">
      {
      ReactGA.initialize('G-LN1KCMZQFC')
      }
      {
      ReactGA.pageview(window.location.pathname + window.location.search)
      }
      <Navbar />
      <Scrolldown />
      <Main />
      <About />
      <Contact />   
    </div>
  );
}

export default App;
