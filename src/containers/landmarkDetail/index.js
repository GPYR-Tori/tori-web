import React from "react";
import TripContents from "@/src/containers/landmarkDetail/components/TripContents";
import TripInfo from "@/src/containers/landmarkDetail/components/TripInfo";
import TripReviewBar from "@/src/containers/landmarkDetail/components/TripReviewBar";


function LandmarkDetail({data, landmarkId}) {
    const {name, imageList,address,description,price ,time,site,categoryList,locationList} = data
  return (
    <>
      <TripContents
        name={name}
        categoryList={categoryList}
        address={address}
        time={time}
        price={price}
        call={"전화번호"}
      />
        <TripReviewBar landmarkId={landmarkId} />
        <TripInfo/>
    </>
  );
}

export default LandmarkDetail;
