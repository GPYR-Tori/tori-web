import styled from "@emotion/styled";
import Router from "next/router";

const Container = styled.div`
    width: 25rem;
    height: 9.375rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: #FFF;
    box-shadow: 0px 7px 14px 0px #F2E3C8;
    display: flex;
    gap: 1.69rem;
    padding: 1.25rem;
`
const ImageContainer = styled.img`
    width: 6.875rem;
    height: 6.875rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #D3D3D3;
`
const LandmarkName = styled.div`
    color: #808080;
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
`
const LandmarkAddress = styled.div`
    color: #808080;
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
`

export function LandmarkCard(props) {
    return (
        <Container onClick={() => Router.push(`/landmarks/${props.landmarkId}`)} >
            <ImageContainer src="/images/dotori/Landmark_ex1.png"/>
            <LandmarkName> {props.name} </LandmarkName>
            <LandmarkAddress>{props.address}</LandmarkAddress>
        </Container>
    )
}