import React from 'react'
import './Information.css'
import Info from './Info'
import SectionHeader from './SectionHeader'
import NoticeCell from './NoticeCell'
import LoadingCell from './LoadingCell'

import {useQuery, gql} from '@apollo/client';

const DATA = gql 
`
  query Info($ide: ID! )
  {
    person (id:$ide) {
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection{
        vehicles{
          name
        }
      }
      
    }
  }

`;

const Information = ({selectedId}) => {

    const ide = selectedId;
    const {loading, error, data} = useQuery(DATA,{variables:{ide},});
    

    if(loading) return (<LoadingCell/>)
    if(error) return (<NoticeCell/>)


    return(
    <div className="card-information">
        <SectionHeader label='General Information'/>
        <Info label='Eye Color' data={data.person.eyeColor}/>
        <Info label='Hair Color' data={data.person.hairColor}/>
        <Info label='Skin Color' data={data.person.skinColor}/>
        <Info label='Birth Year' data={data.person.birthYear}/>
        <SectionHeader label='Vehicles'/>
        {data.person.vehicleConnection.vehicles.map((vehicle)=>(<Info label={vehicle.name} data={''}/>))}
    </div>
        
    )

}

export default Information;