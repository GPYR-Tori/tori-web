import styled from '@emotion/styled';
import Link from 'next/link';
import Router from 'next/router';

const Container = styled.div`
  height: 8.25rem;
  display: flex;
  align-items: center;
  //background-color: red;
  position: relative;
  padding: 0 3rem;
`;

const Logo =styled.img`
  height: 3.75rem;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  position: absolute;
`

const BackButton = styled.img`
  width: 3rem;
  
`

const HomeBar = () => {
    return (
      <Container>
        <Link href="/">
          <Logo 
            src="/images/logo_tori.png"
          />
        </Link>
      </Container>
    );
  };
  
  export default HomeBar;
  