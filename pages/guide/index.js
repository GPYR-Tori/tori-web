import React from "react";
import styled from "@emotion/styled";
import Course from "@/pages/guide/Course";
import Booking from "@/pages/guide/Booking";
import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";

function Guide() {


    return (
    <>
      <AppBar />
      <Wrapper>
        <Title>EG 투어버스</Title>
        <Img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6%2F08564407-6e55-4929-9541-74d75415f520%2FUntitled.png?table=block&id=bb7cae63-183e-4757-b415-86082756b69d&spaceId=8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6&width=2000&userId=b94e2ed2-3b9a-4e03-9432-8ebacdcf4f21&cache=v2" />
          <Explain>설명필요</Explain>
          <Course />
          <Booking />
      </Wrapper>
      <NavBar/>
    </>
    );
}

const Explain = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  width: 40.875rem;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  background-color: #fff;
  margin: 3rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  color: #191919;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-bottom: 1.81rem;
`;

export default Guide;
