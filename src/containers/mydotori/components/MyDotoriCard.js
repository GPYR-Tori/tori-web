import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
    background-color: #009A78;
    padding: 2.12rem;
    border-radius: 1rem;
`

const Label = styled.div`
    color: #FFF;
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 100;
    line-height: 2.25rem; /* 128.571% */
    margin-bottom: 3.62rem;
`

const CountLabel = styled.div`
    color: #FFF;
    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 4.125rem; /* 88% */
`

export function MyDotoriCard() {
    return (
        <Container>
            <Label>보유도토리</Label>
            <CountLabel>4개 / <span style={{fontSize: "1.75rem"}}>10개</span></CountLabel>
        </Container>
    )
}
