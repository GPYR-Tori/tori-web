import React from 'react';
import styled from '@emotion/styled';
import {AiOutlineArrowLeft} from "react-icons/ai";

const CtgHeader = () => {
    return(
        <>
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
  margin: 50px auto 0 48px;
  height: 48px;


  .AllowIcon{
    width: 48px;
    height: 48px;
  }
  .HeaderLogin{
    margin: 0 0 0 28px;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
  }
`;
export default CtgHeader;