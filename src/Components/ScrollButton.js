import React, {useState} from 'react';
import {FiChevronUp} from 'react-icons/fi';
import { Button } from './Styles';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        setVisible(true)
    }
    else {
        setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FiChevronUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;