import React from 'react';
import styled from '@emotion/styled';
import CtgHeader from "@/pages/category/CtgHeader";
import CtgPlace from "@/pages/category/CtgPlace";

import CtgSelectA from "@/pages/category/CtgSelectA";
import CtgSelectB from "@/pages/category/CtgSelectB";
// import Navbar from "@/components/Navbar";
import { GlobalStyle } from '@/styles/GlobalStyle';

const Category=()=>{

    return(
        <>
        <GlobalStyle />
            <Container>
                <CtgHeader/>
                <div className={'ctgText'}>
                    <p>카테고리</p>
                </div>
                <CtgSelectA />
                <CtgSelectB />
                <CtgPlace />
            </Container>
        </>
    )
}

const Container=styled.div`
  width: 750px;
  height: 1624px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  
  .ctgText{
    margin:137px auto 49px 48px;
    
    height: 34px;
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;


export default Category;