import { React, Component } from 'react';
import ReactGA from 'react-ga';

class Main extends Component {
    state = {};
    

    render() {
        ReactGA.initialize('G-LN1KCMZQFC');
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div className="main-section" id="main">
                <div className="main-text" id="main-text">
                        <h1>Hey, I'm Ethan</h1>
                </div>
            </div>
        );
    }

}

export default Main;