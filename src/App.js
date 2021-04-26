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
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          
          <SideBar setSelectedId={setSelectedId}/>
          
          <Information  selectedId={selectedId}/>
          
        </Row>
      </Container>
        
      </div>
  );
}

export default App;