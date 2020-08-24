import React, { Component } from 'react';
import data from "./data/data"; 

const shipsList = data.ships;

class Ships extends Component {
	render() {
        return (
             <div>
                <ul>
                {shipsList.map(s => (<li>{s}</li>))}
                </ul>
            </div>
        );
    }
} 

export default Ships;
