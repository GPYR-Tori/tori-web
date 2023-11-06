import React, { useState } from 'react';
import styled from "@emotion/styled";

const BodyContent = () => {

    return (
        <>
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
    margin: 6.88rem auto 0 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  
    .BodyImg{
      margin-left: 0;
      width: 8.125rem;
      height: 8.125rem;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: fill;
      }
    }
  
    .BodyText{
      margin-left: 2.25rem;
      .userName{
        color: #009A78;
        font-size: 2.375rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.125rem; /* 131.579% */
      }
      .Welcom{
        color: #191919;
        font-size: 2.375rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.125rem;
      }
    }
    .btnLogout{
      margin-left: 8.9rem;
      
      flex-direction: row;
      width: 9rem;
      height: 3.125rem;
      flex-shrink: 0;

      border-radius: 1.5625rem;
      border: 1px solid #B7B7B7;
      
      //가운데로 정렬
      padding-top: 0.5rem;
      
      text-align: center;
      align-items: center;
      justify-content: center;
      
      color: #8A8A8A;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.875rem; /* 125% */

      &:hover{
        color: #009A78;
        font-weight: bold;
        border: 2px solid #009A78;
      }
    }
`;

export default BodyContent;