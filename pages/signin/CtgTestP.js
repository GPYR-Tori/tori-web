import React,{useState} from "react";
import CtgTestCd from "@/pages/signin/CtgTestCd";

const CtgTestP=()=>{
    const[testEmailP,setTestEmailP]=useState('');

    const handleTest=(e)=>{
        setTestEmailP(e);
        console.log(testEmailP);
    };

    return(
        <>
            <div>
                <CtgTestCd
                    onEmailChange={handleTest}/>
                <p>tlqkf : {testEmailP}</p>
            </div>
        </>
    );
};

export default CtgTestP;