import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyle } from '@/styles/GlobalStyle';
import HomeLogo from '@/src/components/HomeLogo';
import Link from 'next/link';

// 스타일을 전역으로 정의, GlobalStyle을 적용
const GlobalStyles = () => <GlobalStyle />;

const DotoriPage = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <HomeLogo />
        <div>
          <h1>도토리</h1>
        </div>
      </Container>
    </>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 45px 50px 0 50px;
`;




export default DotoriPage;
