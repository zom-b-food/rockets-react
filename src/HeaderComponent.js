import React, { Component } from 'react';
import Logo from './img/logo.png';

class HeaderComponent extends Component {
    render() {
        return (
        <div className="component">
            <div id="header">
                <img src={Logo} alt="exclamation labs"/>
            </div>
        </div>
        );
    }
}

export default HeaderComponent
