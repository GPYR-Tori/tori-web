import React from "react";
import styled from "@emotion/styled";
// import {GlobalStyle} from "@/styles/GlobalStyle";

const ModifyAge=()=>{
    return(
        <>
            <ModiAge>
                <p>나이</p>
                <div className={'inputElem'}>
                    <input
                        className={'inputA'}
                        type={"number"}
                        placeholder={'나이를 숫자로만 입력해주세요'}
                        min={'0'}
                        max={'150'}
                    />
                    <button className={'inputBtn'}>변경</button>
                </div>
            </ModiAge>
        </>
    )
}

const ModiAge=styled.div`
  margin-top: 2.38rem;
  margin-bottom: 7.94rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

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
    justify-content: center;
    align-items: center;

    margin-top: 1.56rem;
    width: 40.875rem;
    height: 6.25rem;
    flex-shrink: 0;

    border: none;
    background-color: #FAFAFA;;
    color: #808080;

    //input
    .inputA{
      //kookoo
      display: inline-block;
      flex-shrink: 0;
      //margin-left: 2.62rem;
      margin: 2.06rem auto auto 2.62rem;
      //height: 2.125rem;
      width: 70%;

      border: none;
      outline: none;

      background-color: transparent;
      color: #808080;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;

      ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
      ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }
    .inputBtn{
      //margin: auto 0 auto auto;
      margin: auto 1.31rem auto auto;
      width: 5.5625rem;
      height: 3.3125rem;

      border: none;
      background-color: #B3B3B3;
      border-radius: 10px;

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
  }
`;

export default ModifyAge;