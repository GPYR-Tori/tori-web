/* 도토리 모으기 페이지 */

import styled from '@emotion/styled';
import AppBar from '@/src/components/AppBar';
import { MapView } from './components/MapView';
import NavBar from '@/src/components/NavBar/NavBar';
import { LandmarkList } from './components/LandmarkList';
import { useEffect, useState } from 'react';
import { fetchLandmark } from '@/src/api/fetchLandmark';


const DotoriPage = () => {

  const [data, setData] = useState([]);
  useEffect( () => {
    fetchLandmark().then(setData)
  }, [] )

  return (
    <>

      <Container>
        <AppBar />
        
        <MapView onLocationChange={(lat, lon) => {fetchLandmark(lat, lon, "chacha").then(setData)}} data={data}/>
        <LandmarkList/>
        
        <NavBar/>
      </Container>
    </>
  );
};


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  //background-color: red;
`;





export default DotoriPage;

