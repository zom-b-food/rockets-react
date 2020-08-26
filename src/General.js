import React, { Component } from 'react';
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://www.adam-marsh.com/items.json";
class General extends Component {
    constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
    
componentDidMount() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(json => {
      this.setState({
        items: json,
      })
    });
   }  
    
    render() {
        var { items } = this.state;   
        return (
          // Tags partial view in Column 4
             <div>
            <ul>
              {items.map(item => (
                <li key={item}>
                  <strong>Name: </strong>{item.name}<br />
                  <strong>Flight #: </strong>{item.flight_number}<br />
                  <strong>Rocket: </strong>{item.rocket}<br />
                  <strong>Launchpad: </strong>{item.launchpad}<br />
                  <strong>Date (local): </strong>{item.date_local}<br />
                    <strong>ID: </strong>{item.id}<br/>
                </li>
              ))}
            </ul>
            </div>
        );
    }
} 

export default General;
