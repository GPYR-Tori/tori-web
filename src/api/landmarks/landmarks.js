import axios from "axios";


const httpClient = axios.create({
    baseURL:`https://tori.com/api/`,
    timeout: 10000,
})

// 여행지를 가져오는 api
export const GetLandmarksData = async () => {
    const response = await httpClient({
        method: "get",
        url: `landmarks`,
    })
    return response.data;
}

//상세 서여행지 조회 api
export const GetLandmarksDetailData = async (landmarksId) => {
    const response = await ({
        method: "get",
        url: `landmarks/${landmarksId}`,
    })
    console.log("response.data",response.data)
    return response.data;
}
