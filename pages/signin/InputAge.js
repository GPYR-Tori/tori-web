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
  margin: 2.5rem auto 0 3rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputElem{
    width: 40.875rem;
    height: 6.25rem;
    flex-shrink: 0;

    margin-top: 1.44rem;

    border-radius: 0.5rem;
    background: #FAFAFA;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .inputA{
      width: 38.245rem;
      height: 100%;
      flex-shrink: 0;
      margin: 0 0 0 2.63rem;

      border: none;
      background-color: #FAFAFA;
      outline: none;

      color: #808080;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

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