import React, { useState } from 'react';
import styled from "@emotion/styled";

const InputAge=()=>{
    return(
        <>
            <IPAge>
                <p>나이</p>
                <div className={'inputElem'}>
                    <input
                        className={'inputA'}
                        type={"number"}
                        placeholder={'나이를 숫자로만 입력해주세요'}
                        min={'0'}
                        max={'150'}
                    />
                </div>
            </IPAge>
        </>
    )
}

const IPAge=styled.div`
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
  
  .inputElem{
    width: 654px;
    height: 100px;
    background-color: #FAFAFA;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .inputA{
      width: 464px;
      height: 100px;
      flex-shrink: 0;
      margin: 0 0 0 33px;

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
      
      //-webkit-appearance: none;
      //appearance: none;
      
      ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
      ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
export default InputAge;