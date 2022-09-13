import React from 'react';
import './StripHeader.scss'

export const StripHeader = ({title})=>{
    return <div className="stripHeader">
        <div className="stripTitle">
            {title}
        </div>
        <div className="horizontalLine"></div>
    </div>
}
