import React from "react";
import styled from "@emotion/styled";
import TripCards from "@/pages/landmarks/TripCards";
import Category from "@/pages/category";



const Wrapper = styled.div`
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 3rem;
  gap: 1rem;
  margin-top: 1.5rem;
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