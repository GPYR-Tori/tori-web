import React, {useState} from "react";
import styled from "@emotion/styled";
import WriteBtn from "@/src/containers/review/components/Btn/WriteBtn";
import {postCommentsData} from "@/src/api/reviews/reviewsApi";


function WriteComments({userId, reviewId}) {
    const [content, setContent] = useState('');

    if (!userId) {
        alert('You need to log in.');
        return;
    }

    const changeComment = (e) => {
        setContent(e.target.value);
    };

    const handleCommentSubmit = async () => {
        console.log("??/")
            const requestBody = {
                userId: {userId},
                content: content,
            };
            await postCommentsData(reviewId, requestBody);
            setContent('');
    };


    return (
        <Wrapper>
            <form onSubmit={handleCommentSubmit}>
                <Write placeholder="Please write a comment."
                       value={content}
                       onChange={changeComment} />
                <Edit>
                    <WriteBtn/>
                </Edit>
            </form>


        </Wrapper>
    );
}

export default WriteComments;

const Wrapper = styled.div`
  margin: 0 3rem;
`;
const Write = styled.textarea`
  padding: 1.5rem;
  border: none;
  outline: none;
  width: 100%;
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
  justify-content: flex-end;
  margin-right: 2rem;
  margin-top: 0.4rem;
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


