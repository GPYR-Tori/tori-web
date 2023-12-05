import React, {useState} from 'react';
import styled from '@emotion/styled';
import CtgPlace from "@/src/components/categories/CtgPlace";
import CtgSelect from "@/src/components/categories/CtgSelect";
// import Navbar from "@/components/Navbar";

const Category=()=>{
    return(
        <>
            <Container>
                <div className={'ctgText'}>
                    <p>카테고리</p>
                </div>
                <CtgSelect />
                <CtgPlace />
            </Container>
        </>
    )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //justify-content: center;
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
    p{
      ${p=>p.active?
              `background:none;
        color:#009A78;`:''
      }
  }
`;


export default Category;