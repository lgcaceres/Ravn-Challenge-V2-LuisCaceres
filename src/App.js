import React,{useState} from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Information  from './components/Information'

import {Container, Row, Col} from 'react-bootstrap';


import './App.css'

function App() {

  const [selectedId, setSelectedId] = useState('empty');


  return (
    <div >
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col md={3}>
            <SideBar setSelectedId={setSelectedId}/>
          </Col>
          <Col md={6}>
            {selectedId !== 'empty' && <Information  selectedId={selectedId}/>}
          </Col>
        </Row>

      </Container>
        
      </div>
  );
}

export default App;