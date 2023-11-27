import { requester } from "./requester"

export async function fetchDotoriStatus(userId) {
    const response = await requester().get(`/api/users/${userId}/mydotori`)

    return response.data
}

