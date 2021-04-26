import React from 'react'

import NoticeCell from './NoticeCell'
import LoadingCell from './LoadingCell'

import './People.css'

import {useQuery, gql} from '@apollo/client';




const NOMBRES = gql 
`
  query Nombre($id : ID)
  {
    person (id:$id) {
        name
        homeworld{
          name
        }
        species{
          name
        }
      
    }
  }

`;

const People = ({ide,setSelectedId}) => {

  const id = ide.id;
  const {loading, error, data} = useQuery(NOMBRES,{variables:{id}});

  if(loading) return (<LoadingCell/>)
    if(error) return (<NoticeCell/>)
  
  const onButton=(id)=>{
    setSelectedId(id);
  }
  
  const race = (data.person.species) ? data.person.species.name : 'Human';

    return(
    <div className='people'>
      <div>
        <p className='people__name'>{data.person.name}</p>
        <p className='people__homeworld'>{race} from {data.person.homeworld.name}</p>
      </div>

      <div>
        <button onClick={()=>onButton(ide.id)}>&lt;</button>
      </div>

        
    </div>)

}

export default People;