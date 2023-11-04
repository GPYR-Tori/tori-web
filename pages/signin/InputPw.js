import React, { useState } from 'react';
import styled from "@emotion/styled";

const InputPw=()=>{
    return(
        <>
            <IPpw>
                <p>비밀번호</p>
                <div className={'inputElem'}>
                    <input
                        className={'InputEM'}
                        placeholder={'영문+숫자 혼합하여 최소 8자 이상 입력해주세요'}
                    />
                </div>
            </IPpw>
        </>
    )
}

const IPpw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:73px auto 21px 49px ;
  
  p{
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 23px;
  }

  .inputElem{
    width: 654px;
    height: 100px;
    background-color: #FAFAFA;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .InputEM{
      width: 612px;
      height: 100px;
      margin: 0 0 0 33px;

      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;
      background-color: #FAFAFA;;
      color: #808080;
      //font-family: Pretendard;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.56px;
    }

`;

export default InputPw;