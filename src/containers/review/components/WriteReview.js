import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import axios from "axios";

function WriteReview({id}) {
    const [reviewContent, setReviewContent] = useState("");

    const handleReviewSubmit = async () => {
        try {
            const requestBody = {
                userId: {id},
                content: reviewContent,
            };
            // API에 POST 요청 보내기
            const response =
                await axios.post("https://tori.com/api/reviews/write", requestBody);
            console.log("리뷰 작성 완료:",response.data );
        } catch (error) {
            console.error("리뷰 작성 에러:", error);
        }
    };

    useEffect(() => {
        handleReviewSubmit()
    }, []);

    return (
        <>
            <Wrapper>
                <form onSubmit={handleReviewSubmit}>
                    <Write
                        // name="content"
                        // value={reviewContent || ""}
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
  outline: none;
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
