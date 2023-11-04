import React from 'react';
import styled from '@emotion/styled';
import CtgPlaceBtn from "@/pages/category/CtgPlaceBtn";

const CtgPlace=()=>{
    return(
        <>
            <Container>
                <p>장소</p>
                <CtgPlaceBtn />
            </Container>
        </>
    )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 654px;
  height: 173px;
  flex-shrink: 0;
  
  margin: 80px auto auto 48px;
  p{
    color: #000;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export default CtgPlace;