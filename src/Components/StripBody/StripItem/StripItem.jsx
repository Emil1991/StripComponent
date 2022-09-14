import React from 'react';
import styled from 'styled-components';
import './StripItem.scss';



export const StripItem=({title,count,icon,itemStatus,color})=>{
    const StripItemColorStick=styled.div`
    background-color: ${color};
      height:12px;
      width:2px;
      border-radius: 1px;
      margin-right:8px;
`;
    return <div className="stripItem">
        <div className="stripItemHeader">
            {color?<StripItemColorStick/>:null}
            <div className="stripItemTitle">
                {title}
            </div>
        </div>
        <div className="stripItemBody">
            {icon?<div className="stripItemIcon">
                <img alt={'fff'} src={require(`../../../Assets/Icons/${icon}`)}/>
            </div>:null}
            <div className="stripItemCount">{count}</div>
            {itemStatus?<div className="stripItemIncrease"></div>:null}
        </div>
    </div>
}
