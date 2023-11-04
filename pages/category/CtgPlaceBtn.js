import React from 'react';
import styled from '@emotion/styled';

const CtgPlaceBtn=()=>{
    return(
        <>
            <Container>
                <p className={'placeName'}>지역</p>
                <button className={'East'}>동부</button>
                <button className={'Weast'}>서부</button>
                <button className={'South'}>남부</button>
                <button className={'North'}>북부</button>
            </Container>
        </>
    )
}

const Container=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  margin-top: 39px ;

  width: 654px;
  height: 100px;
  flex-shrink: 0;

  border-radius: 8px;
  background: #FAFAFA;
  
  .placeName{
    width: 45px;
    height: 30px;
    
    color: #000;
    //font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: 0 auto 0 40px;
    justify-content: center;

    display: flex;
    flex-direction: row;
    
  }
  
  .East{
    //display: inline-flex;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 30px;
    
    margin-left: 28px;

    width: 105px;
    height: 51px;
    flex-shrink: 0;

    color: #8A8A8A;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    background-color: #fff;
    border-radius: 50px;
    border: none;
    
    &:hover{
      background-color:#009A78;

      color: #FFF;
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 100;
      line-height: normal;
    }
  }

  .Weast{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    margin-left: 28px;
    
    width: 105px;
    height: 51px;
    flex-shrink: 0;

    color: #8A8A8A;
    //font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    background-color: #fff;
    border-radius: 50px;
    border: none;

    &:hover{
      background-color:#009A78;

      color: #FFF;
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 100;
      line-height: normal;
    }
  }

  .South{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    margin-left: 28px;
    
    width: 105px;
    height: 51px;
    flex-shrink: 0;

    color: #8A8A8A;
    //font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    background-color: #fff;
    border-radius: 50px;
    border: none;

    &:hover{
      background-color:#009A78;

      color: #FFF;
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 100;
      line-height: normal;
    }
  }

  .North{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    //margin-left: 28px;
    margin: auto 37px auto 28px;
    
    width: 105px;
    height: 51px;
    flex-shrink: 0;

    color: #8A8A8A;
    //font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    background-color: #fff;
    border-radius: 50px;
    border: none;

    &:hover{
      background-color:#009A78;

      color: #FFF;
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 100;
      line-height: normal;
    }
  }
`;

export default CtgPlaceBtn;