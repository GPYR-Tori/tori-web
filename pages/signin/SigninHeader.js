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
  margin: 0 auto 0 0;

  height: 48px;


  .AllowIcon{
    width: 48px;
    height: 48px;
  }
  p{
    margin: 0 0 0 28px;
    font-size: 38px;
    font-style: normal;
    font-weight: bold;
    line-height: 42px;
  }
`;
export default SigninHeader;