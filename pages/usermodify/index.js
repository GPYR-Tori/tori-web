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

    //api연동
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [nickname,setNickname]=useState('');
    const [nation,setNation]=useState('');
    const [language,setLanguage]=useState('');
    const [gender,setGender]=useState('');

    //01.수정하기 버튼
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

        //alert 창
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

    //02.회원탈퇴 버튼
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

    return(
        <>
            <AppBar/>
            <Container>
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
                            placeholder={'Enter your nickname.'}
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
                            className={'inputPassword'}
                            placeholder={'Enter at least 8 letters and numbers.'}
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
                            placeholder={'Enter your nationality.'}
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
                                <option className={'selLang'} value="select">Select a language.</option>
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
                                <option className={'selGen'} value="select">Select your gender.</option>
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
                        onClick={handleUsermodify}
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
    
    margin-top: 7.93rem;
    margin-bottom: 6.87rem;
    
    .ModiBtn{
      width: calc(100% - 6rem);
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
      width: calc(100% - 6rem);
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
  
  width: 9rem;
  height: 9rem;
`;
const EditNickname=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputElem{
    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;
    background-color: #FAFAFA;
    margin-top: 1.44rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .InputEM{
      height: 100%;
      margin: 0 0 0 2rem;

      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;
      background-color: #FAFAFA;;
      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;
    }

    .inputBtn{
      //flex-shrink: 0;
      margin: 0 2.25rem 0 auto;
      border: none;
      outline: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
const EditPassword=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputPasswordDiv{
    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;
    background-color: #FAFAFA;
    margin-top: 1.44rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .inputPassword{
      //width: 90%;
      height: 100%;
      margin: 0 0 0 2rem;

      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;
      
      background-color: #FAFAFA;;
      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;
    }

    .inputPasswordBtn{
      //flex-shrink: 0;
      margin: 0 2.25rem 0 auto;
      border: none;
      outline: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
const EditCountry=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputCountryDiv{
    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;
    background-color: #FAFAFA;
    margin-top: 1.44rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .InputCountry{
      height: 100%;
      margin: 0 0 0 2rem;

      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;

      background-color: #FAFAFA;;
      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;
    }

    .inputCountryBtn{
      //flex-shrink: 0;
      margin: 0 2.25rem 0 auto;
      border: none;
      outline: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
const EditLanguage=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputLanguage{
    display: flex;
    background-color: #FAFAFA;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-top: 1.44rem;

    height: 5rem;
    flex-shrink: 0;


    p{
      color: #808080;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .selectLang{
      margin: 0 0 0 2rem;
      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;
      background-color: transparent;

      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;

      select::-ms-expand{
        display: none;
      }
    }
    .inputLanguageBtn{
      width: 5.5625rem;
      height: 3.3125rem;
      flex-shrink: 0;

      margin: auto 1.31rem auto auto;

      border: none;
      outline: none;
      border-radius: 0.625rem;
      background: #D9D9D9;

      text-align: center;
      align-items: center;
      justify-content: center;

      color: #FFF;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.0275rem;

      &:hover{
        background-color: #009A78;
      }
    }
`;
const EditGender=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputGenderDiv{
    display: flex;
    background-color: #FAFAFA;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-top: 1.44rem;

    height: 5rem;
    flex-shrink: 0;


    p{
      color: #808080;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .inputGender{
      margin: 0 0 0 2rem;
      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;
      background-color: transparent;

      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;

      select::-ms-expand{
        display: none;
      }
    }
    .inputGenderBtn{
      width: 5.5625rem;
      height: 3.3125rem;
      flex-shrink: 0;

      margin: auto 1.31rem auto auto;

      border: none;
      outline: none;
      border-radius: 0.625rem;
      background: #D9D9D9;

      text-align: center;
      align-items: center;
      justify-content: center;

      color: #FFF;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.0275rem;

      &:hover{
        background-color: #009A78;
      }
    }
`;
export default Mypagemodify;