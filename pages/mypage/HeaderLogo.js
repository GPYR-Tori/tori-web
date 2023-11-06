import React from 'react';
import styled from '@emotion/styled';

import {AiOutlineArrowLeft} from "react-icons/ai";
import {BiSearch} from 'react-icons/bi';
// import Logo from '@/img/Logo.png';
// import Logo from 'src/img/Logo.png';
import Logo from 'src/assets/images/logo_eng.png';
const HeaderLogo = () => {
    return(
        <>
            <Container>
                <AiOutlineArrowLeft className={'AllowIcon'}/>
                {/*<p>로고</p>*/}
                {/*<Logo/>*/}
            </Container>
        </>
    )
}


const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  
    margin:2.81rem auto 0 3rem;
  
    .AllowIcon{
      width: 3rem;
      height: 3rem;
      flex-shrink: 0;
      
      margin: 0 auto 0 0;
    }
    .LogoImg{
      width: 3rem;
      height: 3rem;
      flex-shrink: 0;
      
    }
`
export default HeaderLogo;