import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyle } from '@/styles/GlobalStyle';
import HomeLogo from '@/src/components/HomeLogo';

const Mydotori = () => {
  return (
    <>
    <GlobalStyle />
      <div>
        <HomeLogo />
        <h1>
          마이도토리
        </h1>
      </div>
    </>
  );
};

export default Mydotori;
