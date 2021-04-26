import React,{useState} from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Information  from './components/Information'


import './App.css'

function App() {

  const [selectedId, setSelectedId] = useState('empty');

  


  return (
    <div className='page'>
        <Header className='header'/>
        
        {selectedId !== 'empty' && <Information className='information' selectedId={selectedId}/>}
        
        <SideBar setSelectedId={setSelectedId}/>
        
    </div>
  );
}

export default App;