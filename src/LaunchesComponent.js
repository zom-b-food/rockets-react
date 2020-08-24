import React, { Component } from 'react';
import data from "./data/data"; 

class LaunchesComponent extends Component {
	render() {
		return (
      <div>
        {
          data.launches.map((launch) => {
            return (
              <div>                  
                  {
                    launch.one.map((launchDetail) => {
                      return (
                        <div className="scrolling">                       
                          {launchDetail.date}<br />
                          {launchDetail.vehicle}<br />                               
                        </div>                               
                      );
                    })
                  }
                    <br />  
                    {
                    launch.two.map((launchDetail) => {
                      return (
                        <div className="scrolling">                        
                          {launchDetail.date}<br />
                          {launchDetail.vehicle}<br />                               
                        </div>                               
                      );
                    })
                  }
                    <br/>
                  {
                    launch.three.map((launchDetail) => {
                      return (
                        <div className="scrolling">
                        
                          {launchDetail.date}<br />
                          {launchDetail.vehicle}<br />                   
                        </div>                         
                      );
                    })
                }                     
                 <br/>           
                </div>                    
            );
          })
        }     
            </div>
        );
    }
} 

export default LaunchesComponent;
