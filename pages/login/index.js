import React from "react";
import styled from "@emotion/styled";

import Header from "@/pages/login/Header";
import BodyText from "@/pages/login/BodyText";
// import Navbar from "@/components/Navbar";




const Login=()=>{
    return (
        <>
            
            <Container>
                <Header />
                <BodyText />
                <div className={'inputDiv'}>
                    <div className={'ID'}>
                        <input
                            className={'loginInput'}
                            placeholder={'아이디를 입력해주세요'}
                        />
                    </div>
                    <div className={'PW'}>
                        <input
                            className={'pwInput'}
                            placeholder={'비밀번호를 입력해주세요'}
                        />
                    </div>
                    <button className={'LoginBtn'} >로그인</button>
                </div>
                <p className={'SignInBtn'}>회원 가입</p>
            </Container>
        </>
    );
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //align-items: center;

  flex-direction: column;

  .inputDiv{
    margin: 4.56rem auto 0 3rem;
    .ID{
      width: 40.875rem;
      height: 6.25rem;
      flex-shrink: 0;

      border-radius: 0.5rem;
      background: #FAFAFA;

      color: #808080;
      
      margin-bottom: 1.31rem;
      .loginInput{
        width: 38.185rem;
        height: 6.25rem;
        flex-shrink: 0;

        margin-right: 2.69rem;

        border: none;
        outline: none;

        color: #808080;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.035rem;
      }
    }
    .PW{
      width: 40.875rem;
      height: 6.25rem;
      flex-shrink: 0;

      border-radius: 0.5rem;
      background: #FAFAFA;
      color: #808080;
      
      margin-bottom: 4.87rem;
      .pwInput{
        width: 38.185rem;
        height: 6.25rem;
        flex-shrink: 0;

        margin-right: 2.69rem;

        border: none;
        outline: none;

        color: #808080;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.035rem;
      }
    }

    .LoginBtn{
      width: 40.875rem;
      height: 6.25rem;
      flex-shrink: 0;

      text-align: center;

      border-radius: 0.5rem;
      background: #009A78;

      color: #FFF;
      //font-family: Inter;
      font-size: 2.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3.125rem; /* 147.059% */

      border: none;
      outline: none;
      
      margin-bottom: 22.25rem;
    }
  }
  
  .SignInBtn{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    letter-spacing: -0.07rem;
    
    margin-bottom: 4.06rem;
  }
`;
export default Login;