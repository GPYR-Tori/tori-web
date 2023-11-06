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

  margin: 17.75rem auto 0 3rem;

  .LoginImg{
    
  }
  .LoginText{
    color: #333;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 4.0625rem; /* 135.417% */

    //줄 띄어쓰기
    white-space: pre-wrap;

    .Text01{
      font-weight: 500;
    }
    .Text02{
      color: #333;
      font-size: 3rem;
      font-style: normal;
      font-weight: bold;
      line-height: 4.0625rem; /* 135.417% */
    }
  }
`;

export default BodyText;