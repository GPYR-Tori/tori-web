import React, { useState } from 'react';
import styled from "@emotion/styled";


const InputCountry=()=>{

    return(
        <>
            <IPCountry>
                <p>국적</p>
                <div className={'inputC'}>
                    <input
                        className={'InputEM'}
                        placeholder={'국적을 입력해주세요'}
                    />
                    <button className={'inputBtn'}>제출</button>
                </div>
            </IPCountry>
        </>
    )
}

const IPCountry=styled.div`
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

  .inputC{
    display: flex;
    flex-direction: row;
    margin-top: 1.44rem;

    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;

    border: none;
    outline: none;

    border-radius: 0.5rem;
    background: #FAFAFA;

    .InputEM{
      height: 100%;
      flex-shrink: 0;
      margin: 0 0 0 2rem;

      //kookoo
      display: inline-block;

      border: none;
      outline: none;
      background-color: #FAFAFA;;
      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .inputBtn{
      //flex-shrink: 0;
      margin: 0 2.25rem 0 auto;
      border: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export default InputCountry;