import { React } from 'react';
import Navbar from './Components/Navbar';
import Main from './Sections/Main';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Scrolldown from './Components/Scrolldown.js';


//styling
import './App.css';

function App() {
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
