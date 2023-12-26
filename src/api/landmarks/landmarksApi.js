import axios from "axios";
import {log} from "next/dist/server/typescript/utils";

const httpClient = axios.create({
    //해당 서버 baseUrl로 변경해주세요!
    baseURL:`https://tori.com/api/`,
    timeout: 10000,
})


// 여행지 조회 api
export const getLandmarksData = async () => {
    try{
        const response = await httpClient({
            method: "get",
            url: `landmarks`,
        })
        console.log("여행지 조회 성공")
        return response.data;
    }catch (error) {
        console.error("여행지 조회 실패:", error);
    }

}

//상세 여행지 조회 api
export const getLandmarksDetailData = async (landmarksId) => {
    try{
        const response = await httpClient({
            method: "get",
            url: `landmarks/${landmarksId}`,
        })
        console.log("상세 여행지 조회 성공")
        return response.data;
    }catch (error) {
        console.error("상세 여행지 조회 실패:", error);
    }

}
