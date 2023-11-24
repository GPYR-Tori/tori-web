import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  border-radius: 0.5rem;
`;

const Contents = styled.div`  
  padding: 1rem;
  background: #fafafa;
  display: flex;
  height: 8.8125rem;
  color: #000;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  align-items: center;
  //margin: auto;
  //gap: 1.31rem; //자식 끼리 띄우기
  //padding-left: -2rem;
  //& > * {
  //  flex: 1;
  //}
  p{
    flex: 1;
    color: #4f4f4f;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    margin: auto;
  }
  
`;


const BtnWrap = styled.div`
  flex: 5;
  display: flex;
  margin: auto;
  & > * {
    flex: 1;
  }
  button {
    margin-left: 0.5rem;
    width: 5rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    background: #fff;
    border: none;
    color: #4f4f4f;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    :hover {
      background: #009a78;
      color: #fff;
    }
  }
`;
const Guidebook = styled.div`
  display: flex;
  margin: 4rem 0;
  button {
    flex: 1;
    height: 6.25rem;
    //width: 40.875rem;
    border-radius: 0.5rem;
    background: #009a78;
    border: none;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.125rem;
    text-decoration-line: none;
    //margin-bottom: 6.14rem;
  }
`;

function Booking() {

    return (
        <Wrapper>
            <Contents>
                <p>예약하기</p>
                <BtnWrap>
                    <Link href="https://www.hanatouritc.com/">
                        <button>ABC</button>
                    </Link>
                    <Link href="https://toursomeplace.com/">
                        <button>D</button>
                    </Link>
                    <Link href="https://plusplanner.kr/">
                        <button>EFG</button>
                    </Link>
                    <Link href="https://www.travelday.kr/">
                        <button>HI</button>
                    </Link>
                    <Link href="https://ktourstory.com/">
                        <button>JKL</button>
                    </Link>
                </BtnWrap>

            </Contents>
            <Link href="https://en.ggtour.or.kr/inc/img/sub/egtour_bus_2023.pdf">
                <Guidebook>
                    <button>가이드북 보러가기</button>
                </Guidebook>
            </Link>
        </Wrapper>
    );
}

export default Booking;
