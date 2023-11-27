/* 마이도토리 페이지 */

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import AppBar from '@/src/components/AppBar';
import NavBar from '@/src/components/NavBar/NavBar';

import { MyDotoriCard } from './components/MyDotoriCard';
import { RankingCard } from './components/RankingCard';
import { DotoriStampCard } from './components/DotoriStampCard';
import { fetchDotoriStatus } from '@/src/api/fetchDotoriStatus';

const Mydotori = () => {

  const [data, setData] = useState();
  useEffect( () => {
    fetchDotoriStatus().then(setData)
  }, [] )
  console.log(data)
  if (data == null)
    {return null}


  return (
    <>
      <Container>
        <AppBar />
        {/* appbar, navbar 제외한 콘텐츠 콘테이너*/}
        <ContentContainer>
            <TopContainer>
              {/* 보유도토리 */}
              <MyDotoriCard num={data.num}/>
              {/* 도토리순위 */}
              <RankingCard totalRanking={data.totalRanking}/>
            </TopContainer>
          {/* 도토리 스탬프 카드 */}
          <DotoriStampCard num={data.num}/>
        </ContentContainer>
        
        <NavBar/>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const ContentContainer = styled.div`
  flex: 1;
  overflow: auto;   // 스크롤 추가
`
const TopContainer = styled.div`
  display: flex;
  gap: 1.31rem; //자식 끼리 띄우기
  padding: 0 2.94rem;
  & > * {
    flex: 1;
  }
`

export default Mydotori;
