export default function handler(request, response) {
    if (request.method == "POST") {
        // POST
        response.status(200).json({
            "result": "success"
        })
    } else {
        // GET 일 때
        response.status(200).json([
            {
                "landmarkId": "3",
                "name": "수원화성",
                "address": "수원시 어쩌구",
                "latitude": "37.365731",
                "longitude": "127.130701",
            },
        ])
    }
    
}