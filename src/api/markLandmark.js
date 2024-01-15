import { requester } from "./requester";

export async function markLandmark(userId, landmarkId) {
    const response = await requester().post('api/dotori', {userId, landmarkId})
};