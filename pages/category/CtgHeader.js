import React from 'react';
import styled from '@emotion/styled';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {GlobalStyle} from "@/styles/GlobalStyle";

const CtgHeader = () => {
    return(
        <>
            <GlobalStyle />
            <LoginHeader>
                <AiOutlineArrowLeft className={'AllowIcon'}/>
                <p className={'HeaderLogin'}>로그인</p>
            </LoginHeader>
        </>
    )
};

const LoginHeader=styled.div`
  display: flex;
  align-items: center;
  //margin: 50px 527px 1526px 48px;
  //margin: 0 auto 0 0;
  
  margin: 3.13rem auto 0 3rem;
  
  //px
  //margin: 50px auto 0 48px;
  //height: 48px;

  //rem
  width: 13.5rem;
  height: 3rem;
  flex-shrink: 0;

  .AllowIcon{
    //px
    //width: 48px;
    //height: 48px;
    
    //rem
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    
    margin-right: 1.75rem;
  }
  .HeaderLogin{
    //px
    //margin: 0 0 0 28px;
    //font-size: 38px;
    //font-style: normal;
    //font-weight: 400;
    //line-height: 42px;
    
    //rem
    color: #000;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem; /* 110.526% */
  }
`;
export default CtgHeader;