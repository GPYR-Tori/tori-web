import React, { useState } from 'react';
import styled from "@emotion/styled";

const SelectLanguage=()=>{
    const [selLang,setSelLang]=useState('');
    const handleInputLanguage=()=>{
        console.log('language : ',selLang);
    }
    return(
        <>
            <SelectL
                name='selectLanguage'
                id='selectLanguage'
                value={selLang}
                onChange={(e)=>setSelLang(e.target.value)}>
                <form
                    action="#">
                    <select className={'selectLang'} name="language" id="lang">
                        <option className={'selLang'} value="select">Please select a language.</option>
                        <option className={'selUsa'} value="usa">English</option>
                        <option className={'selViet'} value="vietnam">Vietnamese</option>
                        <option className={'selJa'} value="japan">Japanese</option>
                        <option className={'selCh'} value="china">Chinese</option>
                        <option className={'selTh'} value="thai">Thai</option>
                    </select>
                </form>
                <button
                    type={'button'}
                    onClick={handleInputLanguage}
                    className={'inputBtn'}>select</button>
            </SelectL>
        </>
    )
}

const SelectL=styled.div`
  display: flex;
  background-color: #FAFAFA;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 1.44rem;

  //width: 40.875rem; 이부분 때문에...
  height: 5rem;
  flex-shrink: 0;

  p{
    color: #808080;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .selectLang{
    margin: 0 0 0 2rem;
    //kookoo
    display: inline-block;
    flex-shrink: 0;

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

export default SelectLanguage;