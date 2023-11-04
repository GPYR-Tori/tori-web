import React, { useState } from 'react';
import styled from "@emotion/styled";

const SelectGender=()=>{
    return(
        <>
            <SelectG>
                <form action="#">
                    <select className={'selectGen'} name="gender" id="gen">
                        <option className={'selGen'} value="select">성별을 선택해주세요</option>
                        <option className={'selm'} value="usa">남성</option>
                        <option className={'selfm'} value="vietnam">여성</option>
                        <option className={'selTG'} value="vietnam">제 3의 성</option>
                        <option className={'selNA'} value="vietnam">응답안함</option>
                    </select>
                    <button className={'inputBtn'}>선택</button>
                </form>
            </SelectG>
        </>
    )
}

const SelectG=styled.div`
  display: flex;

  width: 654px;
  height: 100px;
  background-color: #FAFAFA;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  p{
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 23px;
  }

  .selectGen{
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

    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    select::-ms-expand{
      display: none;
    }


    .selGen{
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.56px;
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
`;

export default SelectGender;