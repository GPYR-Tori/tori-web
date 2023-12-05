import React, { useState } from 'react';
import styled from "@emotion/styled";

const InputEmail = (props) => {
    const [email,setEmail]=useState('');
    const handleEmail=(e)=>{
        setEmail(e.currentTarget.value);
    }
    const submitEmail=()=>{
        props.propFunction(email)
    }
    return (
        <>
            <IPEmail>
                {/*<p>이메일</p>*/}
                <p>Email</p>
                <div className={'inputElem'}>
                    <input
                        name="email"
                        id="email"
                        // value={email||""}
                        value={email}
                        // onChange={(e)=>setEmail(e.target.value)}
                        onChange={handleEmail}
                        className={'InputEM'}
                        placeholder={'Please enter your e-mail.'}
                    />
                    <button
                        onClick={submitEmail}
                        type={'submit'}
                        className={'inputBtn'}>check</button>
                </div>
            </IPEmail>
        </>
    )
}

const IPEmail = styled.div`
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
export default InputEmail;