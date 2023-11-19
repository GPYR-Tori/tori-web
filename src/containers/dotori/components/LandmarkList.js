import styled from "@emotion/styled";
import { LandmarkCard } from "./LandmarkCard";

const Container = styled.div`
    position: absolute;
    bottom: 11.25rem;
    width: 100%;
    padding-left: 3rem;
    z-index: 10;
    display: flex;
    gap: 1.25rem;

    // 스크롤바 없애기
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
    display: none; // Safari and Chrome
}
`

export function LandmarkList() {
    return (
        <Container>
            <LandmarkCard />
            <LandmarkCard />
        </Container>

    )
}