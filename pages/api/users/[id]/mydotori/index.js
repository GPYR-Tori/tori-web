export default function handler(request, response) {
    response.status(200).json({
        "id": "chacha",
        "total": "13",
        "num": "3",
        "totalRanking": [
            {
                "id": "1등user",
                "num": "10",
            },
            {
                "id": "2등user",
                "num": "7",
            },
            {
            "id": "dotoritori",
            "num": "5",
            },
        ],
        "userRanking": "4",
        "createDate": "적립 날짜",
    })
}