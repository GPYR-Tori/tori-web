import React from "react";
import Reviews from "@/src/containers/review";


function ReviewPage ({landmarkId}) {
    return (
    <>
        <Reviews landmarkId={landmarkId}/>
    </>
    );
  }

  export default ReviewPage;