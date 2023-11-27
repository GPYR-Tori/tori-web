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
                "landmarkName": "수원화성",
                "landmarkAddress": "수원시 어쩌구",
                "landmarkLatitude": "37.365731",
                "landmarkLongitude": "127.130701",
            },
        ])
    }
    
}