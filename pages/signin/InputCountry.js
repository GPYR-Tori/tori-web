import React, { useState } from 'react';
import styled from "@emotion/styled";
import SelectCountry from "@/pages/signin/SelectCountry";

const InputCountry=()=>{

    return(
        <>
            <IPCountry>
                <p>국적</p>
                {/*<input*/}
                {/*    className={'inputCon'}*/}
                {/*    placeholder={'  정확하게 작성해주세요'}*/}
                {/*/>*/}
                {/*<SelectCountry />*/}
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
  
  .inputC{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

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
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export default InputCountry;