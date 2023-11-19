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
  
  // 100%로 수정
  width: 100%;
  height: 24.4375rem;
  flex-shrink: 0;

  margin: 0 auto 0 3rem;
  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export default CtgPlace;