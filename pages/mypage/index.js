import React, { useState } from 'react';
import styled from "@emotion/styled";


import AppBar from '@/src/components/AppBar';
import NavBar from '@/src/components/NavBar/NavBar';
import BodyContent from "@/pages/mypage/BodyContent";
import BtnContent from "@/pages/mypage/BtnContent";
import {Global} from "@emotion/react";

const Mypage = () => {
    return (
        <>
        <Container>
            <AppBar/>
            <ContentContainer>
                <BodyContent />
                <BtnContent />
            </ContentContainer>
            <NavBar/>
        </Container> 
        </>
    )
}

// 가장 바깥 컨테이너의 높이를 100vh로 세팅, 
// display flex로 해주고 자식요소 appbar, contentcontainer, navbar 중 contentcontainer에 flex: 1을 주면 
// 나머지 요소가 자기자리 확보하고 남는 공간에 contentcontainer가 들어감!

const Container=styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
`;
export default Mypage;