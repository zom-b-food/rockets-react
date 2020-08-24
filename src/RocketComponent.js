import React, { Component } from 'react';
import Ships from './Ships';
import Cores from './Cores';
import Links from './Links';
import General from './General';

class RocketComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {   
      items: []
    }
   
  }
  
   componentDidMount() {
    //this.setState({ isLoading: true })
     fetch('https://cors-anywhere.herokuapp.com/http://www.adam-marsh.com/data.json')
       .then(res => res.json())
       .then(json => {
         this.setState({        
           items: json
         })
       });
   }
    
    render() { 
      
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-3"><h5>Ships</h5></div>
                    <div className="col-3"><h5>Cores</h5></div>
                    <div className="col-3"><h5>Links</h5></div>
                    <div className="col-3"><h5>Top Tags</h5></div>
                </div>
                <div className="row">
                    <div className="col-3"><Ships></Ships></div>
                    <div className="col-3"><Cores></Cores></div>
                    <div className="col-3"><Links></Links></div>
                    <div className="col-3"><General></General></div>
                </div>                				   
          </div>
        );
    }                                
}

export default RocketComponent
    