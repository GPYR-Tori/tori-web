import {useRouter} from "next/router";
import LandmarkDetail from "@/src/containers/landmarkDetail";

export default function Detail(){
    const router = useRouter()
    const {landmarkId} = router.query;

    return(
        <>
            <LandmarkDetail/>
        </>
    )
}

