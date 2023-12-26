import axios from "axios";
import {error} from "next/dist/build/output/log";

const httpClient = axios.create({
    //해당 서버 baseUrl로 변경해주세요!
    baseURL:`https://tori.com/api/`,
    timeout: 10000,
})

// 리뷰 작성 API
export const postReviewData = async (landmarkId,requestBody) => {
    try{
        const response = await httpClient({
            method: "popst",
            url: `landmarks/${landmarkId}/reviews`,
            data: requestBody
        })
    }
    catch {console.log("리뷰 작성 API ERROR",error)}
}



// 리뷰 조회 API
export const getReviewData = async (landmarkId) => {
    try{
        const response = await httpClient({
            method: "get",
            url: `landmarks/${landmarkId}/reviews`,
        })
        return response.data;
    }
    catch {console.log("리뷰 조회 API ERROR",error)}
}



// 리뷰 수정 API
export const patchReviewData = async (landmarkId,reviewId,requestBody) => {
    try{
        await httpClient ({
            method: "patch",
            url: `landmarks/${landmarkId}/reviews/${reviewId}`,
            data: requestBody,
        })
    }catch {console.log("리뷰 수정 API ERROR",error)}

}


// 리뷰 삭제 API
export const deleteReviewData = async (landmarkId,reviewId,requestBody) => {
    try {
        await httpClient({
            method: "delete",
            url: `landmarks/${landmarkId}/reviews/${reviewId}`,
            data: requestBody,
        })
    }catch {console.log("리뷰 삭제 API ERROR",error)}

}


// 댓글 작성
export const postCommentsData = async (reviewId, requestBody) => {
    try{
        await httpClient({
            method: "post",
            url: `reviews/${reviewId}/comments`,
            data: requestBody,
        })
        console.log("댓글 작성 성공!")
    }catch {console.log("댓글 작성 API ERROR",error)}

}



//댓글 수정
export const patchCommentData= async (reviewId,commentId,requestBody) => {
   try{
       await httpClient ({
           method: "patch",
           url: `reviews/${reviewId}/comments/${commentId}`,
           data: requestBody,
       })
   }catch {console.log("댓글 수정 API ERROR",error)}
}


// 댓글 삭제 API
export const deleteCommentData = async (reviewId,commentId,requestBody) => {
    try{
        await httpClient({
            method: "delete",
            url: `reviews/${reviewId}/comments/${commentId}`,
            data: requestBody,
        })
    }catch {console.log("댓글 삭제 API ERROR",error)}
}

