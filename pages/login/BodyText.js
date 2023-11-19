import React from 'react';
import styled from '@emotion/styled';

const BodyText = () => {
  return (
    <>
      <LoginBody>
        <LoginImg>
          <img src="/images/3d_dotori.png" alt="로그인" />
        </LoginImg>
        <LoginText>
          <p className={'Text01'}>
            Travel to the <br />
            Essence of Korea,
          </p>
          <p className={'Text02'}>Stamp your STori.</p>
        </LoginText>
      </LoginBody>
    </>
  );
};

const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 3rem;
`;
const LoginImg = styled.div`
  width: 15.1875rem;
  height: 14.625rem;
  flex-shrink: 0;
  //align-self: flex-end;
  //margin-left: 27.88rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const LoginText = styled.div`
  //align-self: flex-start; 
  color: #333;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4.0625rem; /* 135.417% */

  // 줄 띄어쓰기
  white-space: pre-wrap;

  .Text01 {
    font-weight: 500;
  }
  .Text02 {
    color: #333;
    font-size: 3rem;
    font-style: normal;
    font-weight: bold;
    line-height: 4.0625rem; /* 135.417% */
  }
`;

export default BodyText;
