// Items I'm using via import
import React, { Component } from 'react';
import NavComponent from './NavComponent';
import Popover1Component from './Popover1Component';
import Popover2Component from './Popover2Component';
import HeaderComponent from './HeaderComponent';
import RocketComponent from './RocketComponent';
import FooterComponent from './FooterComponent';
import Loading from './img/787.gif';
import './custom.scss';
//const BASE_URL = "https://api.spacexdata.com/v4/launches/latest";

// Setting State with props
class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      title: 'Crazy SpaceX Project',
      items: [],
      isLoaded: false,
    }
  }
 
  // Fetching json URL; results is json
   componentDidMount() {
    //this.setState({ isLoading: true })
     fetch('https://cors-anywhere.herokuapp.com/http://www.adam-marsh.com/data.json')
       .then(res => res.json())
       .then(json => {
         this.setState({
           isLoaded: true,
           items: json,
         })
       });
  }

  render() {
    var { isLoaded, items } = this.state;
    // show my cool loading image
    if (!isLoaded) {
      return <div className="center mt200">Loading... <img src={Loading} alt="loading json" /></div>
    }
    else {
      return (   
        // my layout and components
        <div className="App">
          <HeaderComponent />
          <NavComponent />
          <p>&nbsp;</p>
          <div className="container">
            <div className="title">
              <h1>{this.state.title}</h1>
              <div className="greetings">
                <h6>Ground Control to Major Tom...</h6>
                <p>So, my two remote co-workers (Rufus and Rutger) insisted on designing this app while
                I focused on parsing/rendering the insane json. They wanted it to be "spacey" so I guess
                that's what it is.</p>
                <p>I have to admit that this was a very intense exercise for 'Web Developer 1', but I loved
                every minute of it. Here are the components I created:
                 <ol>
                    <li>Popover1Component (Details Button)</li>
                    <li>Popover2Component (Upcoming Launches Button)</li>
                    <li>DetailsComponent (embedded in the Popover1Component)</li>
                    <li>LaunchesComponent (embedded in the Popover2Component)</li>
                    <li>RocketComponent (This is the "faux data table" but in divs that includes my partial views)
                     <ol>
                        <li>Ships</li>
                        <li>Cores</li>
                        <li>Links</li>
                        <li>General (Top Tags)</li>
                      </ol>                     
                    </li>
                    <li>HeaderComponent</li>
                    <li>FooterComponent</li>
                    <li>NavComponent (just threw this one in here to check if bootstrap was working)</li>
                  </ol></p>
              </div>
            </div>
          </div>
          <p>&nbsp;</p>  
          <div className="popovers">
            <div class="row">            
               <div class="col-6">
                <Popover1Component />
              </div>
               <div class="col-6 right">
                <Popover2Component />
              </div>
            </div>
          </div>        
          <div className="rocket-container mt25">
            <RocketComponent />
          </div>         
          <FooterComponent />
        </div>
      );    
    }
  }
}
   
export default App;
