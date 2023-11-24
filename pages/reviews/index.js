import React, {useEffect, useState} from "react";
import SampleReviews from "@/pages/reviews/SampleReviews";
import styled from "@emotion/styled";
import WatchReviews from "@/pages/reviews/WatchReviews";
import WriteReview from "@/pages/reviews/WriteReview"
import TripReviewBar from "@/pages/landmarks/checkTrip/TripReviewBar";
import WatchComments from "@/pages/reviews/WatchComments";
import WriteComments from "@/pages/reviews/WriteComments";
import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";
import axios from "axios";

function Reviews() {
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
            const response = await axios.get(`http://localhost:8080/landmarks/${landmark-id}/reviews`);
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
            {reviewData.map((item)=>(
                <Container key={item.id}>
                    <TripReviewBar reviewTotal={item.total_review} />
                    <SampleRWrap>
                        <SampleReviews content={item.content}/>
                    </SampleRWrap>
                    {/*버튼 보여주기*/}
                    <WriteReviewBtn>
                        {showWriteBtn && (
                            <button onClick={handleWriteBtn}>리뷰 쓰기</button>
                        )}
                        {showWatchBtn && (
                            <button onClick={handleWatchBtn}>리뷰 보기</button>
                        )}
                    </WriteReviewBtn>
                    {/* 리뷰 작성 or 조회*/}
                    {isWriteReview ? (
                        <WriteReview/>
                        ) : (
                            <WatchReviews
                                user_id={item.user_id}
                                nickname={item.nickname}
                                nationality={item.nationality}
                                created_date={item.created_date}
                                content={item.content}
                            />
                        )}
                    <WriteComments/>
                    {item.commentList ?.map((cmt,index)=>(
                        <WatchComments
                            key={cmt.comment_id}
                            id={cmt.nickname}
                            country={cmt.nationality}
                            date={cmt.created_date}
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