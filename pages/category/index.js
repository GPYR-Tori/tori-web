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
                <div className={'CtgSelectDiv'}>
                    <CtgSelectA />
                    <CtgSelectB />
                </div>
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
  justify-content: flex-start;
  //align-items: center;
  

  
  .ctgText{
    margin:8.56rem auto 3.06rem 3rem;
    
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
  .CtgSelectDiv{
    width: 40.9375rem;
    height: 19.25rem;
    flex-shrink: 0;

    margin: 0 auto 5rem 3rem;
  }
`;


export default Category;