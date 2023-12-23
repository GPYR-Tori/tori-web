import React, {useEffect, useState} from "react";
import TripContents from "@/src/containers/landmarkDetail/components/TripContents";
import TripInfo from "@/src/containers/landmarkDetail/components/TripInfo";
import TripReviewBar from "@/src/containers/landmarkDetail/components/TripReviewBar";
import {useRouter} from "next/router";
import axios from "axios";
import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";

function LandmarkDetail() {
    const [data, setData] = useState({})
    const {name,phoneNum, imageList=[],address,description,price ,time,site,categoryList=[],locationList=[]} = data
    const router = useRouter()
    const landmarkId = router.query.id;

    const getLandmarksData = async () => {
        const res = await axios({
            url: `landmarks/${landmarkId}`,
            method: 'get',
        })
        setData(res.data)
    }

    useEffect(() => {
        if (!landmarkId) return
        getLandmarksData()
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
