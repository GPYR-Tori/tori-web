import React, { useState } from 'react';
import styled from "@emotion/styled";
import SelectLanguage from "@/pages/signin/SelectLanguage";

const InputLanguage=()=>{
    return(
        <>
            <IPLanguage>
                <p>언어</p>
                {/*<input*/}
                {/*    className={"inputLang"}*/}
                {/*    type={"text"}*/}
                {/*    placeholder={'  언어를 선택해주세요'} />*/}
                <SelectLanguage />
            </IPLanguage>
        </>
    )
}

const IPLanguage=styled.div`
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
  
  .inputLang{
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

export default InputLanguage;