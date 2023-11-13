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
                </form>
                <button className={'inputBtn'}>선택</button>
            </SelectG>
        </>
    )
}

const SelectG=styled.div`
  display: flex;
  width: 40.875rem;
  height: 6.25rem;

  margin-top: 1.44rem;

  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #FAFAFA;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .selectGen{
    //kookoo
    display: inline-block;
    flex-shrink: 0;

    margin: 0 0 0 2.63rem;

    border: none;
    outline: none;

    background-color: transparent;
    color: #808080;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    select::-ms-expand{
      display: none;
    }
  }
  .inputBtn{

    width: 5.5625rem;
    height: 3.3125rem;
    flex-shrink: 0;

    margin: auto 1.31rem auto auto;

    border: none;
    outline: none;
    border-radius: 0.625rem;
    background: #D9D9D9;

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
`;

export default SelectGender;