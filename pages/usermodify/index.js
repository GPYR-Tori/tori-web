import React from "react";
import styled from "@emotion/styled";
import swal from 'sweetalert';

import AppBar from "@/src/components/AppBar";
import InputUserImg from "@/pages/usermodify/InputUserImg";
import ModifyNickname from "@/pages/usermodify/ModifyNickname";
import ModifyPw from "@/pages/usermodify/ModifyPw";
import ModifyCountry from "@/pages/usermodify/ModifyCountry";
import ModifyLanguage from "@/pages/usermodify/ModifyLanguage";
import ModifyGender from "@/pages/usermodify/ModifyGender";
import ModifyAge from "@/pages/usermodify/ModifyAge";

const Mypagemodify = () => {
    const handleDeleteBtn = () => {
        swal({
            buttons:{
                cancel:'No',
                'Yes,Delete':true,
            },
            title:'Are you sure?',
            text:'Once deleted,you will not be able to recover this account!',
            icon:'warning',
        }).then((value)=>{
            switch (value){
                case 'Yes,Delete':
                    swal({
                        title:'탈퇴 완료되었습니다.',
                        text:'이용해주셔서 감사합니다.',
                        icon:'success',
                    });
                    // 라우터 설정
                    // navigate('/login');
                    break;
                default:
                    break;
            }
        });
    };
    const handleModifyBtn = () => {
        swal({
            buttons:{
                cancel:'no',
                'yes':true,
            },
            title:'Do you want to edit it?',
            text:'Would you like to edit your member information?',
            icon:'warning',
        }).then((value)=>{
            switch (value){
                case 'yes':
                    swal({
                        title:'It is changed.',
                        text:'Have fun using it!',
                        icon:'success',
                    });
                    // 라우터 설정
                    // navigate('/login');
                    break;
                default:
                    break;
            }
        });
    };
    return(
        <>
            <AppBar/>
            <Container>
                <InputUserImg />
                <ModifyNickname />
                <ModifyPw />
                <ModifyCountry/>
                <ModifyLanguage/>
                <ModifyGender/>
                <ModifyAge/>
                <div className={'ModiBtns'}>
                    <button
                        onClick={handleModifyBtn}
                        className={'ModiBtn'}>
                        수정하기
                    </button>
                    <button
                        onClick={handleDeleteBtn}
                        className={'DelBtn'}>
                        회원탈퇴
                    </button>
                </div>
            </Container>
        </>
    )
}
const Container=styled.div`
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
    
    .ModiBtn{
      width: 18.75rem;
      height: 6.25rem;
      flex-shrink: 0;
      text-align: center;
      
      margin: 0;
      border: none;
      outline: none;
      border-radius: 0.5rem;
      background: #009A78;

      color: #FFF;
      font-size: 2.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.125rem; /* 147.059% */
    }

    .DelBtn{
      margin-left: 3.06rem;
      width: 18.75rem;
      height: 6.25rem;
      flex-shrink: 0;
      text-align: center;

      border-radius: 0.5rem;
      background: #B3B3B3;
      border: none;
      outline: none;

      color: #FFF;
      font-size: 2.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.125rem; /* 147.059% */

      &:hover{
        background-color: #009A78;
      }
    }
  }
`;

export default Mypagemodify;