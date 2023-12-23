import axios from "axios";


const httpClient = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
})


// 리뷰를 가져오는 API
// GET /landmarks/{landmarkId}/reviews
export const GetReviewData = async (landmarkId) => {
    const response = await ({
        method: "get",
        url: `landmarks/${landmarkId}/reviews`,
    })
    return response.data;
}

