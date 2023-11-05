import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  
  width: 40.875rem;
  height: 8.8125rem;
  border-radius: 0.5rem;
  background: #fafafa;
`;

const Contents = styled.div`
  height: 8.8125rem;
  display: flex;
  color: #000;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  justify-content: center;
  align-items: center;

  button {
    display: inline-flex;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.375rem;
    background: #fff;
    border: none;
    margin: 0 0.6rem;

    color: #4f4f4f;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    :hover {
      display: inline-flex;
      padding: 0.75rem 1rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: 0.375rem;
      background: #009a78;
      color: #fff;
      font-size: 1.5625rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const Guidebook = styled.div`
  margin-top: 4.38rem;
  
  button {
    height: 6.25rem;
    width: 40.875rem;
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
    margin-bottom: 6.14rem;
  }
`;

function Booking() {
    const guideSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
        >
            <g clip-path="url(#clip0_4_1039)">
                <path
                    d="M18 0C8.07455 0 0 8.07455 0 18C0 27.9255 8.07455 36 18 36C27.9255 36 36 27.9255 36 18C36 8.07448 27.9255 0 18 0ZM18 32.4C10.06 32.4 3.6 25.94 3.6 18C3.6 10.06 10.06 3.6 18 3.6C25.94 3.6 32.4 10.06 32.4 18C32.4 25.94 25.94 32.4 18 32.4ZM19.8 10.8C19.8 11.794 18.9941 12.6 18 12.6C17.0059 12.6 16.2 11.7941 16.2 10.8C16.2 9.80585 17.0059 9 18 9C18.9941 9 19.8 9.80585 19.8 10.8ZM19.8 16.2V25.2C19.8 26.1941 18.9941 27 18 27C17.006 27 16.2 26.1941 16.2 25.2V16.2C16.2 15.206 17.006 14.4 18 14.4C18.9941 14.4 19.8 15.2059 19.8 16.2Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_4_1039">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
    return (
        <Wrapper>
            <Contents>
                <p>예약하기</p>
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
