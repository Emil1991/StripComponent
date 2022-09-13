import React from 'react';
import {StripHeader} from "../StripHeader/StripHeader";

export const Strip = ({title,totalDate,stripItems})=>{
    return <div className="strip">
        <StripHeader title={title}/>
    </div>
}
