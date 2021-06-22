import { React, useState } from 'react';
import Navbar from './Components/Navbar/index.js';
import Main from './Sections/Main';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Scrolldown from './Components/Scrolldown.js';
import ReactGA from 'react-ga';
import Sidebar from './Components/Sidebar/Index.js';



//styling
import './App.css';


function App() {
  ReactGA.initialize('UA-190113500-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Scrolldown />
      <Main />
      <About />
      <Contact />   
    </div>
  );
}

export default App;
