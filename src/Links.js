import React, { Component } from 'react';
import data from "./data/data"; 

class Links extends Component {
	render() {
		return (
      <div>
        {
          data.links.map((link) => {
            return (
              <div>                  
                  {
                    link.patch.map((linkDetail) => {
                      return (
                        <div className="scrolling">
                          <span><strong>Patch</strong></span><br/>
                          {linkDetail.small}<br />
                          {linkDetail.large}<br />                               
                        </div>                               
                      );
                    })
                  }
                   <br/>                 
                  {
                    link.reddit.map((linkDetail) => {
                      return (
                        <div className="scrolling">
                          <span><strong>Reddit</strong></span><br/>
                          {linkDetail.campaign}<br />
                          {linkDetail.launch}<br />
                          {linkDetail.media}<br />
                          {linkDetail.recovery}<br />                       
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

export default Links;
