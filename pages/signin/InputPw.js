import { React, useState } from 'react';
import styled from "@emotion/styled";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';

const InputPw=()=>{
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
    };

    return(
        <>
            <IPpw>
                <p>비밀번호</p>
                <div className={'inputElem'}>
                    {/*1. 비밀번호 input*/}
                    <input
                        type={pwType.type}
                        minLength={8}
                        className={'InputEM'}
                        placeholder={'영문+숫자 최소 8자 이상 입력해주세요'}
                    />
                    <button
                        onClick={handlePwType}
                        className={'inputBtn'}>
                        {pwType.visible ?
                            <AiFillEyeInvisible className={'iconEyeInv'}/>:<AiFillEye className={'iconEyeV'}/>}
                    </button>
                </div>
            </IPpw>
        </>
    )
}

const IPpw = styled.div`
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

export default InputPw;