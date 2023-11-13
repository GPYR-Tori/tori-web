import React, { useState } from 'react';
import styled from "@emotion/styled";

const SelectLanguage=()=>{
    return(
        <>
            <SelectL>
                <form action="#">
                    <select className={'selectLang'} name="language" id="lang">
                        <option className={'selLang'} value="select">언어를 선택하세요</option>
                        <option className={'selUsa'} value="usa">영어</option>
                        <option className={'selViet'} value="vietnam">베트남어</option>
                        <option className={'selJa'} value="japan">일본어</option>
                        <option className={'selCh'} value="china">중국어</option>
                        <option className={'selTh'} value="thai">태국어</option>
                    </select>
                </form>
                <button className={'inputBtn'}>선택</button>
            </SelectL>
        </>
    )
}

const SelectL=styled.div`
  display: flex;
  background-color: #FAFAFA;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 1.44rem;

  width: 40.875rem;
  height: 6.25rem;
  flex-shrink: 0;

  p{
    color: #808080;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .selectLang{
    margin: 0 0 0 2.63rem;
    //kookoo
    display: inline-block;
    flex-shrink: 0;

    border: none;
    outline: none;
    background-color: transparent;

    color: #808080;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    select::-ms-expand{
      display: none;
    }
  }
  .inputBtn{
    width: 5.5625rem;
    height: 3.3125rem;
    flex-shrink: 0;

    margin: auto 1.31rem auto auto;

    border: none;
    outline: none;
    border-radius: 0.625rem;
    background: #D9D9D9;

    text-align: center;
    align-items: center;
    justify-content: center;

    color: #FFF;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0275rem;

    &:hover{
      background-color: #009A78;
    }
  }
`;

export default SelectLanguage;