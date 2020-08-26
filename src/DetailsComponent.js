import React, { Component } from 'react';
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://www.adam-marsh.com/items.json";

class DetailsComponent extends Component {
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
                items:json,
          })
      })
    }
    
render() {
    var { items } = this.state;   
    return (
        <div >            
            <ul>
              {items.map(item => (
                <li key={item}>
                  {item.details}
                </li>
              ))}
            </ul>   
        </div>
        );
    }
} 

export default DetailsComponent;
