import React, { Component } from 'react';
import data from "./data/data"; 

const shipsList = data.ships;

class Ships extends Component {
	render() {
        return (
            // Ships partial view in Column 1
             <div>
                <ul>
                {shipsList.map(s => (<li key={s}>{s}</li>))}
                </ul>
            </div>
        );
    }
} 

export default Ships;
