import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import TripCards from "@/src/containers/landmarks/components/TripCards";
import Category from "@/src/components/category";
import {getLandmarksData} from "@/src/api/landmarks/landmarksApi";

// 로그인 된 유저 임시 정보
const loginUser = 2
function Landmarks() {
    const [data,setData] =useState([])
    useEffect(() => {
        getLandmarksData().then(setData);
    }, []);

    return (
        <>
            <Category/>
            <Wrapper>
                <TripCards data={data} userId={loginUser}/>
            </Wrapper>
        </>
    );
}

export default Landmarks;

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 3rem;
  gap: 1rem;
  margin-top: 1.5rem;
`
