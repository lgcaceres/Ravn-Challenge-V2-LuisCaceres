import React,{useState} from 'react';

import Header from './components/Header';
import People from './components/People';
import Information  from './components/Information'
import LoadingCell from './components/LoadingCell'
import NoticeCell from './components/NoticeCell'

import './App.css'

import {useQuery, gql} from '@apollo/client';

const PEOPLE = gql 
`
  {
    allPeople {
      people{
        id
      }
    }
  }

`



function App() {

  const [selectedId, setSelectedId] = useState('empty');

  const {loading, error, data} = useQuery(PEOPLE);
  if(loading) return (<div>
    <Header/>
    <LoadingCell/>  
  </div>)
  if(error) return (<div>
    <Header/>
    <NoticeCell/>  
  </div>)


  return (
    <div className='page'>
        <Header className='header'/>
        
        {selectedId !== 'empty' && <Information className='information' selectedId={selectedId}/>}
        
        {data.allPeople.people.map((people,id)=>(
          <People className='people' key={id} ide={people} setSelectedId={setSelectedId}/>
        ))}
        
    </div>
  );
}

export default App;