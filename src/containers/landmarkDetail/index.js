import React from "react";
import TripContents from "@/src/containers/landmarkDetail/components/TripContents";
import TripInfo from "@/src/containers/landmarkDetail/components/TripInfo";
import TripReviewBar from "@/src/containers/landmarkDetail/components/TripReviewBar";


function LandmarkDetail() {
  return (
    <>
      <TripContents
        title={"수원 행리단길"}
        category={"카테고리"}
        address={"경기 수원시 달달구 화서갈로 53"}
        time={"운영시간"}
        fee={"입장료"}
        call={"전화번호"}
        reviewTotal={123}
      />
        <TripReviewBar reviewTotal={121}/>
        <TripInfo/>
    </>
  );
}

export default LandmarkDetail;
