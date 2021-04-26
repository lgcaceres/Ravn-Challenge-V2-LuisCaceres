import React from 'react';
import './SectionHeader.css'

const SectionHeader = (props) => {
    return(
    <div className='section'>
        <div className='header'>{props.label}</div>
    </div>    
    
    )
}

export default SectionHeader;


