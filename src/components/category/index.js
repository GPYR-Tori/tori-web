import React from 'react';
import styled from '@emotion/styled';
import CtgHeader from "@/src/components/category/CtgHeader";
import CtgPlace from "@/src/components/category/CtgPlace";

import CtgSelectA from "@/src/components/category/CtgSelectA";
import CtgSelectB from "@/src/components/category/CtgSelectB";
// import Navbar from "@/components/Navbar";


const Category=()=>{

    return(
        <>

            <Container>
                {/* 헤더 필요없을 듯 */}
                {/* <CtgHeader/> */}
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
    margin:2rem auto 1rem 3rem;

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

    margin: 0 auto 3rem 3rem;
  }
`;


export default Category;