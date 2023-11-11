import styled from "@emotion/styled";


const Container = styled.div`
    background-color: #FFF2D9;
    padding: 1.88rem;
    border-radius: 1rem;
    display: flex;
`
const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.12rem;
`
const Label = styled.div`
    color: #191919;
    font-family: Inter;
    font-size: 2.375rem;
    font-style: normal;
    line-height: normal; 
`

export function DotoriStampCard () {
    return (
        <div style={{margin:"3rem"}}>
            <Label>도토리 스탬프 카드</Label>
            <Container>
                <Column>
                    {/* true,false는 백에서 받아오기*/}
                    <DotoriStamp filled={false}/>
                    <DotoriStamp/>
                    <DotoriStamp/>
                </Column>
                <Column>
                    <DotoriStamp/>
                    <DotoriStamp/>
                    <DotoriStamp/>
                    <DotoriStamp/>
                </Column>
                <Column>
                    <DotoriStamp/>
                    <DotoriStamp/>
                    <DotoriStamp/>
                </Column>
            </Container>
        </div>
    )

}

function DotoriStamp ({filled}) {
    return (
        <img style={{width:"9.375rem"}} src={filled?"/images/filled_stamp.png":"/images/empty_stamp.png"}/>
    )
}