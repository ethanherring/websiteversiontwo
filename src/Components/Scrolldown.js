import { React, Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from './Styles';
import {FiChevronDown} from 'react-icons/fi';
import { scrollMore } from 'react-scroll/modules/mixins/animate-scroll';



class Scrolldown extends Component {

    getWindowDimensions() {
        const { innerHeight: height } = window;
        return {
          height
        };
      }

    scrollSection = () =>{
        //scrollMore(window);
    }
    
    render() {
        //Render button to scroll down by 1 section
        return(
            <div className="scrollDownArrow">
            <Button>
                <FiChevronDown onClick={this.scrollSection}></FiChevronDown>
            </Button>
            </div>
        );
    }
}

export default Scrolldown