import React, { useState } from 'react';
import styled from "@emotion/styled";
import { GlobalStyle } from "@/styles/GlobalStyle";

import HeaderLogo from "@/pages/mypage/HeaderLogo";
import BodyContent from "@/pages/mypage/BodyContent";
import BtnContent from "@/pages/mypage/BtnContent";

const Mypage = () => {
    return (
        <>
            <GlobalStyle/>
            <Container>
                <HeaderLogo />
                <BodyContent />
                <BtnContent />
            </Container>
        </>
    )
}


const Container=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Mypage;