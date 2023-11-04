import React from "react";
import styled from "@emotion/styled";
import WriteBtn from "@/pages/reviews/Btn/WriteBtn";

const Wrapper = styled.div`
  display: flex;
`;
const Write = styled.textarea`
  margin: 0 0 2rem 1.5rem;
  border: none;
  outline: none;
  width: 33rem;
  border-radius: 0.5rem;
  background: #fff;
  height: 5rem;
  color: #737373;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7rem;
  resize: none;
`;

const Edit = styled.div`
  display: flex;
  align-items: center;

  button {
    text-align: center;
    width: 4rem;
    height: 2rem;
    background: #009a78;
    border-radius: 0.625rem;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
    cursor: pointer;
  }
`;
function EditComments() {
    return (
        <>
            <h1>댓글 수정</h1>
            <Wrapper>
                <Write placeholder="댓글을 써주세요" />
                <Edit>
                    <WriteBtn/>
                </Edit>
            </Wrapper>
        </>
    );
}

export default EditComments;