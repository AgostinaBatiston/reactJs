import React, { Component } from 'react'
import './ItemCount.css';

export default class ItemCount extends Component {
    constructor(){
        super();

        this.state = {
            count: 0,
        };
    }


    render() {
        return (

            <div className="btn-count">
                {this.state.count}
            </div>
        )
    }
}
