/* 도토리 모으기 페이지 */

import styled from '@emotion/styled';
import AppBar from '@/src/components/AppBar';
import { MapView } from './components/MapView';
import NavBar from '@/src/components/NavBar/NavBar';
import { LandmarkList } from './components/LandmarkList';
import { useEffect, useState } from 'react';
import { fetchLandmark } from '@/src/api/fetchLandmark';


const DotoriPage = () => {
  // 로그인 기능 구현 후 user hook 으로 바꾸기
  // 지금은 undefined로 아이디 전달 x
  const user = null;

  // 여기서 정의한 값을 아래 mapview, landmarklist 두 컴포넌트에 내려주기
  const [data, setData] = useState([]);
  useEffect( () => {
    fetchLandmark().then(setData)
  }, [] )

  return (
    <>

      <Container>
        <AppBar />
        
        <MapView onLocationChange={(lat, lon) => {fetchLandmark(lat, lon, user?.id).then(setData)}} data={data} userId={user?.id}/>
        <LandmarkList data={data}/>
        
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

