import React from "react";
import styled from "@emotion/styled";
import TripCards from "@/pages/landmarks/TripCards";
import Category from "@/pages/category";

const CardWrap = styled.div`
  display: flex;
  padding: 3rem;
  margin: auto;
  gap: 1rem;
  flex-wrap: wrap;
`;

function Landmarks() {
    return (
        <>
            <Category/>
             <CardWrap>
                 <TripCards/>
                 <TripCards/>
                </CardWrap>



        </>
    );
}

export default Landmarks;
