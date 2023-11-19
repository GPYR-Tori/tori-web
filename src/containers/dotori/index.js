/* 도토리 모으기 페이지 */

import styled from '@emotion/styled';
import AppBar from '@/src/components/AppBar';
import { MapView } from './components/MapView';
import NavBar from '@/src/components/NavBar/NavBar';
import { LandmarkList } from './components/LandmarkList';

const DotoriPage = () => {
  return (
    <>

      <Container>
        <AppBar />
        
        <MapView/>
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

