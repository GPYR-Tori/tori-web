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
  justify-content: flex-start;
  flex-shrink: 0;
  
  //margin: 80px auto auto 48px;
  margin: 5rem auto auto 3rem;
  p{
    //px
    //color: #000;
    //font-family: Inter;
    //font-size: 28px;
    //font-style: normal;
    //font-weight: 700;
    //line-height: normal;
    
    //rem
    color: #000;
    //font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export default CtgPlace;