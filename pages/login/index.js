import {React,useState} from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import AppBar from "@/src/components/AppBar";
import NavBar from "@/src/components/NavBar/NavBar";
import BodyText from "@/pages/login/BodyText";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import axios from "axios";

const Login=()=>{

    //password 숨기기
    const [pwType,setPwType]=useState({
        type:"password",
        visible:false,
    });

    const handlePWType = (e) => {
        setPwType(()=>{
            if (!pwType.visible){
                return {type:'text',visible:true};
            }else{
                return {type:'password',visible: false}
            }
        });
    };

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin=async ()=>{
        const loginApi={
            email:email,
            password:password,
        }
        console.log(loginApi);
        try {
            const requestBody={
                email:email,
                password:password,
            }
            const response=
                await axios.post('http://tori.com/api/login',requestBody);
            console.log('로그인 성공 : ',response.data);
        }catch (error){
            console.error('로그인 오류 발생 : ',error);
        }
    };
    return (
        <>
        <Container>
        <AppBar/>
          <ContentContainer>
                <BodyText />
                <div className={'inputDiv'}>
                    <div className={'ID'}>
                        <input
                            name='email'
                            id='email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type={"text"}
                            className={'loginInput'}
                            placeholder={'아이디를 입력해주세요'}
                        />
                    </div>
                    <div className={'PW'}>
                        <input
                            name='password'
                            id='password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type={pwType.type}
                            minLength={8}
                            className={'pwInput'}
                            placeholder={'비밀번호를 입력해주세요'}
                        />
                        <button
                            type={'submit'}
                            onClick={handlePWType}
                            className={'pwIcon'}>
                            {pwType.visible ?
                                <AiFillEyeInvisible className={'iconEyeInv'}/>:<AiFillEye className={'iconEyeV'}/>}
                        </button>
                    </div>
                    <button
                        onClick={handleLogin}
                        className={'LoginBtn'} >로그인</button>
                </div>
                <div style={{flex: 1}}/>
                <Link href={'/signin'}>
                  <button
                      className={'SignInBtn'}>회원 가입</button>
                </Link>
          </ContentContainer>
        {/*<NavBar/>*/}
        </Container>
        </>
    );
}
export default Login;
const Container=styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const ContentContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // 더 고민 필요
  //height: calc(100% - 15rem);
  flex: 1;
  overflow: hidden;
  

  .inputDiv{
    margin-top: 4.56rem;
    // 전체 넓이 설정 여기서...휴..찾느라 눈빠지는쥴
    width: calc(100% - 6rem);
    .ID{
      // 기존 40.875rem -> 수정
      width: 100%;
      height: 6.25rem;
      flex-shrink: 0;
      margin-bottom: 1.31rem;
      //background-color: red;

      border-radius: 0.5rem;
      background: #FAFAFA;
      color: #808080;
      .loginInput{
        // 기존 40.875rem -> 수정
        width: 100%;
        height: 6.25rem;
        flex-shrink: 0;
        margin-left: 2.63rem;

        border: none;
        outline: none;
        background-color: transparent;
        color: #808080;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.035rem;
      }
    }
    .PW{
      // 기존 40.875rem -> 수정
      width: 100%;
      height: 6.25rem;
      flex-shrink: 0;
      margin-bottom: 1.31rem;
      
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: flex-start;
      align-items: center;

      border-radius: 0.5rem;
      background: #FAFAFA;
      color: #808080;
      .pwInput{
        height: 100%;
        width: 80%;
        flex-shrink: 0;
        margin-left: 2.63rem;

        border: none;
        outline: none;

        background-color: transparent;
        color: #808080;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.035rem;
      }

      .pwIcon{
        flex-shrink: 0;
        margin: 0 2.25rem 0 auto;
        border: none;
        outline: none;
        background-color: transparent;
        color: #009A78;
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

    .LoginBtn{
      // 기존 40.875rem -> 수정
      width: 100%;
      height: 6.25rem;
      flex-shrink: 0;
      // 여기도 고민 필요, 한 화면에 다 들어오기
      //margin-bottom: 22.5rem;
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      align-items: center;
      
      //가운데 정렬
      padding-top: 0.2rem;

      border-radius: 0.5rem;
      background-color: #009A78;
      color: #FFF;
      font-size: 2.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3.125rem; /* 147.059% */

      border: none;
      outline: none;
    }
  }
  
  .SignInBtn{
    // bottom값 제외 삭제
    margin-bottom: 4.06rem;
    border: none;
    outline: none;
    background-color: transparent;
    
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    //font-weight: bold;
    line-height: normal;
    letter-spacing: -0.07rem;
  }
`;
