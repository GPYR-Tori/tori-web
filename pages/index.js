import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landmarks from "@/pages/landmarks";
import HomeBar from '@/src/components/HomeBar';
import NavBar from '@/src/components/NavBar/NavBar';
import styled from '@emotion/styled';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Container>
        <HomeBar />
        <ContentContainer>
          <Landmarks/>
        </ContentContainer>
        <NavBar/>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const ContentContainer = styled.div`
  flex: 1;
  overflow: auto;
`;