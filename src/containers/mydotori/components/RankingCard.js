import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
    background-color: #FFF8EB;
    border-radius: 1rem;
    padding: 2.12rem;
    & > *:nth-child(even) {
        background-color: #FFF2D9;
    }
`

const Label = styled.div`
    color: #414141;
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 100;
    line-height: 2.25rem; /* 128.571% */
    margin-bottom: 1.25rem;
`


export function RankingCard (props) {
    return (
        <Container>
            <Label>도토리순위</Label>
            <RankItem>{props.totalRanking[0].id}</RankItem>
            <RankItem>{props.totalRanking[1].id}</RankItem>
            <RankItem>{props.totalRanking[2].id}</RankItem>
        </Container>
    )

}

const RankItem = styled.div`
    width: 100%;
    height: 3.375rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    color: #7D7D7C;
    font-family: Inter;
    font-size: 1.375rem;
    font-style: normal;
    line-height: 3.375rem; /* 245.455% */
`
