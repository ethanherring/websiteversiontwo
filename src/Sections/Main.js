import { React, Component } from 'react';
import Scrolldown from '../Components/Scrolldown.js';

class Main extends Component {
    state = {};
    render() {
        return (
            <div className="main-section" id="main">
                <div className="main-text" id="main-text">
                        <h1>Hey, I'm Ethan</h1>
                </div>
                <Scrolldown />
            </div>
        );
    }

}

export default Main;