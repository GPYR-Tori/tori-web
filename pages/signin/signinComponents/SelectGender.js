import React, { useState } from 'react';
import styled from "@emotion/styled";

const SelectGender=()=>{
    const [selGender,setSelGender]=useState('');
    const handleInputGender=()=>{
        console.log('gender : ',selGender);
    }
    return(
        <>
            <SelectG
                name='selectGender'
                id='selectGender'
                value={selGender}
                onChange={(e)=>setSelGender(e.target.value)}>
                <form action="#">
                    <select className={'selectGen'} name="gender" id="gen">
                        <option className={'selGen'} value="select">Please select your gender.</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="ThirdGender">Third gender</option>
                        <option value="NoResponse">No response</option>
                    </select>
                </form>
                <button
                    type={"button"}
                    onClick={handleInputGender}
                    className={'inputBtn'}>select</button>
            </SelectG>
        </>
    )
}

const SelectG=styled.div`
  display: flex;
  //width: 40.875rem; 여기...
  height: 5rem;

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

    margin: 0 0 0 2rem;

    border: none;
    outline: none;

    background-color: transparent;
    color: #808080;
    font-size: 1.4rem;
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
    font-size: 1.45rem;
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