import React from "react";
import styled from "@emotion/styled";
// import {GlobalStyle} from "@/styles/GlobalStyle";

const ModifyGender=()=>{
    return(
        <>
            <ModiGender>
                <p>성별</p>
                <div className={'modiG'}>
                    <form action="#">
                        <select className={'selectGen'} name="gender" id="gen">
                            <option className={'selGen'} value="select">성별을 선택해주세요</option>
                            <option className={'selm'} value="usa">남성</option>
                            <option className={'selfm'} value="vietnam">여성</option>
                            <option className={'selTG'} value="vietnam">제 3의 성</option>
                            <option className={'selNA'} value="vietnam">응답안함</option>
                        </select>
                    </form>
                    <button className={'inputBtn'}>변경</button>
                </div>
            </ModiGender>
        </>
    )
}

const ModiGender=styled.div`
  margin-top: 2.38rem;
  display: flex;
  flex-direction: column;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .modiG{

    margin-top: 1.56rem;
    display: flex;
    flex-direction: row;
    //justify-content: center;
    align-items: center;

    width: 40.875rem;
    height: 6.25rem;
    flex-shrink: 0;

    border: none;
    background-color: #FAFAFA;;
    color: #808080;

    //input
    .selectGen{
      //kookoo
      display: inline-block;
      flex-shrink: 0;
      margin-left: 2.62rem;

      border: none;
      outline: none;

      background-color: transparent;
      color: #808080;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    .inputBtn{
      width: 5.5625rem;
      height: 3.3125rem;
      margin: auto 1.31rem auto auto;

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

export default ModifyGender;