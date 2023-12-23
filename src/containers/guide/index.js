import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Course from "@/src/containers/guide/components/Course";
import Booking from "@/src/containers/guide/components/Booking";
import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";
import axios from "axios";


function Guide() {
    //  유저 아이디 받아와서 변경하면 됩니다!
    const userId = 'userId'
    const [guide, setGuide] = useState({});
    const getData = async () => {
        try {
            const res = await axios.get(`guide/${userId}`);
            setGuide(res.data);
            console.log("guide",guide)
        } catch (error) {
            console.error("데이터를 불러오는 중 에러 발생:", error);
        }
    };
    useEffect(() => {
        getData()
    }, []);

    const {content,A_course=[],B_course=[],C_course=[],D_course=[],E_course=[]}=guide

    return (
    <>
      <Container>
        <AppBar />
              <Wrapper>
                  <Title>EG 투어버스</Title>
                  <Img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6%2F08564407-6e55-4929-9541-74d75415f520%2FUntitled.png?table=block&id=bb7cae63-183e-4757-b415-86082756b69d&spaceId=8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6&width=2000&userId=b94e2ed2-3b9a-4e03-9432-8ebacdcf4f21&cache=v2" />
                  <Explain>{content}</Explain>
                  <Course
                      A_course={A_course}
                      B_course={B_course}
                      C_course={C_course}
                      D_course={D_course}
                      E_course={E_course}
                  />
                  <Booking/>
              </Wrapper>
        <NavBar/>
      </Container>

    </>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Wrapper = styled.div`
  flex: 1;
  overflow: auto;

  background-color: #fff;
  margin: 3rem;
`;

const Explain = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  //width: 40.875rem; 이거 있으니까 가로 스크롤바 생김
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 100%;
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
