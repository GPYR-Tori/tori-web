import React, {useState} from 'react';
import styled from '@emotion/styled';

const CtgPlaceBtn=()=>{
  const [selected, selectArea] = useState();
  console.log(selected)
    return(
        <>
            <Container>
                <PlaceName>지역</PlaceName>
                <BtnDiv>
                    <AreaBtn onClick={() => selectArea('동부')} 
                      active={selected=='동부'}>동부</AreaBtn>
                    <AreaBtn onClick={() => selectArea('서부')} 
                      active={selected=='서부'}>서부</AreaBtn>
                      <AreaBtn onClick={() => selectArea('남부')} 
                      active={selected=='남부'}>남부</AreaBtn>
                      <AreaBtn onClick={() => selectArea('북부')} 
                      active={selected=='북부'}>북부</AreaBtn>
                </BtnDiv>
            </Container>
        </>
    )
}

const Container=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: calc(100% - 6rem);
  height: 6.25rem;
  flex-shrink: 0;
  margin-top: 4.56rem;
  border-radius: 0.5rem;
  background: #FAFAFA;
  
`;
const PlaceName=styled.p`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2.5rem;
  margin-right:1.75rem;
`
const BtnDiv=styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-right: 2.31rem;
    gap: 1.75rem;
`
const AreaBtn=styled.div`
  display: inline-flex;
  flex: 1;
  padding: 0.6875rem 0;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
  border-radius: 4.375rem;
  background: #FFF;

  color: #8A8A8A;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  // 지역 선택 시 active값 유지 하도록 설정, 추후에 백엔드에 넘겨줄 때 용이
  ${p => p.active?
  `background: #009A78;
  color: #FFF;`:''}
`

export default CtgPlaceBtn;