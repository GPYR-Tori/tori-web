import React from "react";
import styled from "@emotion/styled";
// import {GlobalStyle} from "@/styles/GlobalStyle";

const ModifyNickname=()=>{
    return(
        <>
            <Nickname>
                <p>닉네임</p>
                <div className={'ModiNic'}>
                    <input
                        className={'ModiN'}
                        placeholder={'닉네임을 입력해주세요'}
                    />
                    <button className={'inputBtn'}>변경</button>
                </div>
            </Nickname>
        </>
    )
}

const Nickname=styled.div`
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

  .ModiNic{
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
    .ModiN{
      //kookoo
      display: inline-block;
      flex-shrink: 0;
      //margin-left: 2.62rem;
      margin: 2.06rem auto auto 2.62rem;
      //height: 2.125rem;

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
      //margin: auto 0 auto auto;
      margin-right: 1.31rem;
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
export default ModifyNickname;