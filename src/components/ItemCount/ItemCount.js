import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './ItemCount.css';

export default class ItemCount extends Component {
    constructor(){
        super();

        this.state = {
            count: 0,
        };

       
        
    }

    handleCounterUp = () => {
        
        this.setState({ count: this.state.count + 1 });
      };
    
      handleCounterDown = () => {
        this.setState({ count: this.state.count - 1 });
      };

    render() {
        return (

           <>
           <div className="btn-count">
                {this.state.count}
            </div>
          
            <Button positive onClick={this.handleCounterUp}> + </Button>
                <Button negative onClick={this.handleCounterDown}> - </Button>
            </>
        )
    }
}
