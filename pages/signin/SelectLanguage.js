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
                    <button className={'inputBtn'}>선택</button>
                </form>
            </SelectL>
        </>
    )
}

const SelectL=styled.div`
  display: flex;

  width: 654px;
  height: 100px;
  background-color: #FAFAFA;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  p{
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 23px;
  }

  .selectLang{
    width: 464px;
    height: 100px;
    margin: 0 0 0 33px;

    //kookoo
    display: inline-block;
    flex-shrink: 0;

    border: none;
    outline: none;
    background-color: #FAFAFA;;
    color: #808080;

    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    select::-ms-expand{
      display: none;
    }
    
    .selLang{
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.56px;
    }
  }
  .inputBtn{
    width: 89px;
    height: 59px;
    margin-left: 30px;
    //flex-shrink: 0;

    border: none;
    background-color:#B3B3B3;
    border-radius: 10px;

    text-align: center;
    align-items: center;
    justify-content: center;

    color: white;
    //font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover{
      background-color: #009A78;
    }
  }
`;

export default SelectLanguage;