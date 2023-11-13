import React from "react";
import styled from "@emotion/styled";
// import {IconImgButton} from "@/img/ImgBtnIcon";
// import ImgBtnIconList from "@/img/ImgBtnIconList";


const InputUserImg = () => {

    const ImgBtn=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22" fill="none">
            <path d="M7.63033 19.5516H22V22H0V16.8057L12.1 4.686L17.2847 9.88158L7.62911 19.5516H7.63033ZM13.827 2.9562L16.4206 0.358435C16.6497 0.128933 16.9605 0 17.2847 0C17.6088 0 17.9196 0.128933 18.1488 0.358435L21.6064 3.82171C21.8356 4.05129 21.9643 4.36262 21.9643 4.68723C21.9643 5.01185 21.8356 5.32317 21.6064 5.55274L19.0129 8.14928L13.8282 2.9562H13.827Z" fill="currentColor"/>
        </svg>
    )
    return (
        <>
            <UserImg>
                <div className={'userImg'} >
                    <img src={'https://i.pinimg.com/564x/5c/4e/1f/5c4e1f6e7c116d72d528f1b762720ec2.jpg'}/>
                    <button className={'ImgButton'}>
                        <div className={'ImgBtnIcon'}>
                            {ImgBtn()}
                        </div>
                    </button>
                </div>
            </UserImg>
        </>
    )
}

const UserImg=styled.div`
  display: flex;
  justify-content: center;

  margin-top: 7.62rem;
  margin-bottom: 5rem;
  .userImg{
    width: 10rem;
    height: 10rem;
    flex-shrink: 0;

    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;

      z-index: 0;

      border-radius: 10rem;
      border: 1px solid #FAFAFA;
    }

    .ImgButton{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 3rem;
      height: 3rem;
      flex-shrink: 0;

      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;

      border-radius: 50%;
      border: none;

      background-color: white;
      &:hover{
        color: white;
        background-color: #009A78;
      }

      .ImgBtnIcon{
        width: 1.375rem;
        height: 1.375rem;
        flex-shrink: 0;
      }

    }
  }
`;
export default InputUserImg;