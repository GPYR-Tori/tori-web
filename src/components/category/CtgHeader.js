import React from 'react';
import styled from '@emotion/styled';
import {AiOutlineArrowLeft} from "react-icons/ai";

const CtgHeader = () => {
    return(
        <>
            <LoginHeader>
                <AiOutlineArrowLeft className={'AllowIcon'}/>
                <p className={'HeaderLogin'}>카테고리</p>
            </LoginHeader>
        </>
    )
};

const LoginHeader=styled.div`
  display: flex;
  align-items: center;
  margin: 3.13rem auto 0 3rem;
  height: 48px;


  .AllowIcon{
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
  }
  .HeaderLogin{
    margin: 0 0 0 1.75rem;
    color: #000;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem; /* 110.526% */
  }
`;
export default CtgHeader;