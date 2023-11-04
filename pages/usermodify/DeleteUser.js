import React from "react";
import styled from "@emotion/styled";

const DeleteUser=()=>{

    // const DelUser = () = >{
//터치이벤트 발생시 alert 창 띄우기 " 정말로 탈퇴하시겠습니까?"
//     }

    return(
        <>
            <Container>

            </Container>
        </>
    )
}

const Container = styled.div`
  width: 750px;
  height: 1624px;
  display: flex;
  align-items: center;

  flex-direction: column;

  overflow: scroll;

  //스크롤
  &::-webkit-scrollbar{
    display: none;
  }

  .DelBtn{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

    text-align: center;

    //margin: 76px auto auto 49px;
    margin: 76px auto 110px 49px;
    border-radius: 8px;
    background: #009A78;
    border: none;

    color: white;
    //font-family: Pretendard;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
  }
`;

export default DeleteUser;