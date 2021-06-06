import { React, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Main from './Sections/Main';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Scrolldown from './Components/Scrolldown.js';
import ReactGA from 'react-ga';



//styling
import './App.css';


function App() {
  ReactGA.initialize('G-Q09J7SHZYX');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <Navbar />
      <Scrolldown />
      <Main />
      <About />
      <Contact />   
    </div>
  );
}

export default App;
