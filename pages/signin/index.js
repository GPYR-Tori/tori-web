import React, { useState } from 'react';
import styled from "@emotion/styled";
import SigninHeader from "@/pages/signin/SigninHeader";

import InputEmail from "@/pages/signin/InputEmail";
import InputPw from "@/pages/signin/InputPw";
import InputNickname from "@/pages/signin/InputNickname";
import InputCountry from "@/pages/signin/InputCountry";
import InputLanguage from "@/pages/signin/InputLanguage";
import InputGender from "@/pages/signin/InputGender";
import InputAge from "@/pages/signin/InputAge";

const Signin = () => {

    return (
        <>
            <Container>
                {/*<HeaderLogo />*/}
                <SigninHeader />
                <InputEmail />
                <InputPw />
                <InputNickname />
                <InputCountry />
                <InputLanguage />
                <InputGender />
                <InputAge />
                <button
                    className={'signinBtn'}>
                    회원가입
                </button>
            </Container>
        </>
    )
}

const Container=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  //스크롤

  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }

  .signinBtn{
    width: 40.625rem;
    height: 6.25rem;
    flex-shrink: 0;
    text-align: center;

    margin: 7rem auto 5rem 3rem;

    border-radius: 0.5rem;
    border: none;
    outline: none;
    background: #009A78;
    //문자 가운데 정렬
    padding-top: 0.5rem;

    color: #FFF;
    font-size: 2.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.125rem; /* 147.059% */
  ;
  }
`;

export default Signin;