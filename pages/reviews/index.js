import React, {useState} from "react";
import SampleReviews from "@/pages/reviews/SampleReviews";
import styled from "@emotion/styled";
import WatchReviews from "@/pages/reviews/WatchReviews";
import WriteReview from "@/pages/reviews/WriteReview"
import TripReviewBar from "@/pages/landmarks/checkTrip/TripReviewBar";
import WatchComments from "@/pages/reviews/WatchComments";
import WriteComments from "@/pages/reviews/WriteComments";
import EditComments from "@/pages/reviews/EditComment";

function Reviews() {
    const [showWriteReviewBtn, setShowWriteReviewBtn] = useState(true);
    const [showWatchReviewBtn, setShowWatchReviewBtn] = useState(false);
    const [showWriteReview, setShowWriteReview] = useState(false);
    const handleWriteBtnClick = () => {
        setShowWriteReviewBtn(false);
        setShowWatchReviewBtn(true);
        setShowWriteReview(true);
    };

    const handleWatchBtnClick = () => {
        setShowWriteReviewBtn(true);
        setShowWatchReviewBtn(false);
        setShowWriteReview(false);
    };

    const handleEditRBtn = () =>{
        setShowEditR(true);
        setShowWatchReviewBtn(false);
    }

    return (
        <>
            
            <Wrapper>
                <TripReviewBar reviewTotal={123} />
                <SampleReviews
                    review={
                        "고객님, 안녕하세요." +
                        "\n" +
                        "먼저, 즐거운 여행하셨다니 무척 다행이고 또 잊지 않고 후기글 작성해 주셔서 감사드립니다.\n" +
                        "아프리카의 진면목을 알게 된 이번 여행이 행복한 순간들의 연속이었길 바라며 또 잊지 못할 좋은 추억으로 간직되셨으면 좋겠습니다.\n" +
                        "\n" +
                        "이번 여행에서 느끼신 행복감 오래오래 간직하셨으면 좋겠습니다.\n" +
                        "다음 여행도 참좋은여행과 함께 즐거운 여행 함께하시길 소망합니다.\n" +
                        "감사합니다."
                    }
                />
                <WriteReviewBtn>
                    {showWriteReviewBtn && (
                        <button onClick={handleWriteBtnClick}>리뷰 쓰기</button>
                    )}
                    {showWatchReviewBtn && (
                        <button onClick={handleWatchBtnClick}>리뷰 보기</button>
                    )}
                </WriteReviewBtn>
                {showWriteReview ? (
                    <WriteReview />
                ) : (
                    <WatchReviews
                        id={"토리"}
                        country={"대한민국"}
                        date={"2023-11-02"}
                        review={
                            "고객님, 안녕하세요. 먼저, 즐거운 여행하셨다니 무척 다행이고 또 잊지 않고 후기글 작성해 주셔서 감사드립니다. 아프리카의 진면목을 알게 된 이번 여행이 행복한 순간들의 연속이었길 바라며 또 잊지 못할 좋은 추억으로 간직되셨으면 좋겠습니다. 이번 여행에서 느끼신 행복감 오래오래 간직하셨으면 좋겠습니다. 다음 여행도 참좋은여행과 함께 즐거운 여행 함께하시길 소망합니다. 감사합니다.다음 여행도 참좋은여행과 함께 즐거운 여행 함께하시길 소망합니다. "
                        }
                    />
                )}


                <WriteComments/>
                <WatchComments
                    id={"도리"}
                    country={"미국"}
                    date={"2023-11-02"}
                    comments={
                        "고객님, 안녕하세요. 먼저, 즐거운 여행하셨다니 무척 다행이고 또 잊지 않고 후기글 작성해 주셔서 감사드립니다. 아프리카의 진면목을 알게 된 이번 여행이 행복한 순간들의 연속이었길 바라며 또 잊지 못할 좋은 추억으로 간직되셨으면 좋겠습니다. 이번 여행에서 느끼신 행복감 오래오래 간직하셨으면 좋겠습니다. 다음 여행도 참좋은여행과 함께 즐거운 여행 함께하시길 소망합니다. 감사합니다.다음 여행도 참좋은여행과 함께 즐거운 여행 함께하시길 소망합니다. "
                    }
                />
                <WatchComments
                    id={"도리"}
                    country={"미국"}
                    date={"2023-11-02"}
                    comments={
                        "댓글입니댜 댓글입니댜 댓글입니댜 댓글입니댜 댓글입니댜 댓글입니댜"
                    }
                />
                <EditComments id={"토리"}
                              country={"대한민국"}
                              date={"2023-11-02"}
                              review={
                                  "고객님, 안녕하세요. 먼저, 즐거운 여행하셨다니 무척 다행이고 또 잊지 않고 후기글 작성해 주셔서 감사드립니다. 아프리카의 진면목을 알게 된 이번 여행이 행복한 순간들의 연속이었길 바라며 또 잊지 못할 좋은 추억으로 간직되셨으면 좋겠습니다. 이번 여행에서 느끼신 행복감 오래오래 간직하셨으면 좋겠습니다. 다음 여행도 참좋은여행과 함께 즐거운 여행 함께하시길 소망합니다. 감사합니다.다음 여행도 참좋은여행과 함께 즐거운 여행 함께하시길 소망합니다. "
                              }/>

            </Wrapper>
        </>

    );
}

export default Reviews;


const Wrapper = styled.div`
  width: 40.875rem;
  margin: auto;
`;
const WriteReviewBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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

