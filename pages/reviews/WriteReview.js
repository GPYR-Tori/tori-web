import React, {useState} from "react";
import styled from "@emotion/styled";
import axios from "axios";

// { res
// “id”: “리뷰 아이디”,
// “user_id”: “사용자 아이디”,
// “nickname”: “작성자”,
// “nationality”: “작성자 국적”,
// “content”: “리뷰 내용”,
// “created_date”: “작성일”
// }

// req
// {
// “user_id”: “사용자 아이디”,
// “content”: “리뷰 내용”
// }

function WriteReview() {
    const [reviewContent, setReviewContent] = useState("");

    const handleReviewSubmit = async () => {
        try {
            const user_id = ""; // 실제 사용자 아이디로 교체...?

            const requestBody = {
                user_id: user_id,
                content: reviewContent,
            };
            // API에 POST 요청 보내기
            const response =
                await axios.post("http://localhost:8080/landmarks/{landmark-id}/reviews", requestBody);
            console.log("리뷰 작성 완료:", response.data);
        } catch (error) {
            console.error("리뷰 작성 에러:", error);
        }
    };

    return (
        <>
            <Wrapper>
                <form onSubmit={handleReviewSubmit}>
                    <Write
                        name="content"
                        id="content"
                        value={reviewContent || ""}
                       onChange={(e) => setReviewContent(e.target.value)} />
                <Btn>
                    <button type={"submit"} >작성 완료</button>
                </Btn>
                </form>
            </Wrapper>
        </>

    );
}

export default WriteReview;


const Wrapper = styled.div`
  //width: 40.875rem;
  border-radius: 0.5rem;
  background: #fafafa;
  margin: 3rem;
`;

const Write = styled.textarea`
  resize: none;
  margin-left: 1rem;
  width: 90%;
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
