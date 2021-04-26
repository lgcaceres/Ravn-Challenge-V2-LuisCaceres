import React from 'react'
import People from './People'
import LoadingCell from './LoadingCell'
import NoticeCell from './NoticeCell'

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


const SideBar = ({setSelectedId}) => {

    const {loading, error, data} = useQuery(PEOPLE);

    if(loading) return (<div>
        <LoadingCell/>  
     </div>)

     if(error) return (<div>
        <NoticeCell/>  
     </div>)


    return(
        <div>
            {data.allPeople.people.map((people,id)=>(
            <People className='people' key={id} ide={people} setSelectedId={setSelectedId}/>
      ))}
        </div>
        
      
      )
}


export default SideBar;