import React from 'react'
import './StripContainer.scss'
import {Strip} from "../Strip/Strip";

export const StripContainer=({stripData=[]})=>{
    return <div className="stripContainer">
        {stripData.map((strip)=>{
            const {title,totalData,stripItems}=strip;
            return <Strip
                title={title}
                totalData={totalData}
                stripItems={stripItems}
            />
        })}
    </div>
}
