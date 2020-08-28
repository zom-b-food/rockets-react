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
      };
  }
  
   componentDidMount() {
    //this.setState({ isLoading: true })
     fetch('https://cors-anywhere.herokuapp.com/http://www.adam-marsh.com/items.json')
       .then(res => res.json())
       .then(json => {
         this.setState({        
           items: json
         })
       });
   }
    
   // prevent memory leaks
  componentWillUnmount() {
    this._isMounted = false
  }
  
  render() { 
      
        return (
            <div className="wrapper">
               
               <div className="container-fluid">
                <div className="row">
                  <div className="col-sm">
                    <div className="header">
                      <h5>Ships</h5>
                    </div>
                    <div className="data"><Ships></Ships></div>
                  </div>               
                  <div className="col-sm">
                    <div className="header">
                      <h5>Cores</h5>
                    </div>
                    <div className="data"><Cores></Cores></div>
                  </div>
                  <div className="col-sm scrolling">
                    <div className="header">
                      <h5>Links</h5>
                    </div>
                    <div className="data"><Links></Links></div>
                  </div>
                  <div className="col-sm">
                    <div className="header">
                      <h5>Tags</h5>
                    </div>
                    <div className="data"><General></General></div>
                  </div>               
                 </div>             
              </div>
          </div>
        );
    }                                
}

export default RocketComponent
    