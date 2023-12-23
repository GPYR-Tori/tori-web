import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import TripCards from "@/src/containers/landmarks/components/TripCards";
import Category from "@/src/components/category";
import {GetLandmarksData} from "@/src/api/landmarks/landmarks";

function Landmarks() {
    const [data,setData] =useState([])
    useEffect(() => {
        GetLandmarksData().then(setData);
    }, []);

    return (
        <>
            <Category/>
            <Wrapper>
                <TripCards data={data} userId={'2'}/>
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
