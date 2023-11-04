import React from "react";
import styled from "@emotion/styled";

import Header from "@/pages/login/Header";
import BodyText from "@/pages/login/BodyText";
// import Navbar from "@/components/Navbar";

import { GlobalStyle } from "@/styles/GlobalStyle";


const Login=()=>{
    return (
        <>
          <GlobalStyle/>
            <Container>
                <Header />
                <BodyText />
                <input
                    className={'loginInput'}
                    placeholder={'  아이디를 입력해주세요'}
                />
                <input
                    className={'pwInput'}
                    placeholder={'  비밀번호를 입력해주세요'}
                />
                <input
                    className={'LoginBtn'}
                    value={'로그인'}
                />
                <p className={'SignInBtn'}>회원 가입</p>
            </Container>
        </>
    );
}

const Container=styled.div`
  width: 750px;
  height: 1624px;
  display: flex;
  //align-items: center;

  flex-direction: column;

  .loginInput{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

    margin:73px auto 21px 49px ;

    border: none;
    

    //background-color: darkgrey;
    background-color: #FAFAFA;;

    color: #808080;
    //font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
  }

  .pwInput{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

    margin: 21px auto 36px 49px;

    border: none;
    
    //background-color: darkgrey;
    background-color: #FAFAFA;;
    
    color: #808080;
    //font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
  }

  .LoginBtn{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

    text-align: center;
    
    //margin: 76px auto auto 49px;
    margin: 76px auto 0 49px;
    border-radius: 8px;
    background: #009A78;
    border: none;

    color: white;
    //font-family: Pretendard;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 147.059% */
  
  }
  
  .SignInBtn{
    //margin-top: 359px;
    margin: 359px auto 0 auto;
    
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: bolder;
    line-height: normal;
    letter-spacing: -1.12px;
    
  }
`;
export default Login;