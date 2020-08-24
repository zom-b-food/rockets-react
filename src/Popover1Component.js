import React, { Component } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import DetailsComponent from './DetailsComponent';

class Popover1Component extends Component {
    
    render() {

    const popoverRight = (
        <Popover id="popover-basic">
        <Popover.Title as="h3">Popover1Component calling DetailsComponent</Popover.Title>
        <Popover.Content>
             <DetailsComponent />
        </Popover.Content>
        </Popover>
    ); 

        return (
        <div>
            <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                <Button className="btn-tiny" variant="warning">Details</Button>
            </OverlayTrigger>    
        </div>
            );
        }
}

export default Popover1Component
