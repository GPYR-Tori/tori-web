import React from 'react';
import styled from '@emotion/styled';

import {AiOutlineArrowLeft} from "react-icons/ai";
import {BiSearch} from 'react-icons/bi';
// import Logo from '@/img/Logo.png';
// import Logo from 'src/img/Logo.png';

const HeaderLogo = () => {
    return(
        <>
            <Container>
                <AiOutlineArrowLeft className={'AllowIcon'}/>
                <p>로고</p>
                {/* <img src={Logo} className={'LogoImg'}/> */}
            </Container>
        </>
    )
}


const Container=styled.div`
    width: 650px;
    height: 60px;
  
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  
    margin : 45px 50px 0 50px;
  
    .AllowIcon{
      width: 48px;
      height: 48px;
      flex-shrink: 0;
      
      //margin: 0 auto 0 0;
      margin-right: 206px;
    }
    .LogoImg{
      width: 144.578px;
      height: 60px;
      flex-shrink: 0;
      
      
      //margin:0 250px 0 0 ;
    }
`
export default HeaderLogo;