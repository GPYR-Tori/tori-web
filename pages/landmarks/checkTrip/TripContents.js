import React from "react";
import styled from "@emotion/styled";
import { iconList } from "@/pages/landmarks/checkTrip/iconList";

const Wrapper = styled.div`
  margin: auto;
  width: 40.875rem;
`;

const Img = styled.img`
  width: inherit;
  height: 33.75rem;
  border-radius: 1.25rem;
  object-fit: cover;
  margin-top: 3rem;

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
    width: 4.375rem;
    height: 2.25913rem;
    padding: 0.375rem 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 1px solid #d0d0d0;
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
  height: 15rem;
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
function TripContents(props) {
  return (
    <Wrapper>
      <Img src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp" />
      <Title>{props.title}</Title>
      {/*카테고리 조건식 추가해야됨 */}
      <Category>
        <div>
          <p>{props.category}</p>
        </div>
        <div>
          <p>{props.category}</p>
        </div>
        <div>
          <p>{props.category}</p>
        </div>
      </Category>
      <Inform>
        <Icon>
          {iconList.map(({ icon }) => (
            <p>
              {icon()}
              <span>{props.address}</span>
            </p>
          ))}
        </Icon>
      </Inform>
    </Wrapper>
  );
}
export default TripContents;
