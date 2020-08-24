import React, { Component } from 'react';
import data from "./data/data"; 

class Links extends Component {
	render() {
    return (
      // Links partial view in Column 3
      <div>
        {
          data.links.map((link) => {
            return (
              <div key={link}>                  
                  {
                    link.patch.map((linkDetail) => {
                      return (
                        <div key={linkDetail} className="scrolling">
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
                        <div key={linkDetail} className="scrolling">
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
