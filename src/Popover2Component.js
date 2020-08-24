import React, { Component } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import LaunchesComponent from './LaunchesComponent';

class Popover2Component extends Component {
    
    render() {

    const popoverLeft = (
        <Popover id="popover-basic">
        <Popover.Title as="h3">Upcoming Launches</Popover.Title>
        <Popover.Content>
             <LaunchesComponent />
        </Popover.Content>
        </Popover>
    ); 

        return (
        <div>
            <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button className="btn-tiny" variant="warning">Upcoming Launches</Button>
            </OverlayTrigger>    
        </div>
            );
        }
}

export default Popover2Component
