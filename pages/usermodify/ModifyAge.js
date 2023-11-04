import React from "react";
import styled from "@emotion/styled";

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
    .inputBtn{
      //width: 110px;
      //height: 29px;

      width: 89px;
      height: 59px;
      margin-left: 30px;
      //flex-shrink: 0;

      border: none;
      background-color: #B3B3B3;
      border-radius: 10px;

      text-align: center;
      align-items: center;
      justify-content: center;

      color: white;
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      &:hover{
        background-color: #009A78;
      }
    }
  }
`;

export default ModifyAge;