/* 도토리 모으기 페이지 */

import React from 'react';
import styled from '@emotion/styled';

import HomeLogo from '@/src/components/AppBar';
import Link from 'next/link';

const DotoriPage = () => {
  return (
    <>

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

  position: relative;
`;

const MapContainer = styled.div`



  background-color: #FFF8EB;

`


export default DotoriPage;
