import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";


const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
`;

const SampleReview = styled.div`
  width: 16.25rem;
  height: 16.25rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #fafafa;
  margin-bottom: 2.5rem;
  margin-right: 1.25rem;
  padding: -2rem;

  p {
    margin: 1rem;
    color: #6f6f6f;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    //&::-webkit-scrollbar {
    //  display: none;
    //}
  }
`;

const WriteReview = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 4.5rem;

  button {
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
  }
`;
function SampleReviews(props) {
    return (
        <>
            <Wrapper>
                <SampleReview>
                    <p>{props.review}</p>
                </SampleReview>
                <SampleReview>
                    <p>{props.review}</p>
                </SampleReview>
                <SampleReview>
                    <p>{props.review}</p>
                </SampleReview>
            </Wrapper>
            <WriteReview>
                <Link href={"/reviews/WriteReview"}>
                    <button>리뷰 쓰기</button>
                </Link>
            </WriteReview>
        </>
    );
}

export default SampleReviews;
