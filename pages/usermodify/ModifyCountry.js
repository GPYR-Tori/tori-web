import React from "react";
import styled from "@emotion/styled";
import SelectCountry from "@/pages/signin/SelectCountry";

const ModifyCountry=()=>{
    return(
        <>
            <Country>
                <p>국적</p>
                <div className={'modiCont'}>
                    <input
                        className={'modiC'}
                        placeholder={'국적을 입력해주세요'}
                    />
                    <button className={'inputBtn'}>변경</button>
                </div>
                {/*<SelectCountry />*/}
            </Country>
        </>
    )
}

const Country=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:73px auto 21px 49px ;

  p{
    color: #000;
    //font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 23px;
  }

  .modiCont{
    width: 654px;
    height: 100px;
    flex-shrink: 0;

    border: none;
    background-color: #FAFAFA;
    outline: none;

    color: #808080;
    //font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;

    .modiC{
      width: 464px;
      height: 100px;
      margin: 0 0 0 33px;

      //kookoo
      display: inline-block;
      flex-shrink: 0;

      border: none;
      outline: none;

      background-color: #FAFAFA;;
      color: #808080;
      //font-family: Pretendard;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.56px;
    }
    .inputBtn{
      //width: 110px;
      //height: 29px;

      width: 89px;
      height: 59px;
      margin-left: 30px;
      //flex-shrink: 0;

      border: none;
      background-color: #B3B3B3;
      border-radius: 10px;

      text-align: center;
      align-items: center;
      justify-content: center;

      color: white;
      //font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      &:hover{
        background-color: #009A78;
      }
    }
  }
`;
export default ModifyCountry;