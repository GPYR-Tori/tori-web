import axios from "axios";
import {error} from "next/dist/build/output/log";

const httpClient = axios.create({
    //해당 서버 baseUrl로 변경해주세요!
    baseURL:`https://tori.com/api/`,
    timeout: 10000,
})

// 좋아요 조회
export const getFavorites = async (userId) => {
    try{
        const response = await httpClient({
            method: "get",
            url: `user/${userId}/myLandmarks`,
        })
        return response.data;
    }
    catch {
        console.error("좋아요 조회 실패: ", error);
    }
}

// 좋아요 추가
export const postFavorites = async (landmarkId,requestBody) => {
    try{
        await httpClient({
            method: "post",
            url: `landmarks/${landmarkId}/favorites`,
            data: requestBody,
        })
        console.error("좋아요 추가 성공");
    }catch {
        console.error("좋아요 추가 실패:", error);
    }
}


//좋아요 삭제
export const deleteFavorites = async (landmarkId, requestBody) => {
    try {
     await httpClient({
            method: "delete",
            url: `landmarks/${landmarkId}/favorites`,
            data: requestBody,
        })
        console.error("좋아요 삭제 성공");
    }catch {
        console.error("좋아요 삭제 실패:", error);

    }
}
