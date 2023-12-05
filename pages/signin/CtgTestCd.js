import React,{useState} from "react";

const CtgTestCd=(onEmailChange)=>{
    const [email,setEmail]=useState('');

    const handleCtgTestCd=()=>{
        //email값 변경시 콜백 함수 호출
        onEmailChange(email);
    }
    return (
        <>
            <div>
                <input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder={'cibal'}/>
                <button
                    type={'button'}
                    onClick={handleCtgTestCd}>확인</button>
            </div>
        </>
    )
}

export default CtgTestCd;