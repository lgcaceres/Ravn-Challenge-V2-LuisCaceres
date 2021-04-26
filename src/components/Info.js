import React from 'react'

import './Info.css'

const Info = (props) => {
    return(
        <div className='data-cell'>
            <div className='label'>{props.label}</div>
            <div className='value'>{props.data}</div>
        </div>
        
    )

}

export default Info;