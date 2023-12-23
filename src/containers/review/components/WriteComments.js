import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import WriteBtn from "@/src/containers/review/components/Btn/WriteBtn";
import axios from "axios";


function WriteComments({userId, reviewId}) {
    if (!userId) return alert('You need to log in.')
    const [content, setContent] = useState('');
    const handleCommentSubmit = async () => {
        try {
            const requestBody = {
                userId: {userId},
                content: content,
            };
            await axios.post(`/reviews/${reviewId}/comments`, requestBody);
            console.log("댓글 작성 완료:", requestBody);

        } catch (error) {
            console.error("댓글 작성 에러:", error);
        }
    };

    useEffect(() => {
        handleCommentSubmit()
    }, []);

    return (
        <Wrapper>
            <Write placeholder="댓글을 써주세요"
                   value={content}
                   onChange={(e) => setContent(e.target.value)} />
               <Edit>
                   <WriteBtn onClick={handleCommentSubmit} />
               </Edit>
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


