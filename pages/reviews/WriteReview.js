import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 40.875rem;
  border-radius: 0.5rem;
  background: #fafafa;
  margin: auto;
`;

const Write = styled.textarea`
  resize: none;
  margin-left: 1.5rem;
  width: 37.75rem;
  height: 40rem;
  justify-content: center;
  background: #fafafa;
  border: none;
  color: #737373;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 2rem ;
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  button {
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 3rem;
    border: none;
    color: #fff;
    border-radius: 0.625rem;
    background: #009a78;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0275rem;
    cursor: pointer;
  }`

function WriteReview() {
    return (
        <>
            <h1>리뷰작성</h1>
            <Wrapper>
                <Write placeholder="리뷰를 작성해주세요" />
                <Btn>
                    <button>작성 완료</button>
                </Btn>
            </Wrapper>
        </>

    );
}

export default WriteReview;
