import React, { Component } from 'react';
import Logo from './img/logo.png';

class FooterComponent extends Component {
    render() {
        return (
        <div className="component">
            <div id="footer">
                <div className="row">            
                    <div className="col-6">
                        <img src={Logo} alt="exclamation labs"/>
                    </div>
                    <div className="col-6 right light">
                      designed by:  <img src="http://www.adam-marsh.com/pups.png" alt="designed by..."></img>
                    </div>
                </div>              
            </div>
        </div>
        );
    }
}

export default FooterComponent
