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

export default InputLanguage;