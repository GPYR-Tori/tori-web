import React from 'react';
import styled from '@emotion/styled';
import CtgHeader from "@/pages/category/CtgHeader";
import CtgPlace from "@/pages/category/CtgPlace";

import CtgSelectA from "@/pages/category/CtgSelectA";
import CtgSelectB from "@/pages/category/CtgSelectB";
// import Navbar from "@/components/Navbar";


const Category=()=>{

    return(
        <>

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

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // 넓이 100% 설정
  width: 100%;

  .ctgText{
    margin:8.56rem auto 3.06rem 3rem;

    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .CtgSelectDiv{
    // 40.9375rem -> 100%로 변경 (좌우 3rem 여백)
    width: calc(100% - 6rem);
    height: 19.25rem;
    flex-shrink: 0;

    margin: 0 auto 5rem 3rem;
  }
`;


export default Category;