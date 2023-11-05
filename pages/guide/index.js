import React from "react";
import styled from "@emotion/styled";
import Course from "@/pages/guide/Course";
import Booking from "@/pages/guide/Booking";

const Wrapper = styled.div`
  width: 40.875rem;
  background-color: #fff;
  margin: auto;
`;

const Img = styled.img`
  width: 40.875rem;
  height: 26.1875rem;
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
const Explain = styled.div`
  margin-bottom: 2rem;
  padding-left: 0.2rem;
`;
function Guide() {
    return (
        <Wrapper>
            <Title>EG 투어버스</Title>
            <Img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6%2F08564407-6e55-4929-9541-74d75415f520%2FUntitled.png?table=block&id=bb7cae63-183e-4757-b415-86082756b69d&spaceId=8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6&width=2000&userId=b94e2ed2-3b9a-4e03-9432-8ebacdcf4f21&cache=v2" />
            <Explain>여행지 설명</Explain>
            <Title>코스설명</Title>
            <Course
                fee={"(점심 포함 160 USD)"}
                start={"출발, 도착: 회현역"}
                route={"임진각 - 점심 - 오두산 통일 전망대 - JSA 투어"}
            />
            <Booking />
        </Wrapper>
    );
}

export default Guide;
