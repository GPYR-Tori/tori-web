import React from 'react';
import styled from '@emotion/styled';

export function MapView() {
  const renderMap = (el) => {
    if (el == null) {
      return;
    } //null이 들어오면 아래 함수 실행x
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3 // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(el, mapOption); //여기서 지도 그리기
    renderMarker(map);
  };


  return <StyledMapView ref={renderMap}>

  </StyledMapView>;
}
function renderMarker(map) {
  var imageSrc = "/images/brown_dotori.png", // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(18.75, 23.125), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), markerPosition = new kakao.maps.LatLng(33.450701, 126.570667); // 마커가 표시될 위치입니다


  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

}
const StyledMapView = styled.div`
  flex: 1; //부모 밑에 있을 때 1배 만큼 자리 차지 (지금 1개니까 100, 2개면 50 50)
`;
