import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { markLandmark } from '@/src/api/markLandmark';

export function MapView(props) {
  const mapRef = useRef();
  const clustererRef = useRef();
  const positionRef = useRef();

  const renderMap = (el) => {
    // renderMap이 1번이라도 됐으면 무한 그리기 방지
    if (el == null || mapRef.current != null) {
      return;
    } //null이 들어오면 아래 함수 실행x
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3 // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(el, mapOption); //여기서 지도 그리기
    

    mapRef.current = map; //지도 불러와서
    clustererRef.current = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
      minLevel: 10 // 클러스터 할 최소 지도 레벨 
  });

    getCurrentLocation(); // 현재 위치 호출
    kakao.maps.event.addListener(map, "zoom_changed", () => {
      if (
        positionRef.current 
      ) {
        renderMarkers(positionRef.current.coords.latitude, positionRef.current.coords.longitude)
      }
    });
  };
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      positionRef.current = position;
      // 현재 위치 보내기
      props.onLocationChange(position.coords.latitude, position.coords.longitude);
      if (
        mapRef.current != null
      ) {
        mapRef.current.setCenter(new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude))
        renderMarkers(position.coords.latitude, position.coords.longitude);
      }
    });
  }
  const renderMarkers = (lat, lon) => {
    clustererRef.current.clear()
    renderUserPin(mapRef.current, clustererRef.current, lat, lon)
    console.log(props.data)
    for(const item of props.data){
      renderMarker(mapRef.current, clustererRef.current, Number(item.latitude), Number(item.longitude), item.landmarkId, props.userId)
    }
  }
  useEffect(() => {
    for(const item of props.data){
      renderMarker(mapRef.current, clustererRef.current, Number(item.latitude), Number(item.longitude), item.landmarkId, props.userId)
    }
  }, [props.data])

  return <StyledMapView ref={renderMap}>
    <UserLocationBtn img src="/images/dotori/userlocation.png"
      onClick={() => getCurrentLocation()}>
    </UserLocationBtn>
  </StyledMapView>;
}
function renderMarker(map, clusterer, lat, lon, landmarkId, userId) {
  //alert()
  var imageSrc = "/images/dotori/filled_stamp.png", // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(25, 25), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), markerPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치입니다


  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
  });
  // 도토리 클릭시!! -> user, landmark ID 보내는 API 만들기
  kakao.maps.event.addListener(marker, "click", () => {
    //alert()
    // 로그인 후에 받아오기
    markLandmark(userId, landmarkId)

  });

  // 마커가 지도 위에 표시되도록 설정합니다
  clusterer.addMarker(marker);

}
function renderUserPin(map, clusterer,lat,lon) {
  const level = map.getLevel();
  //console.log(level);
  const size = { // 사이즈는 적절하게 수정하기!
    1: 1000,
    2: 1000,
    3: 352.5,
    4: 300,
    5: 250,
    6: 200,
    7: 150,
    8: 100,
    9: 50,
    10: 0
  } [level]

  var imageSrc = "/images/dotori/dotori_area.png", // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(size, size), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(size/2, size/2) }; // 포인트 재조정


  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), markerPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치입니다


  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  clusterer.addMarker(marker);
}
const StyledMapView = styled.div`
  flex: 1; //부모 밑에 있을 때 1배 만큼 자리 차지 (지금 1개니까 100, 2개면 50 50)
`;
const UserLocationBtn = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  flex-shrink: 0;
  position: absolute;
  z-index: 10;
  margin-top: 2rem;
  margin-left: 2rem;
  box-shadow: 0px 7px 34px 0px rgba(0, 0, 0, 0.10);
`