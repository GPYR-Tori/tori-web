import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  //width: 40.875rem;
  background: #fafafa;
  margin: 0 3rem;
`;

const Contents = styled.div`
  color: #737373;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  padding: 2rem;
`;


const ImgWrap = styled.div`
  display: flex;
  margin: auto;
  padding: 2rem;
`;

const Img = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

// description={description}   imageList={imageList}
function TripInfo({description,imageList}) {
  return (
    <>
      <Wrapper>
        <Contents>
          {description}
        </Contents>
        {imageList.map((item)=>(
            <ImgWrap>
              <Img src={item}/>
            </ImgWrap>
        ))}

      </Wrapper>
    </>
  );
}


export default TripInfo;
