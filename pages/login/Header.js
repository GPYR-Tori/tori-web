import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Header = () => {
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
  flex-direction: row;
  text-align: center;
  align-items: center;
  //margin: 50px 527px 1526px 48px;
  margin: 3.13rem auto 0 3rem;


  .AllowIcon{
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    
    margin-right: 1.75rem;
  }
  .HeaderLogin{
    color: #000;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem; /* 110.526% */
  }
`;
export default Header;