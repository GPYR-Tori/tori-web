import React, {useState} from "react";
import styled from "@emotion/styled";
import WriteBtn from "@/pages/reviews/Btn/WriteBtn";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
`;
const Write = styled.textarea`
  margin:2rem 0 2rem 1.5rem;
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
function WriteComments() {
    const [comment, setComment] = useState(""); // State to hold the comment content

    const handleCommentSubmit = async () => {
        try {
            const user_id = "사용자 아이디"; // 실제 사용자 아이디로 교체
            const review_id = "여행지 아이디"; // 실제 여행지 아이디로 교체

            const requestBody = {
                user_id: "사용자 아이디",
                review_id: "리뷰 아이디",
                content: comment,
            };

            // API에 POST 요청 보내기
            const response = await axios.post("https://jsonplaceholder.typicode.com/comments", requestBody);

            console.log("댓글 작성 완료:", response.data);

            // 리뷰 작성 후 추가적인 작업 수행 (예: 화면 갱신)
        } catch (error) {
            console.error("댓글 작성 에러:", error);
            // 에러 처리 (예: 사용자에게 메시지 표시)
        }
    };
    return (
        <Wrapper>
            <Write placeholder="댓글을 써주세요"
                   value={comment}
                   onChange={(e) => setComment(e.target.value)} />
            <Edit>
                <WriteBtn onClick={handleCommentSubmit} />
            </Edit>
        </Wrapper>
    );
}

export default WriteComments;
