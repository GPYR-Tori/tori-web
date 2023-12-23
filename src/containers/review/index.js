import React, {useEffect, useState} from "react";
import SampleReviews from "@/src/containers/review/components/SampleReviews";
import styled from "@emotion/styled";
import WatchReviews from "@/src/containers/review/components/WatchReviews";
import WriteReview from "@/src/containers/review/components/WriteReview"
import TripReviewBar from "@/src/containers/landmarkDetail/components/TripReviewBar";
import WatchComments from "@/src/containers/review/components/WatchComments";
import WriteComments from "@/src/containers/review/components/WriteComments";
import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";
import axios from "axios";
import {useRouter} from "next/router";

function Reviews() {
    const [showWriteReviewBtn, setShowWriteReviewBtn] = useState(true);
    const [showWatchReviewBtn, setShowWatchReviewBtn] = useState(false);
    const [isWriteReview, setIsWriteReview] = useState(false);

    const [reviewData, setReviewData] = useState([]);
    const router = useRouter()
    const landmarkId = router.query.id;
    // 임시로 만든 loginUser입니다.
    const loginUser = 1

    const handleWriteReviewBtn = () => {
        setShowWriteReviewBtn(false);
        setShowWatchReviewBtn(true);
        setIsWriteReview(true);
    };
    const handleWatchReviewBtn = () => {
        setShowWriteReviewBtn(true);
        setShowWatchReviewBtn(false);
        setIsWriteReview(false);
    };

    const getData = async () => {
        try {
            const response = await axios.get(`landmarks/${landmarkId}/reviews`);
            setReviewData(response.data);
            console.log("response.data",response.data)
        } catch (error) {
            console.error('에러 발생:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <AppBar/>
            <TripReviewBar landmarkId={landmarkId} />
            <WriteReviewBtn>
                {showWriteReviewBtn && (
                    <button onClick={handleWriteReviewBtn}>Write</button>
                )}
                {showWatchReviewBtn && (
                    <button onClick={handleWatchReviewBtn}>Watch</button>
                )}
            </WriteReviewBtn>
            {isWriteReview ? (
                <WriteReview landmarkId={landmarkId} userId={loginUser}/>
            ) :null}
            {reviewData.map((item)=>(
                <Container>
                    {/*<SampleRWrap>*/}
                    {/*    <SampleReviews content={item.content}/>*/}
                    {/*</SampleRWrap>*/}
                    <WatchReviews
                        loginUser={loginUser}
                        reviewId ={item.reviewId}
                        userId={item.userId}
                        nickname={item.nickname}
                        nation={item.nation}
                        createDate={item.createDate}
                        content={item.content}
                        landmarkId={landmarkId}
                    />

                    <WriteComments userId={loginUser} reviewId={item.reviewId} />

                    {item.commentList?.map((cmt)=>(
                        <WatchComments
                            commentId={cmt.commentId}
                            userId ={cmt.userId}
                            nickname={cmt.nickname}
                            nation={cmt.nation}
                            createDate={cmt.createDate}
                            content={cmt.content}
                            reviewId ={item.reviewId}
                            loginUser={loginUser}
                        />
                    ))}
                </Container>
            ))}
            <NavBar/>
        </>

    );
}

export default Reviews;


const Container = styled.div`

`;

const SampleRWrap = styled.div`
  display: flex;
  padding: 0 2rem;
  overflow: scroll;
`;
const WriteReviewBtn = styled.div`
  display: inline-flex;
  padding: 0 3rem;
  gap: 0.625rem;
  margin-bottom: 2.5rem;

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