import React,{useState} from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Information  from './components/Information'

import {Container, Row, Col} from 'react-bootstrap';


import './App.css'

function App() {

  const [selectedId, setSelectedId] = useState('cGVvcGxlOjE=');

  


  return (
    <div >
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col>
            <SideBar setSelectedId={setSelectedId}/>
          </Col>
          <Col>
            <Information  selectedId={selectedId}/>
          </Col>
        </Row>

      </Container>
        
      </div>
  );
}

export default App;