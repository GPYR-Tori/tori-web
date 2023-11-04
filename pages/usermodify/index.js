import React from "react";
import styled from "@emotion/styled";
import { GlobalStyle } from "@/styles/GlobalStyle";

import HeaderLogo from "@/pages/mypage/HeaderLogo";
import InputUserImg from "@/pages/usermodify/InputUserImg";
import ModifyNickname from "@/pages/usermodify/ModifyNickname";
import ModifyPw from "@/pages/usermodify/ModifyPw";
import ModifyCountry from "@/pages/usermodify/ModifyCountry";
import ModifyLanguage from "@/pages/usermodify/ModifyLanguage";
import ModifyGender from "@/pages/usermodify/ModifyGender";
import ModifyAge from "@/pages/usermodify/ModifyAge";

const Mypagemodify = () => {
    return(
        <>
          <GlobalStyle/>
            <Container>
                <HeaderLogo />
                <InputUserImg />
                <ModifyNickname />
                <ModifyPw />
                <ModifyCountry/>
                <ModifyLanguage/>
                <ModifyGender/>
                <ModifyAge/>
                <div className={'ModiBtns'}>
                    <button className={'ModiBtn'}>
                        수정하기
                    </button>
                    <button className={'DelBtn'}>
                        회원탈퇴
                    </button>
                </div>
            </Container>
        </>
    )
}
const Container=styled.div`
  width: 750px;
  height: 1624px;
  display: flex;
  align-items: center;

  flex-direction: column;
  
  overflow: scroll;
  
  //스크롤
  &::-webkit-scrollbar{
    display: none;
  }
  
  .ModiBtns{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 76px auto 110px 49px;
    
    .ModiBtn{
      width: 300px;
      height: 100px;
      flex-shrink: 0;

      text-align: center;
      
      margin: 0;
      border-radius: 8px;
      background: #009A78;
      border: none;

      color: white;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 50px;
      
    }

    .DelBtn{
      width: 300px;
      height: 100px;
      flex-shrink: 0;

      text-align: center;

      //margin: 76px auto auto 49px;
      //margin: 50px auto 110px 49px;
      margin: 0 0 0 30px;
      
      border-radius: 8px;
      background: #B3B3B3;
      border: none;

      color: white;
      //font-family: Pretendard;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 50px;

      &:hover{
        background-color: #009A78;
      }
    }
  }
`;

export default Mypagemodify;