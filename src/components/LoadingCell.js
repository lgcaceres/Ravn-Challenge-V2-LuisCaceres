import React from 'react'
import './LoadingCell.css'
import {Spinner} from 'react-bootstrap'

const LoadingCell = ()=>{
    return(
        <div className='load'>
            <Spinner animation="border" size="sm" role="status"/>
            <div >Loading</div>
        </div>
        
    )
}

export default LoadingCell;