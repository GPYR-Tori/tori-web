import {useRouter} from "next/router";
import LandmarkDetail from "@/src/containers/landmarkDetail";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Detail() {

    const [data, setData] = useState({})
    const router = useRouter()
    // 콘솔로그 꼭 찍어볼것 - 라우터 있는지 확인 => router.query 확인
    const landmarkId = router.query.id;
    const  userId = router.query.user;
    console.log("router", router)

    //axios로 보내는 방법
    const getLandmarks = async () => {
        const res = await axios({
            url: `landmarks/${landmarkId}`,
            method: 'get',
        })
        // res.data를 담아줌 => 콘솔로 한번 찍어보고 어떤 데이터인지 확인 후 [],{},null 로 넣어주기
        // [] === 배열일때만
        setData(res.data)
    }
    useEffect(() => {
        // axios는 프로미스를 리턴
        // => 프로미스 값은 처음에는  undefined이기 때문에 조건식 피요함
        // 만약 landmarkId가 없으면 암것도 실행하지 않음
        if (!landmarkId) return
        getLandmarks()
    }, [landmarkId]);
    console.log("data",data)
    if (!data) return <p>'loading...'</p>

    return (
        <>
            <LandmarkDetail data={data} landmarkId={landmarkId}/>
        </>
    )
}

