import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      

      <div className='App'>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Libreria Uzumaki</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
       
      </div>
    )
  }
}

export default App;