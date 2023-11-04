import React from "react";
import TripContents from "@/pages/landmarks/checkTrip/TripContents";
// import TripReviewBar from "@/pages/components/TripReviewBar/TripReviewBar";
import TripInfo from "@/pages/landmarks/checkTrip/TripInfo";
import {GlobalStyle} from "@/styles/GlobalStyle";
import TripReviewBar from "@/pages/landmarks/checkTrip/TripReviewBar";

function CheckTravel() {
  return (
    <>
      <GlobalStyle />
      <TripContents
        title={"수원 행리단길"}
        category={"쇼핑"}
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

export default CheckTravel;
