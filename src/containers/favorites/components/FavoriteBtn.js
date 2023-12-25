import React, {useState} from "react";
import styled from "@emotion/styled";

const Icon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="none">
        <g clip-path="url(#clip0_4_1106)">
            <path d="M31.281 6.79503C30.2982 4.28393 28.4218 2.35843 25.9972 1.37246C24.9487 0.946468 23.887 0.73027 22.8423 0.73027C19.3676 0.73027 16.9366 3.05667 15.988 4.14727C15.0442 3.05293 12.6239 0.716925 9.15027 0.716925C8.10878 0.716925 7.05021 0.932589 6.00338 1.35805C3.57876 2.34402 1.70184 4.26951 0.719072 6.78008C-0.329356 9.45934 -0.227396 12.4957 0.999328 15.112C2.74119 18.8258 6.70109 24.6076 15.6741 31.0583L15.9853 31.2825L16.2966 31.0583C25.3139 24.5756 29.2695 18.8156 30.9996 15.1253C32.2274 12.5101 32.3294 9.47375 31.281 6.79503Z"
                  fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_4_1106">
                <rect width="32" height="32" fill="currentColor"/>
            </clipPath>
        </defs>
    </svg>
)
function FavoriteBtn () {

    return (
    <Wrapper>
        <Icon/>
    </Wrapper>
    );
  }


const Wrapper = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  margin: auto;

`;
  export default FavoriteBtn;
