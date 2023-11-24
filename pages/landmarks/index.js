import React from "react";
import styled from "@emotion/styled";
import TripCards from "@/pages/landmarks/TripCards";
import Category from "@/pages/category";



const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding: 0 5rem;
  & > * {
    flex: 1;
  }
`

function Landmarks() {
    return (
        <>
            <Category/>
            <Wrapper>
                <TripCards/>
                <TripCards/>
                <TripCards/>
                <TripCards/>
                <TripCards/>
            </Wrapper>
        </>
    );
}

export default Landmarks;
