import React from "react";
import styled from "@emotion/styled";
import {AiOutlineArrowLeft} from "react-icons/ai";
const SigninHeader=()=>{

    return(
        <>
            <SiHeader>
                <AiOutlineArrowLeft className={'AllowIcon'}/>
                <p>회원가입</p>
            </SiHeader>
        </>
    )
}

const SiHeader=styled.div`
  display: flex;
  align-items: center;
  //margin: 50px 527px 1526px 48px;
  margin: 3.12rem auto 0 3rem;

  .AllowIcon{
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
  }
  p{
    margin: 0 auto 0 1.75rem;
    color: #000;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem; /* 110.526% */
  }
`;
export default SigninHeader;