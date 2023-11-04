import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  width: 40.875rem;
  background: #fafafa;
  margin: auto;
`;

const Contents = styled.div`
  color: #737373;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  padding: 2rem;
`;

const Img = styled.img`
  object-fit: cover;
  width: 37rem;
  border-radius: 0.5rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
`;


function TripInfo() {
  return (
    <>
      <Wrapper>
        <Contents>
          여행지 설명 어쩌구 저쩌구 얄리얄리 얄라샹 얄라릴 얄라
          오로로로하후ㅜㅎ라ㅏㅜ 호로로ㅓ아노ㅓㅇ 콩콩팥팥 재밌다 최고다 도경수
          너무 귀여워
        </Contents>
        <Img src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp" />
        <Img src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp" />
      </Wrapper>
    </>
  );
}


export default TripInfo;
