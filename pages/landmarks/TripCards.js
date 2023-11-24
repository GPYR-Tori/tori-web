import React from "react";
import styled from "@emotion/styled";
import FavoriteBtn from "@/pages/favorites/FavoriteBtn";
import Link from "next/link";



function TripCards() {
    return (
        <Wrapper>
            <Link href="/landmarks/checkTrip">
                <Img src="data:image/jpeg;base64,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"alt="사진" />
                <Title>name</Title>
            <CategoryWrap>
                <Category>
                    <p>자연</p>
                </Category>
                <Category>
                    <p>체험</p>
                </Category>
                <Category>
                    <p>음식</p>
                </Category>
            </CategoryWrap>
            </Link>
            <BtnWrap>
                <FavoriteBtn/>
            </BtnWrap>
        </Wrapper>
    );
}

export default TripCards;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin:3rem
`;


const BtnWrap = styled.div`
  display: flex;
  z-index: 0;
  margin-left: -3rem;
  margin-bottom: -5rem;
  color: #BABABA;
  :hover{
    color:#009A78;
  }
`;

const Img = styled.img`
  border-radius: 0.5rem;
  object-fit: cover;
`;
const Title = styled.p`
  color: #808080;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.5rem;
`;

const CategoryWrap = styled.div`
  display: flex;
  padding-top: 1rem;
`;
const Category = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid #d0d0d0;
  text-align: center;
  margin-right: 0.88rem;
  p {
    color: #a5a5a5;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0.7rem;
  }
`;

