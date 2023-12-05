import React from 'react';
import LowComponent from "@/pages/signin/LowComponent";
const HignTest=()=>{
    const highFunction=(text)=>{
        console.log(text);
    }
    return(
        <>
            <LowComponent
                propFunc={highFunction} />
        </>
    )
};

export default HignTest;