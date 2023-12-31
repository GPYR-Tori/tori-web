import React from "react";
import styled from "@emotion/styled";

function SampleReviews({content}) {
    return (
        <>
            <Wrapper>
                <SampleReview>
                    <p>{content}</p>
                </SampleReview>
            </Wrapper>

        </>
    );
}

export default SampleReviews;

const Wrapper = styled.div`
  display: flex;
  margin: 1rem;
  &::-webkit-scrollbar{
    display: none;
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
  }
`;

