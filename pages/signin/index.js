import React, { useState } from 'react';
import styled from "@emotion/styled";
import AppBar from '@/src/components/AppBar';
import NavBar from '@/src/components/NavBar/NavBar';

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
            <AppBar/>
            <ContentContainer>
                {/* <Label>회원가입</Label> */}
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
            </ContentContainer>
            <NavBar/>
          </Container>
        </>
    )
}

// const Label = styled.div`
//   padding: 1rem;
//   font-size: 2.375rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 2.625rem; /* 110.526% */
// `

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const ContentContainer=styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  //스크롤
  overflow: auto;

  .signinBtn{
    //width: 40.625rem; (기존)
    width: calc(100% - 6rem);
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