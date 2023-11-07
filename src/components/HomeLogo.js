import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/src/assets/images/logo_tori.png';

const LogoContainer = styled.div`
  position: absolute;
  top: 5rem; // 페이지 상단으로 이동
`;

const HomeLogo = () => {
    return (
      <LogoContainer>
        <Link href="/">
          <Image 
            src={logo}
            width={144.58}
            height={60}
          />
        </Link>
      </LogoContainer>
    );
  };
  
  export default HomeLogo;
  