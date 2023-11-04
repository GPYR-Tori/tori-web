import React, { useState } from 'react';
import styled from "@emotion/styled";
import SelectGender from "@/pages/signin/SelectGender";

const InputGender = () =>{
    return(
        <>
            <IPGender>
                <p>성별</p>
                {/*<input*/}
                {/*    className={"inputGender"}*/}
                {/*    type={"text"}*/}
                {/*    placeholder={'  성별을 선택해주세요'} />*/}
                <SelectGender />
            </IPGender>
        </>
    )
}

const IPGender=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:73px auto 21px 49px;
  
  p{
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 23px;
  }

  .inputGender{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

    border: none;
    background-color: #FAFAFA;
    outline: none;

    color: #808080;
    //font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
  }
`;
export default InputGender;