import React, {useEffect, useState} from "react";
import TripContents from "@/src/containers/landmarkDetail/components/TripContents";
import TripInfo from "@/src/containers/landmarkDetail/components/TripInfo";
import TripReviewBar from "@/src/containers/landmarkDetail/components/TripReviewBar";
import {useRouter} from "next/router";
import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";
import {getLandmarksDetailData} from "@/src/api/landmarks/landmarksApi";


function LandmarkDetail() {
    const [data, setData] = useState({})
    const {name,phoneNum, imageList=[],address,description,price ,time,site,categoryList=[],locationList=[]} = data
    const router = useRouter()
    const landmarkId = router.query.id;

    useEffect(() => {
        if (!landmarkId) return
        getLandmarksDetailData(landmarkId).then(setData);
    }, [landmarkId]);
    console.log("data",data)

    if (!data) return <p>'loading...'</p>

    return (
    <>
        <AppBar/>
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
        <TripInfo description={description} imageList={imageList}/>
        <NavBar/>
    </>
  );
}

export default LandmarkDetail;
