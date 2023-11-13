import React from "react";
import styled from "@emotion/styled";


const ModifyLanguage=()=>{
    return(
        <>
            <ModiLanguage>
                <p>언어</p>
                <div className={'modiL'}>
                    <form action="#">
                        <select className={'selectLang'} name="language" id="lang">
                            <option className={'selLang'} value="select">언어를 선택하세요</option>
                            <option className={'selUsa'} value="usa">영어</option>
                            <option className={'selViet'} value="vietnam">베트남어</option>
                            <option className={'selJa'} value="japan">일본어</option>
                            <option className={'selCh'} value="china">중국어</option>
                            <option className={'selTh'} value="thai">태국어</option>
                        </select>
                    </form>
                    <button className={'inputBtn'}>변경</button>
                </div>
            </ModiLanguage>
        </>
    )
}
const ModiLanguage=styled.div`
  margin-top: 2.38rem;
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

  .modiL{
    display: flex;
    flex-direction: row;
    //justify-content: center;
    align-items: center;
    text-align: center;

    margin-top: 1.56rem;

    width: 40.875rem;
    height: 6.25rem;
    flex-shrink: 0;

    border: none;
    background-color: #FAFAFA;;
    color: #808080;

    //input
    .selectLang{
      //kookoo
      display: inline-block;
      flex-shrink: 0;
      margin-left: 2.62rem;

      flex-direction: row;
      justify-content: center;
      align-items: center;

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
export default ModifyLanguage;