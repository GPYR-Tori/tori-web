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

  margin: 8.56rem auto 0 3rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputElem{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-top: 1.44rem;

    width: 40.875rem;
    height: 6.25rem;
    flex-shrink: 0;

    border-radius: 0.5rem;
    background: #FAFAFA;
    .InputEM{
      //kookoo
      display: inline-block;
      flex-shrink: 0;
      height: 100%;
      margin: 0 0 0 2.63rem;

      border: none;
      outline: none;
      background-color: transparent;


      color: #808080;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;
    }

    .inputBtn{
      margin: 0 2.25rem 0 auto;
      border: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
export default InputEmail;