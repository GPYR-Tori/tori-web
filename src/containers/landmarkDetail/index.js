import React from "react";
import TripContents from "@/src/containers/landmarkDetail/components/TripContents";
import TripInfo from "@/src/containers/landmarkDetail/components/TripInfo";
import TripReviewBar from "@/src/containers/landmarkDetail/components/TripReviewBar";


function LandmarkDetail({data, landmarkId}) {
    const {name,phoneNum, imageList=[],address,description,price ,time,site,categoryList=[],locationList=[]} = data
  return (
    <>
      <TripContents
        name={name}
        categoryList={categoryList}
        address={address}
        time={time}
        price={price}
        phoneNum={phoneNum}
        site={site}
        imageList={imageList}
        locationList={locationList}
    />
        <TripReviewBar landmarkId={landmarkId} />
        <TripInfo description={description}   imageList={imageList}/>
    </>
  );
}

export default LandmarkDetail;
