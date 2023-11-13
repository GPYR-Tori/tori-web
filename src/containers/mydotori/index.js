/* 마이도토리 페이지 */

import React from 'react';
import styled from '@emotion/styled';
import AppBar from '@/src/components/AppBar';
import NavBar from '@/src/components/NavBar/NavBar';

import { MyDotoriCard } from './components/MyDotoriCard';
import { RankingCard } from './components/RankingCard';
import { DotoriStampCard } from './components/DotoriStampCard';

const Mydotori = () => {
  return (
    <>
    
      <Container>
        <AppBar />
        <TopContainer>
          <MyDotoriCard/>
          <RankingCard/>
        </TopContainer>
        <DotoriStampCard/>
        <NavBar/>
      </Container>
    </>
  );
};

const Container = styled.div`

`;

const TopContainer = styled.div`
  display: flex;
  gap: 1.31rem; //자식 끼리 띄우기
  padding: 0 2.94rem;
  & > * {
    flex: 1;
  }
`

export default Mydotori;
