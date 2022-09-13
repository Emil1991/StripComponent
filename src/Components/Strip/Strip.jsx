import React from 'react';
import {StripHeader} from "../StripHeader/StripHeader";
import {StripBody} from "../StripBody/StripBody";
import './Strip.scss';

export const Strip = ({title,totalData,stripItems})=>{
    return <div className="strip">
        <StripHeader title={title}/>
        <StripBody totalData={totalData} stripItems={stripItems} />
    </div>
}
