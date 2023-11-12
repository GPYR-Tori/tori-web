import React, {useState} from "react";
import styled from "@emotion/styled";
import axios from "axios";

const Wrapper = styled.div`
  width: 40.875rem;
  border-radius: 0.5rem;
  background: #fafafa;
  margin: auto;
`;

const Write = styled.textarea`
  resize: none;
  margin-left: 1rem;
  width: 39rem;
  height: 20rem;
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
    const [reviewContent, setReviewContent] = useState("");


    const handleReviewSubmit = async () => {
        try {
            const userId = "사용자 아이디"; // 실제 사용자 아이디로 교체
            const landmarkId = "여행지 아이디"; // 실제 여행지 아이디로 교체

            const requestBody = {
                user_id: userId,
                landmark_id: landmarkId,
                content: reviewContent,
            };

            // API에 POST 요청 보내기
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", requestBody);

            console.log("리뷰 작성 완료:", response.data);

            // 리뷰 작성 후 추가적인 작업 수행 (예: 화면 갱신)
        } catch (error) {
            console.error("리뷰 작성 에러:", error);
            // 에러 처리 (예: 사용자에게 메시지 표시)
        }
    };

    return (
        <>
            <Wrapper>
                <Write placeholder="리뷰를 작성해주세요"
                       value={reviewContent}
                       onChange={(e) => setReviewContent(e.target.value)} />
                <Btn>
                    <button onClick={handleReviewSubmit} >작성 완료</button>
                </Btn>
            </Wrapper>
        </>

    );
}

export default WriteReview;