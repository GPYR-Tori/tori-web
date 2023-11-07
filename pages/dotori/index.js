/* 도토리 모으기 페이지 */

import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyle } from '@/styles/GlobalStyle';
import HomeLogo from '@/src/components/HomeLogo';
import Link from 'next/link';

const DotoriPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HomeLogo />
        <MapContainer>
          <h3>여기 지도 들어갈 자리</h3>
        </MapContainer>
      </Container>
    </>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;    // 나중에 봐서 값 수정
  background-color: #cbcbcbff; //구분 가능하게 임의로 지정해둠
  position: relative;
`;

const MapContainer = styled.div`
  width: 750px;
  height: 1000px;
  margin-top: 10rem;
  background-color: #FFF8EB;

`


export default DotoriPage;
