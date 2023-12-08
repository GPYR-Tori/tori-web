import axios from "axios";


const httpClient = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
})

// 리뷰를 가져오는 API
// GET /landmarks/{landmarkId}/reviews
export const fetchreivews = async (params) => {
    const {data} = await httpClient({
        method: "get",
        url: "/landmarks",
        //id는 고정값이 아니라서 함수 밖에서 받아와야됨
        // params: {
        //     landmark_id:id,
        // }
        params
    })
    return data;
}

//상세 여행지 조회 api
//get //landmarks/{landmarkId}

export const fetchLandmarksDetail = async (params) => {
    const {data} = await httpClient({
        method: "get",
        url: "/landmarks",
        params
    })
}
