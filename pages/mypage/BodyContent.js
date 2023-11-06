import React, { useState } from 'react';
import styled from "@emotion/styled";
import { GlobalStyle } from "@/styles/GlobalStyle";

const BodyContent = () => {

    return (
        <>
            <GlobalStyle />
            <BodyCont>
                <div className={'BodyImg'}>
                    <img src={'https://i.pinimg.com/564x/5c/4e/1f/5c4e1f6e7c116d72d528f1b762720ec2.jpg'}/>
                </div>
                <div className={'BodyText'}>
                    <p className={'userName'}>유지희님</p>
                    <p className={'Welcom'}>환영합니다.</p>
                </div>
                <div className={'btnLogout'}>로그아웃</div>
            </BodyCont>
        </>
    )
}

const BodyCont=styled.div`
    width: 624px;
    height: 130px;
  
    margin: 110px 0 0 0;
  
    display: flex;
    flex-direction: row;
    //justify-content: center;
    align-items: center;
  
    .BodyImg{
      width: 130px;
      height: 130px;
      flex-shrink: 0;

      border-radius: 130px;
      border: 1px solid #FAFAFA;
      
      margin : 0 auto 0 0;


      img {
        width: 100%;
        height: 100%;

        border-radius: 50%;
        object-fit: fill;

        z-index: 0;
      }
    }
  
    .BodyText{
      margin : 0 auto 0 -70px;
      
      .userName{
        color: #009A78;
        //font-family: Pretendard;
        font-size: 38px;
        font-style: normal;
        font-weight: 800;
        line-height: 50px; /* 131.579% */
      }
      .Welcom{
        color: #191919;
        //font-family: Pretendard;
        font-size: 38px;
        font-style: normal;
        font-weight: 800;
        line-height: 50px;
      }
    }
    .btnLogout{
      flex-direction: row;
      width: 144px;
      height: 50px;
      flex-shrink: 0;

      border-radius: 25px;
      border: 5px solid #B7B7B7;
      
      //가운데로 정렬
      padding-top: 7px;
      
      text-align: center;
      align-items: center;
      justify-content: center;

      color: #8A8A8A;
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 125% */

      &:hover{
        color: #009A78;
        font-weight: bold;
        border: 5px solid #009A78;
      }
    }
`;

export default BodyContent;