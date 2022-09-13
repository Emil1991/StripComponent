import React from 'react';

export const StripItem=({title,count,icon,itemStatus,color})=>{
    return <div className="stripItem">
        <div className="stripItemHeader">
            {color?<div className="stripItemColorStick"></div>:null}
            <div className="stripItemTitle">
                {title}
            </div>
        </div>
        <div className="stripItemBody">
            {icon?<div className="stripItemIcon"></div>:null}
            <div>{count}</div>
            {itemStatus?<div className="stripItemStatus"></div>:null}
        </div>
    </div>
}
