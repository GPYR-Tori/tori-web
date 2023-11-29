import React from "react";
import styled from "@emotion/styled";
import TripCards from "@/src/containers/landmarks/components/TripCards";
import Category from "@/pages/category";

function Landmarks() {


    return (
        <>
            <Category/>
            <Wrapper>
                <TripCards/>
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
