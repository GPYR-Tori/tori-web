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

function Reviews({landmarkId}) {
    const [showWriteBtn, setShowWriteBtn] = useState(true);
    const [showWatchBtn, setShowWatchBtn] = useState(false);
    const [isWriteReview, setIsWriteReview] = useState(false);
    const [reviewData, setReviewData] = useState([]);
    const handleWriteBtn = () => {
        setShowWriteBtn(false);
        setShowWatchBtn(true);
        setIsWriteReview(true);
    };

    const handleWatchBtn = () => {
        setShowWriteBtn(true);
        setShowWatchBtn(false);
        setIsWriteReview(false);
    };

    const getData = async () => {
        try {
            // /landmarks/{landmarkId}/reviews
            const response = await axios.get(`https://tori.com/api/reviews`);
            setReviewData(response.data);
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
            <TripReviewBar />
            <WriteReviewBtn>
                {showWriteBtn && (
                    <button onClick={handleWriteBtn}>리뷰 쓰기</button>
                )}
                {showWatchBtn && (
                    <button onClick={handleWatchBtn}>리뷰 보기</button>
                )}
            </WriteReviewBtn>
            {reviewData.map((item)=>(
                <Container key={item.id}>
                    {/*<SampleRWrap>*/}
                    {/*    <SampleReviews content={item.content}/>*/}
                    {/*</SampleRWrap>*/}

                    {/* 리뷰 작성 or 조회*/}
                    {isWriteReview ? (
                        <WriteReview id={item.id}/>
                        ) :null}
                            <WatchReviews
                                user_id={item.userId}
                                nickname={item.nickname}
                                nationality={item.nation}
                                created_date={item.createDate}
                                content={item.content}
                                landmarkId={landmarkId}
                            />

                    <WriteComments/>
                    {item.commentList ?.map((cmt,index)=>(
                        <WatchComments
                            key={index}
                            id={cmt.nickname}
                            country={cmt.nation}
                            date={cmt.createDate}
                            comments={cmt.content}
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