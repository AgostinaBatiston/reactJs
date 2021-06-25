import React, {Component} from 'react';
import './ItemCount.css';
import { Button} from 'semantic-ui-react';

class ItemCount extends Component  {
    constructor () {
        super();
        this.state = {
            counter: 1,
            stock: 10
        }
    }

    handlerPlus = () => {
        if(this.state.counter === this.state.stock) {
            this.setState({
                counter: this.state.stock
            });
        } else {
            this.setState({counter: this.state.counter + 1})
        }
    }

    handlerMinus = () => {
        if(this.state.counter === 1){
            this.setState({
                counter: 1
            });
          } else {
            this.setState({
                counter: this.state.counter - 1
            });
          }
    }

    onAdd = () => {
        alert("Producto agregado");
    }

    render() {
        return (
            <div className="card card-main">
                <div className="card-body">
                    <div className="card card-content">
                        <Button negative onClick={this.handlerMinus} > - </Button>
                        <p id="counter-value">{this.state.counter}</p>
                        <Button positive onClick={this.handlerPlus}> + </Button>
                        
                    </div>
                    <Button onClick={this.onAdd}>Agregar al carrito </Button>
                </div>
            </div>
        )
    }
}

export default ItemCount;