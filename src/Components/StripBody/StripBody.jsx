import React from 'react'
import {StripItem} from "./StripItem/StripItem";
import "./StripBody.scss"

export const StripBody = ({totalData,stripItems})=>{
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
     />
    })}
   </div>
   <div className='stripItemsBar'>HHH</div>
  </div>

 </div>
}
