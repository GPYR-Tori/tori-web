import React, { useState } from 'react';
import styled from "@emotion/styled";
import SelectGender from "@/pages/signin/signinComponents/SelectGender";

const InputGender = () =>{
    const [gender,setGender]=useState('');
    return(
        <>
            <IPGender>
                {/*<p>성별</p>*/}
                <p>Gender</p>
                {/*<input*/}
                {/*    name='gender'*/}
                {/*    id='gender'*/}
                {/*    value={gender||""}*/}
                {/*    onChange={(e)=>setGender(e.target.value)}*/}
                {/*    className={"inputGender"}*/}
                {/*    placeholder={'  성별을 선택해주세요'} />*/}
                <SelectGender
                    name='gender'
                    id='gender'
                    value={gender||""}
                    onChange={(e)=>setGender(e.target.value)}
                    className={"inputGender"}
                />
            </IPGender>
        </>
    )
}

const IPGender=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

`;
export default InputGender;