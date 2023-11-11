import React, { useState } from 'react';
import styled from "@emotion/styled";


// import HeaderLogo from "@/pages/mypage/HeaderLogo";

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
  width: 750px;
  height: 1624px;
  display: flex;
  //align-items: center;

  flex-direction: column;
  //스크롤
  
  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }

  .signinBtn{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

    text-align: center;

    //margin: 76px auto auto 49px;
    margin: 76px auto 110px 49px;
    border-radius: 8px;
    background: #009A78;
    border: none;

    color: white;
    //font-family: Pretendard;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 147.059% */
  ;
  }
`;

export default Signin;