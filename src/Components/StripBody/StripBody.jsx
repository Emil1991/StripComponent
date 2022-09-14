import React from 'react'
import {StripItem} from "./StripItem/StripItem";
import "./StripBody.scss";
import styled from 'styled-components';

export const StripBody = ({totalData,stripItems})=>{
 const totalStripCount=stripItems.map((item=>item.count)).reduce((sumCount,currCount)=>sumCount+currCount,0);
 return <div className='stripBody'>
  {totalData?<StripItem
      title={totalData.title}
      count={totalData.count}
      itemStatus={totalData.itemStatus}
      />
      :null}
  <div className='stripItemsContainer'>
   <div className='stripItems'>
    {stripItems.map(item=>{
     const {title,count,icon,color}=item;
     return <StripItem
         title={title}
         count={count}
         color={color}
         icon={icon}
     />
    })}
   </div>
   <div className='stripItemsBar'>
    {stripItems.map(item=>{
     const {count,color}=item;
     const StripItemBar=styled.div`
      height:2px;
      border-radius: 6px;
      background-color: ${color};
      width:${(count/totalStripCount)*100}%;
     `;
     return <StripItemBar className='stripItemBar'/>
    })}
   </div>
  </div>

 </div>
}
