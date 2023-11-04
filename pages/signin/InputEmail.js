import React, { useState } from 'react';
import styled from "@emotion/styled";

const InputEmail = () => {
    return (
        <>
            <IPEmail>
                <p>이메일</p>
                <div className={'inputElem'}>
                    <input
                        className={'InputEM'}
                        placeholder={'이메일을 입력해주세요'}
                    />
                    <button className={'inputBtn'}>중복확인</button>
                </div>
            </IPEmail>
        </>
    )
}

const IPEmail = styled.div`
  display: flex;
  flex-direction: column;
  margin:137px auto 21px 49px ;
  
  .inputElem{
    width: 654px;
    height: 100px;
    background-color: #FAFAFA;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .InputEM{
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
      //font-family: Pretendard;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.56px;
    }
    
    .inputBtn{
      width: 110px;
      height: 29px;
      margin-left: 30px;
      //flex-shrink: 0;
      
      border: none;
      background-color: transparent;

      color: #009A78;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  
  p{
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    margin-bottom: 23px;
  }
  
`;
export default InputEmail;