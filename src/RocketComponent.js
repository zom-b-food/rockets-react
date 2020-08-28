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
                <div className="row">
                    <div className="col-3 first ships"><h5 className="sort">Ships</h5></div>
                    <div className="col-3 second cores"><h5 className="sort">Cores</h5></div>
                    <div className="col-3 third links"><h5 className="sort">Links</h5></div>
                    <div className="col-3 tags"><h5 className="sort">Tags</h5></div>
                </div>
                <div className="row">
                    <div className="col-3 first"><Ships></Ships></div>
                    <div className="col-3 second"><Cores></Cores></div>
                    <div className="col-3 third"><Links></Links></div>
                    <div className="col-3"><General></General></div>
                </div> 
            <br /><br />
               <div className="container-fluid">
                <div className="row">
                  <div className="col-sm">
                    <div className="first ships">
                      <h5 className="sort">Ships</h5>
                    </div>
                      <div><Ships></Ships></div>
                  </div>               
                  <div className="col-sm">
                    <div className="second cores">
                      <h5 className="sort">Cores</h5>
                    </div>
                      <div><Cores></Cores></div>
                  </div>
                  <div className="col-sm scrolling">
                    <div className="third links">
                      <h5 className="sort">Links</h5>
                    </div>
                      <div><Links></Links></div>
                  </div>
                  <div className="col-sm">
                    <div className="tags">
                      <h5 className="sort">Tags</h5>
                    </div>
                      <div><General></General></div>
                  </div>               
                 </div>             
              </div>
          </div>
        );
    }                                
}

export default RocketComponent
    