import axios from "axios";
import {error} from "next/dist/build/output/log";

const httpClient = axios.create({
    //해당 서버 baseUrl로 변경해주세요!
    baseURL:`https://tori.com/api/`,
    timeout: 10000,
})

// 가이드 조회
export const getGuide = async (userId) => {
    try{
        const response = await httpClient({
            method: "get",
            url: `guide/${userId}`,
        })
        return response.data;
        console.log("가이드 조회 성공!")
    }
    catch {
        console.error("가이드 조회 실패:", error);
    }
}
