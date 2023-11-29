import { requester } from "./requester"

export async function fetchLandmark(latitude, longitude, userId) {
    const response = await requester().get('/api/dotori',{params: {latitude, longitude, userId}})

    return response.data
}