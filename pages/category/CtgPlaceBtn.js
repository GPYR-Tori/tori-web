import React from 'react';
import styled from '@emotion/styled';
import {GlobalStyle} from "@/styles/GlobalStyle";

const CtgPlaceBtn=()=>{
    return(
        <>
            <GlobalStyle />
            <Container>
                <p className={'placeName'}>지역</p>
                <div className={'btnDiv'}>
                    <button className={'East'}>동부</button>
                    <button className={'Weast'}>서부</button>
                    <button className={'South'}>남부</button>
                    <button className={'North'}>북부</button>
                </div>
            </Container>
        </>
    )
}

const Container=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  width: 40.875rem;
  height: 6.25rem;
  flex-shrink: 0;
  
  margin-top: 4.56rem;


  border-radius: 0.5rem;
  background: #FAFAFA;
  .placeName{
    color: #000;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    margin-left: 2.5rem;
    margin-right:1.75rem;
  }
  
  .btnDiv{
    display: flex;
    flex: 1;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    
    .East{
      margin: 0.5rem;
      
      display: inline-flex;
      padding: 0.6875rem 1.875rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.875rem;

      border: none;
      border-radius: 4.375rem;
      background: #FFF;

      color: #8A8A8A;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &:hover{
        border-radius: 4.375rem;
        background: #009A78;

        color: white;
        font-weight:700;
      }
    }
    .Weast{
      margin: 0.5rem;
      
      display: inline-flex;
      padding: 0.6875rem 1.875rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.875rem;

      border: none;
      border-radius: 4.375rem;
      background: #FFF;

      color: #8A8A8A;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &:hover{
        border-radius: 4.375rem;
        background: #009A78;

        color: white;
        font-weight:700;
      }
    }
    .South{
      margin: 0.5rem;
      
      display: inline-flex;
      padding: 0.6875rem 1.875rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.875rem;

      border: none;
      border-radius: 4.375rem;
      background: #FFF;

      color: #8A8A8A;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &:hover{
        border-radius: 4.375rem;
        background: #009A78;

        color: white;
        font-weight:700;
      }
    }
    .North{
      margin: 0.5rem;
      
      display: inline-flex;
      padding: 0.6875rem 1.875rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.875rem;

      border: none;
      border-radius: 4.375rem;
      background: #FFF;

      color: #8A8A8A;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &:hover{
        border-radius: 4.375rem;
        background: #009A78;

        color: white;
        font-weight:700;
      }
    }
  }
`;

export default CtgPlaceBtn;