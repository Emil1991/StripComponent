import React from 'react';
import styled from 'styled-components';
import './StripItem.scss';



export const StripItem=({title,count,icon,itemStatus,color})=>{
    console.log("color",color)
    const StripItemColorStick=styled.div`
    background-color: ${color};
      height:12px;
      width:2px;
      border-radius: 1px;
`;
    return <div className="stripItem">
        <div className="stripItemHeader">
            {color?<StripItemColorStick/>:null}
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
