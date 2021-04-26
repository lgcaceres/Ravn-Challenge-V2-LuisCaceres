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
      <Container>
      <Header />
        
        {selectedId !== 'empty' && <Information className='information' selectedId={selectedId}/>}
        
        <SideBar setSelectedId={setSelectedId}/>
      </Container>
        
      </div>
  );
}

export default App;