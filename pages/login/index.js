import {React,useState} from "react";
import styled from "@emotion/styled";

import Header from "@/pages/login/Header";
import BodyText from "@/pages/login/BodyText";
// import Navbar from "@/components/Navbar";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';


const Login=()=>{
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

    return (
        <>
            <Container>
                <Header />
                <BodyText />
                <div className={'inputDiv'}>
                    <div className={'ID'}>
                        <input
                            className={'loginInput'}
                            placeholder={'아이디를 입력해주세요'}
                        />
                    </div>
                    <div className={'PW'}>
                        <input
                            type={pwType.type}
                            minLength={8}
                            className={'pwInput'}
                            placeholder={'비밀번호를 입력해주세요'}
                        />
                        <button
                            onClick={handlePWType}
                            className={'pwIcon'}>
                            {pwType.visible ?
                                <AiFillEyeInvisible className={'iconEyeInv'}/>:<AiFillEye className={'iconEyeV'}/>}
                        </button>
                    </div>
                    <button className={'LoginBtn'} >로그인</button>
                </div>
                <button className={'SignInBtn'}>회원 가입</button>
            </Container>
        </>
    );
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .inputDiv{
    margin: 4.56rem auto 0 3rem;
    .ID{
      width: 40.875rem;
      height: 6.25rem;
      flex-shrink: 0;
      margin-bottom: 1.31rem;

      border-radius: 0.5rem;
      background: #FAFAFA;
      color: #808080;
      .loginInput{
        width: 38.185rem;
        height: 6.25rem;
        flex-shrink: 0;
        margin: 0 0 0 2.63rem;

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
      width: 40.875rem;
      height: 6.25rem;
      flex-shrink: 0;
      margin-bottom: 4.87rem;
      
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
        margin: 0 0 0 2.63rem;

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
      width: 40.875rem;
      height: 6.25rem;
      flex-shrink: 0;
      margin-bottom: 22.25rem;
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
    margin: 0 auto 4.06rem 20.31rem;
    border: none;
    outline: none;
    background-color: transparent;
    
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    letter-spacing: -0.07rem;
  }
`;
export default Login;