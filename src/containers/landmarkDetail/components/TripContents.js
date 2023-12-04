import React from "react";
import styled from "@emotion/styled";
import {iconList} from "@/src/containers/landmarkDetail/components/iconList";

const Wrapper = styled.div`
  margin: auto;
  display: flex;
`;


const Container = styled.div`
  flex: 1;
  padding: 3rem;
`;


const ImgWrap = styled.div`
  display: flex;
  margin: auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  flex: 1;
  border-radius: 1.25rem;
  object-fit: cover;
`;
const Title = styled.div`
  color: #191919;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 2.8rem;
  margin-right: 0.2rem;
`;

const Category = styled.div`
  display: flex;
  margin: 0.75rem 0;
  gap: 0.87rem;

  div {
    display: flex;
    //width: 4.375rem;
    //height: 2.25913rem;
    padding: 0.375rem 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 0.1rem solid #d0d0d0;
  }

  p {
    color: #a5a5a5;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
  }
`;
const Inform = styled.div`
  //height: 15rem;
  display: flex;
  width: inherit;
`;

const Icon = styled.div`
  p {
    display: flex;
    color: #6f6f6f;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 1rem 0 1rem 0;
  }

  span {
    margin: 0 1rem;
  }
`;

function TripContents({name, imageList, address, description, price, time, site, categoryList = [], locationList}) {
    return (
        <Wrapper>
            <Container>
                <ImgWrap>
                    <Img
                        src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp"/>
                </ImgWrap>
                <Title>{name}</Title>
                {/*카테고리 조건식 추가해야됨 */}
                <Category>
                    {categoryList.map((c, index) => (
                        <div key={index}>
                            <p>{c}</p>
                        </div>
                    ))}
                </Category>
                <Inform>
                    <Icon>
                        {iconList.map(({icon}) => (
                            <p>
                                {icon()}
                                <span>{address}</span>
                            </p>
                        ))}
                    </Icon>
                </Inform>
            </Container>
        </Wrapper>
    );
}

export default TripContents;
