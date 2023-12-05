import React, { useState } from 'react';
import styled from "@emotion/styled";
import axios from "axios";

import AppBar from '@/src/components/AppBar';
import NavBar from '@/src/components/NavBar/NavBar';

// import InputEmail from "@/pages/signin/signinComponents/InputEmail";
// import InputPw from "@/pages/signin/signinComponents/InputPw";
// import InputNickname from "@/pages/signin/signinComponents/InputNickname";
// import InputCountry from "@/pages/signin/signinComponents/InputCountry";
// import InputLanguage from "@/pages/signin/signinComponents/InputLanguage";
// import InputGender from "@/pages/signin/signinComponents/InputGender";
// import inputEmail from "@/pages/signin/signinComponents/InputEmail";
// import CtgTestP from "@/pages/signin/CtgTestP";

import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import SelectLanguage from "@/pages/signin/signinComponents/SelectLanguage";
import SelectGender from "@/pages/signin/signinComponents/SelectGender";

const Signin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [nickname,setNickname]=useState('');
    const [nation,setNation]=useState('');
    const [language,setLanguage]=useState('');
    const [gender,setGender]=useState('');

    const handleSignin=async ()=>{
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

    // const [password,setPassword]=useState('');

    const [pwType,setPwType]=useState({
        type:"password",
        visible:false,
    });

    const handlePwType = (e) => {
        setPwType(()=>{
            if (!pwType.visible) {
                // 만약 현재 pwType.visible이 false라면
                return {type:'text',visible:true};
            }else{
                return{type:'password',visible:false};
            }
        });
        console.log('password : ',password);
    };
    // const handleSignin=async ()=>{
    //     try {
    //         const requestBody={
    //             email:isEmail,
    //             password:isPassword,
    //             gender:isGender,
    //             nation:isNation,
    //             language:isLanguage,
    //             nickname:isNickname,
    //         }
    //         //api POST 요청
    //         const response =
    //             await axios.post(`${ApiBaseUrl}/join`,requestBody);
    //         console.log('회원가입 성공 : ',response.data);
    //     }catch (error){
    //         console.error('회원가입 오류발생 : ',error);
    //     }
    // };

    const [selLang,setSelLang]=useState('');
    const handleInputLanguage=()=>{
        console.log('language : ',selLang);
    }

    const [selGender,setSelGender]=useState('');
    const handleInputGender=()=>{
        console.log('gender : ',selGender);
    }

    return (
        <>
            <Container>
                <ContentContainer>
                    <AppBar/>
                    <EmailInput>
                        <p>Email</p>
                        <div className={'inputElem'}>
                            <input
                                name="email"
                                id="email"
                                // value={email||""}
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                // onChange={handleEmail}
                                className={'InputEM'}
                                placeholder={'Please enter your e-mail.'}
                            />
                            <button
                                // onClick={submitEmail}
                                type={'submit'}
                                className={'inputBtn'}>check</button>
                        </div>
                    </EmailInput>
                    <PasswordInput>
                        {/*<p>비밀번호</p>*/}
                        <p>Password</p>
                        <div className={'inputElem'}>
                            {/*1. 비밀번호 input*/}
                            <input
                                name="password"
                                id="password"
                                // value={password||""}
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                minLength={8}
                                className={'InputEM'}
                                placeholder={'Please enter at least 8 letters and numbers.'}
                            />
                            <button
                                onClick={handlePwType}
                                className={'inputBtn'}>
                                {pwType.visible ?
                                    <AiFillEyeInvisible className={'iconEyeInv'}/>:<AiFillEye className={'iconEyeV'}/>}
                            </button>
                        </div>
                    </PasswordInput>
                    <NicknameInput>
                        {/*<p>닉네임</p>*/}
                        <p>Nickname</p>
                        <div className={'inputElem'}>
                            <input
                                name='nickname'
                                id='nickname'
                                // value={nickname||""}
                                value={nickname}
                                onChange={(e)=>setNickname(e.target.value)}
                                className={'InputEM'}
                                placeholder={'Please enter your nickname.'}
                            />
                            <button
                                // onClick={handleInputNickname}
                                className={'inputBtn'}>check</button>
                        </div>
                    </NicknameInput>
                    <CountryInput>
                        {/*<p>국적</p>*/}
                        <p>Nation</p>
                        <div className={'inputC'}>
                            <input
                                name='nation'
                                id='nation'
                                // value={nation||""}
                                value={nation}
                                onChange={(e)=>setNation(e.target.value)}
                                className={'InputEM'}
                                placeholder={'Please enter your nationality.'}
                            />
                            <button
                                type={"button"}
                                // onClick={handleInputCountry}
                                className={'inputBtn'}>submit</button>
                        </div>
                    </CountryInput>
                    <LanguageInput>
                        <p>Language</p>
                        {/*<SelectLanguage*/}
                        {/*    name='language'*/}
                        {/*    id='language'*/}
                        {/*    // value={language||""}*/}
                        {/*    value={language}*/}
                        {/*    onChange={(e)=>setLanguage(e.target.value)}*/}
                        {/*    className={"inputLang"}*/}
                        {/*/>*/}
                        <div
                            name='Language'
                            id='Language'
                            value={language}
                            onChange={(e)=>setLanguage(e.target.value)}>
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
                                onClick={handleInputLanguage}
                                className={'inputBtn'}>select</button>
                        </div>
                    </LanguageInput>
                    <GenderInput>
                        <p>Gender</p>
                        <div
                            name='Gender'
                            id='Gender'
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}>
                            <form action="#">
                                <select className={'selectGen'} name="gender" id="gen">
                                    <option className={'selGen'} value="select">Please select your gender.</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="ThirdGender">Third gender</option>
                                    <option value="NoResponse">No response</option>
                                </select>
                            </form>
                            <button
                                type={"button"}
                                onClick={handleInputGender}
                                className={'inputBtn'}>select</button>
                        </div>
                        <button
                            type={'button'}
                            onClick={handleSignin}
                            className={'signinBtn'}>
                            Join the membership
                        </button>
                    </GenderInput>
                    <NavBar/>
                </ContentContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
  height: 100vh;
  //display: flex;
  //flex-direction: column;
`
const ContentContainer=styled.div`
  display: flex;
  flex-direction: column;
  //flex: 1;
  //스크롤

  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }

  .signinBtn{
    //width: 40.625rem; (기존)
    width: calc(100% - 6rem);
    height: 6.25rem;
    flex-shrink: 0;
    text-align: center;

    margin: 7rem auto 5rem 3rem;

    border-radius: 0.5rem;
    border: none;
    outline: none;
    background: #009A78;
    //문자 가운데 정렬
    padding-top: 0.5rem;

    color: #FFF;
    font-size: 2.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.125rem; /* 147.059% */
  ;
  }
`;
// const AppBar=styled.div``;
const EmailInput=styled.div`
  display: flex;
  flex-direction: column;

  //margin: 8.56rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
  margin-top: 5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputElem{
    display: flex;
    margin-top: 1.44rem;

    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;

    border-radius: 0.5rem;
    background: #FAFAFA;
    .InputEM{
      //kookoo
      display: inline-block;
      flex-shrink: 0;
      height: 100%;
      margin: 0 0 0 2rem;

      border: none;
      outline: none;
      background-color: transparent;


      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.035rem;
    }

    .inputBtn{
      margin: 0 2.25rem 0 auto;
      border: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
const PasswordInput=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
  margin-top: 2.5rem;


  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputElem{
    display: flex;
    flex-direction: row;
    text-align:center;
    justify-content: flex-start;
    align-items: center;

    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;
    margin-top: 1.44rem;

    border-radius: 0.5rem;
    background: #FAFAFA;

    .InputEM{
      //width: 31.245rem;
      width: calc(100% - 7rem);
      height: 100%;
      margin: 0 0 0 2rem;
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
      flex-shrink: 0;
      //width: 100%;
      margin: 0 2.25rem 0 auto;
      border: none;
      outline: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      .iconEyeInv{
        width: 2.5rem;
        height: 2.5rem;
      }
      .iconEyeV{
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;
const NicknameInput=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
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
const LanguageInput=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const GenderInput=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

`;

const CountryInput=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputC{
    display: flex;
    flex-direction: row;
    margin-top: 1.44rem;

    //width: 40.875rem;
    height: 5rem;
    flex-shrink: 0;

    border: none;
    outline: none;

    border-radius: 0.5rem;
    background: #FAFAFA;

    .InputEM{
      height: 100%;
      flex-shrink: 0;
      margin: 0 0 0 2rem;

      //kookoo
      display: inline-block;

      border: none;
      outline: none;
      background-color: #FAFAFA;;
      color: #808080;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .inputBtn{
      //flex-shrink: 0;
      margin: 0 2.25rem 0 auto;
      border: none;
      background-color: transparent;

      color: #009A78;
      font-size: 1.45rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;


export default Signin;