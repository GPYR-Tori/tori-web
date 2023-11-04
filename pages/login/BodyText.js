import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyle } from '@/styles/GlobalStyle';



const BodyText=()=>{
    return(
        <>
            <GlobalStyle/>
            <LoginBody>
                <div className={'LoginImg'}>
                    <img />
                    <img />
                </div>
                <div className={'LoginText'}>
                    <p className={'Text01'}>
                        Travel to the
                    </p>
                    <p className={'Text01'}>
                        Essence of Korea,
                    </p>
                    <p className={'Text02'}>
                        Stamp your STori.
                    </p>
                </div>

            </LoginBody>
        </>
    )
}

const LoginBody=styled.div`
  display: flex;
  //align-items: center;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 286px auto 50px 49px ;

  .LoginImg{
    
  }
  .LoginText{
    color: #333;
    //font-family: Pretendard;
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    line-height: 65px; /* 120.37% */

    //줄 띄어쓰기
    white-space: pre-wrap;

    .Text01{
      font-weight: 500;
    }
    .Text02{
      font-weight: bolder;

      color: #3A3A3A;
      //font-family: Pretendard;
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: 65px;

      white-space: pre-wrap;
    }
  }
`;

export default BodyText;