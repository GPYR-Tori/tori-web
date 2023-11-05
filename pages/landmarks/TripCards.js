import React, { useState } from "react";
import styled from "@emotion/styled";
import FavoriteBtn from "@/pages/favorites/FavoriteBtn";

const Wrapper = styled.div`
  width: 19.8125rem;
  height: 22.9375rem;
  margin-bottom: 2.5rem;
  margin-right: 1.2rem;
`;


const ImgWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -4rem;
  color: #BABABA;
  
  :hover{
    color:#009A78;
  }
`;

const Img = styled.img`
  width: 19.8125rem;
  height: 15.375rem;
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
  margin-left: 0.12rem;
  margin-bottom: 0;
`;

const CategoryWrap = styled.div`
  margin-top: 0.7rem;
  height: 3.56rem;
  display: flex;
`;
const Category = styled.div`
  display: flex;
  height: 2.56rem;
  width: 4.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid #d0d0d0;
  text-align: center;
  margin-right: 0.88rem;
  p {
    color: #a5a5a5;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

function TripCards(props) {
    return (
        <Wrapper>
                <Img src={props.img} alt="사진" />
            <ImgWrap>
                <FavoriteBtn />
            </ImgWrap>

            <Title>{props.name}</Title>
            <CategoryWrap>
                <Category>
                    <p>{props.category}</p>
                </Category>
                <Category>
                    <p>{props.category}</p>
                </Category>
                <Category>
                    <p>{props.category}</p>
                </Category>
                <Category>
                    <p>{props.category}</p>
                </Category>
            </CategoryWrap>
        </Wrapper>
    );
}

export default TripCards;

