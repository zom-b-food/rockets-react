import React, { Component } from 'react';
import data from "./data/data"; 

class Cores extends Component {
	render() {
		return (
			// Cores partial view in Column 2
            <div>
                {
					data.cores.map((core, i) => {
						return (
							<div key={i}>
								<div>								
									<p><strong>flight: </strong>{core.flight}
									<br />
									<strong>core: </strong>{core.core}
									<br />
									<strong>landing type: </strong>{core.landing_type}
									<br />
									<strong>landpad: </strong>{core.landpad}
									</p>							
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 

export default Cores;
