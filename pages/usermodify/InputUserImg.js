import React from "react";
import styled from "@emotion/styled";
// import {IconImgButton} from "@/img/ImgBtnIcon";
// import ImgBtnIconList from "@/img/ImgBtnIconList";

const InputUserImg = () => {

    const ImgBtn=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M7.63033 19.5516H22V22H0V16.8057L12.1 4.686L17.2847 9.88158L7.62911 19.5516H7.63033ZM13.827 2.9562L16.4206 0.358435C16.6497 0.128933 16.9605 0 17.2847 0C17.6088 0 17.9196 0.128933 18.1488 0.358435L21.6064 3.82171C21.8356 4.05129 21.9643 4.36262 21.9643 4.68723C21.9643 5.01185 21.8356 5.32317 21.6064 5.55274L19.0129 8.14928L13.8282 2.9562H13.827Z" fill="currentColor"/>
        </svg>
    )
    return (
        <>
            <UserImg>
                <div className={'userImg'} >
                    <img src={'https://i.pinimg.com/564x/5c/4e/1f/5c4e1f6e7c116d72d528f1b762720ec2.jpg'}/>
                    <button className={'ImgButton'}>
                        {/*<imgBtn>*/}
                        {/*    {IconImgButton.values(({icon})=>(*/}
                        {/*        <Item>*/}
                        {/*            <IconWrapper>*/}
                        {/*                {icon()}*/}
                        {/*            </IconWrapper>*/}
                        {/*        </Item>*/}
                        {/*    ))}*/}
                        {/*</imgBtn>*/}
                        {/*<ImgBtnIconList />*/}
                        {ImgBtn()}
                    </button>
                </div>
            </UserImg>
        </>
    )
}

const UserImg=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 122px;
  margin-bottom: 80px;
  
  .userImg{
    width: 200px;
    height: 200px;
    flex-shrink: 0;

    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      
      border-radius: 50%;
      object-fit: fill;
      
      z-index: 0;
    }
    
    .ImgButton{
      width: 48px;
      height: 48px;

      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      
      
      border-radius: 50%;
      border: none;
      
      margin: 50px -8px -1px -60px;
      
      //background-color: white;
      //background-color: red;
      
      &:hover{
        color: #009A78;
      }
      
    }
  }
`;

// const =styled.div`
//   width: 22px;
//   height: 22px;
//   flex-shrink: 0;
//
//   color:#433E50;
//
//   &:hover{
//     color: #009A78;
//   }
// `;
export default InputUserImg;