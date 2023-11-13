import React, { useState } from 'react';
import styled from "@emotion/styled";


import AppBar from '@/src/components/AppBar';
import BodyContent from "@/pages/mypage/BodyContent";
import BtnContent from "@/pages/mypage/BtnContent";
import {Global} from "@emotion/react";

const Mypage = () => {
    return (
        <>
            <Container>
                <AppBar/>
                <BodyContent />
                <BtnContent />
            </Container>
        </>
    )
}


const Container=styled.div`
  display: flex;
  flex-direction: column;
`;

export default Mypage;