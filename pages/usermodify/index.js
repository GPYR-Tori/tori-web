import React, {useState} from "react";
import styled from "@emotion/styled";
import swal from 'sweetalert';
import Image from "next/image"

import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";
import InputUserImg from "@/pages/usermodify/InputUserImg";
import ModifyNickname from "@/pages/usermodify/ModifyNickname";
import ModifyPw from "@/pages/usermodify/ModifyPw";
import ModifyCountry from "@/pages/usermodify/ModifyCountry";
import ModifyLanguage from "@/pages/usermodify/ModifyLanguage";
import ModifyGender from "@/pages/usermodify/ModifyGender";
import ModifyAge from "@/pages/usermodify/ModifyAge";
import axios from "axios";

const Mypagemodify = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [nickname,setNickname]=useState('');
    const [nation,setNation]=useState('');
    const [language,setLanguage]=useState('');
    const [gender,setGender]=useState('');

    const handleUsermodify=async ()=>{
        const apiTest={
            email:email,
            password:password,
            gender:gender,
            nation:nation,
            language:language,
            nickname:nickname,
        }
        console.log(apiTest);
        try {
            const requestBody={
                email:email,
                password:password,
                gender:gender,
                nation:nation,
                language:language,
                nickname:nickname,
            }
            //api POST 요청
            const response =
                await axios.post('http://tori.com/api/join',requestBody);
            console.log('회원가입 성공 : ',response.data);
        }catch (error){
            console.error('회원가입 오류발생 : ',error);
        }
    };
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
                {/*<InputUserImg />*/}
                {/*<ModifyNickname />*/}
                {/*<ModifyPw />*/}
                {/*<ModifyCountry/>*/}
                {/*<ModifyLanguage/>*/}
                {/*<ModifyGender/>*/}

                <UserIcon
                    className={'userIcon'}
                    src={"/images/usermodify/usermodifyLogo4.png"}/>
                <EditNickname>
                    <p>Nickname</p>
                    <div className={'inputElem'}>
                        <input
                            name='nickname'
                            id='nickname'
                            value={nickname}
                            onChange={(e)=>setNickname(e.target.value)}
                            className={'InputEM'}
                            placeholder={'Please enter your nickname.'}
                        />
                        <button
                            className={'inputBtn'}>check</button>
                    </div>
                </EditNickname>
                <EditPassword>
                    <p>Password</p>
                    <div className={'inputPasswordDiv'}>
                        <input
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            // onChange={handleEmail}
                            className={'inputPassword'}
                            placeholder={'Please enter at least 8 letters and numbers.'}
                        />
                        <button
                            type={'submit'}
                            className={'inputPasswordBtn'}>check</button>
                    </div>
                </EditPassword>
                <EditCountry>
                    <p>Nation</p>
                    <div className={'inputCountryDiv'}>
                        <input
                            name='nation'
                            id='nation'
                            value={nation}
                            onChange={(e)=>setNation(e.target.value)}
                            className={'InputCountry'}
                            placeholder={'Please enter your nationality.'}
                        />
                        <button
                            type={"button"}
                            className={'inputCountryBtn'}>submit</button>
                    </div>
                </EditCountry>
                <EditLanguage>
                    <p>Language</p>
                    <div
                        name='Language'
                        id='Language'
                        value={language}
                        onChange={(e)=>setLanguage(e.target.value)}
                        className={'inputLanguage'}
                    >
                        <form
                            action="#">
                            <select className={'selectLang'} name="language" id="lang">
                                <option className={'selLang'} value="select">Please select a language.</option>
                                <option className={'selUsa'} value="English">English</option>
                                <option className={'selViet'} value="Vietnamese">Vietnamese</option>
                                <option className={'selJa'} value="Japanese">Japanese</option>
                                <option className={'selCh'} value="Chinese">Chinese</option>
                                <option className={'selTh'} value="Thai">Thai</option>
                            </select>
                        </form>
                        <button
                            type={'button'}
                            // onClick={handleInputLanguage}
                            className={'inputLanguageBtn'}>select</button>
                    </div>
                </EditLanguage>
                <EditGender>
                    <p>Gender</p>
                    <div
                        name='Gender'
                        id='Gender'
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                        className={'inputGenderDiv'}>
                        <form action="#">
                            <select className={'inputGender'} name="gender" id="gen">
                                <option className={'selGen'} value="select">Please select your gender.</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="ThirdGender">Third gender</option>
                                <option value="NoResponse">No response</option>
                            </select>
                        </form>
                        <button
                            type={"button"}
                            // onClick={handleInputGender}
                            className={'inputGenderBtn'}>select</button>
                    </div>
                </EditGender>
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
            <NavBar/>
        </>
    )
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const UserIcon=styled.img`
  margin:7.63rem auto 5rem auto;
  width: 8rem;
  height: 8rem;
  .userIcon{
  }
`;
const EditNickname=styled.div``;
const EditPassword=styled.div``;
const EditCountry=styled.div``;
const EditLanguage=styled.div``;
const EditGender=styled.div``;
export default Mypagemodify;