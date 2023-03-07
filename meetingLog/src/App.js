
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import {Meeting} from './components/Meeting';
import React from 'react'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="/">Home</Nav.Link>
            <Nav.Link as ={Link} to="/meeting">Meeting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    <div>
      <Routes>
        <Route path = "/meeting" element ={<Meeting/>}/>
      </Routes>

    </div>
    </div>
    
    </BrowserRouter>
    
  );
  
}

export default App;
