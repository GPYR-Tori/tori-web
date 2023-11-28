import React, { useState } from 'react';
import styled from "@emotion/styled";

const InputNickname=()=>{
    return(
        <>
            <IPNickname>
                <p>닉네임</p>
                <div className={'inputElem'}>
                    <input
                        className={'InputEM'}
                        placeholder={'닉네임을 입력해주세요'}
                    />
                    <button className={'inputBtn'}>중복확인</button>
                </div>
            </IPNickname>
        </>
    )
}

const IPNickname=styled.div`
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

  .inputElem{
    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;
    background-color: #FAFAFA;
    margin-top: 1.44rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .InputEM{
      height: 100%;
      margin: 0 0 0 2rem;

      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;
      background-color: #FAFAFA;;
      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;
    }

    .inputBtn{
      //flex-shrink: 0;
      margin: 0 2.25rem 0 auto;
      border: none;
      outline: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
export default InputNickname;