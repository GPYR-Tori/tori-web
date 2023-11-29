import React, { useState } from 'react';
import styled from "@emotion/styled";
import Link from 'next/link';

const BtnContent = () => {
    // 지워도 되는 부분
    const ImgPerson = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9992 7.63926C23.9993 8.64257 23.7925 9.63607 23.3906 10.563C22.9887 11.49 22.3996 12.3323 21.6569 13.0418C20.9141 13.7513 20.0324 14.3142 19.0619 14.6982C18.0914 15.0823 17.0513 15.28 16.0008 15.2801C13.8793 15.2803 11.8446 14.4756 10.3443 13.0429C8.84401 11.6103 8.00103 9.66709 8.00082 7.64083C8.00071 6.63752 8.20751 5.64402 8.60941 4.71705C9.0113 3.79007 9.60043 2.94779 10.3431 2.23827C11.8431 0.805336 13.8777 0.000207013 15.9992 3.99144e-08C18.1207 -0.000206933 20.1554 0.804525 21.6557 2.23717C23.156 3.66981 23.999 5.613 23.9992 7.63926ZM16 17.6174C4.48085 17.6174 0 24.619 0 27.8764C0 31.1322 9.53855 32 16 32C22.4614 32 32 31.1322 32 27.8764C32 24.619 27.5191 17.6174 16 17.6174Z"
                  fill="currentColor"/>
        </svg>
    )

    const ImgLike = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_4_1106)">
                <path d="M31.281 6.79503C30.2982 4.28393 28.4218 2.35843 25.9972 1.37246C24.9487 0.946468 23.887 0.73027 22.8423 0.73027C19.3676 0.73027 16.9366 3.05667 15.988 4.14727C15.0442 3.05293 12.6239 0.716925 9.15027 0.716925C8.10878 0.716925 7.05021 0.932589 6.00338 1.35805C3.57876 2.34402 1.70184 4.26951 0.719072 6.78008C-0.329356 9.45934 -0.227396 12.4957 0.999328 15.112C2.74119 18.8258 6.70109 24.6076 15.6741 31.0583L15.9853 31.2825L16.2966 31.0583C25.3139 24.5756 29.2695 18.8156 30.9996 15.1253C32.2274 12.5101 32.3294 9.47375 31.281 6.79503Z"
                      fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_4_1106">
                    <rect width="100%" height="100%" fill="currentColor"/>
                </clipPath>
            </defs>
        </svg>
    )

    const ImgDotori = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_4_1109)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5388 4.33198C18.9518 3.85748 19.4384 3.42892 19.9847 3.04554C20.7418 2.51436 20.9249 1.46992 20.3937 0.712857C19.8624 -0.0442683 18.8181 -0.227331 18.0609 0.303919C16.5575 1.35886 15.3783 2.67823 14.6248 4.22104C14.9164 4.20442 15.2103 4.19598 15.506 4.19598H16.4941C17.1873 4.19598 17.87 4.24248 18.5388 4.33198ZM25.7276 16.7128H5.81832C5.79632 16.7128 5.77438 16.7126 5.75244 16.7122C5.78326 29.7962 13.5191 31.5984 15.74 32C17.9609 31.5984 25.6966 29.7962 25.7276 16.7128ZM16.4941 6.31129H15.506C13.1868 6.31129 11.0148 6.90467 9.15463 7.93673C7.23038 9.00429 5.63438 10.5404 4.54969 12.3734C4.40682 12.6149 4.33426 12.8669 4.33232 13.1125C4.33032 13.36 4.39869 13.614 4.53751 13.8575C4.67394 14.0969 4.85688 14.2832 5.07138 14.4078C5.28413 14.5314 5.53801 14.5975 5.81832 14.5975H26.1818C26.4621 14.5975 26.716 14.5314 26.9287 14.4078C27.1433 14.2832 27.3262 14.0969 27.4626 13.8575C27.6014 13.614 27.6698 13.36 27.6679 13.1125C27.6659 12.8669 27.5934 12.6149 27.4505 12.3734C26.3658 10.5404 24.7698 9.00429 22.8456 7.93673C20.9853 6.90473 18.8134 6.31129 16.4941 6.31129Z"
                      fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_4_1109">
                    <rect width="100%" height="100%" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )

    const IconArrow = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 42 42" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0938 35.175C15.404 35.1752 15.7112 35.114 15.9977 34.9951C16.2842 34.8762 16.5444 34.7018 16.7633 34.482L28.5758 22.6695C28.7953 22.4501 28.9694 22.1896 29.0882 21.903C29.2069 21.6163 29.2681 21.309 29.2681 20.9987C29.2681 20.6884 29.2069 20.3811 29.0882 20.0944C28.9694 19.8077 28.7953 19.5473 28.5758 19.3279L16.7633 7.51537C16.5457 7.28835 16.2849 7.10708 15.9962 6.98219C15.7076 6.85729 15.3969 6.79128 15.0824 6.78804C14.7679 6.78479 14.4559 6.84437 14.1648 6.96329C13.8736 7.0822 13.6091 7.25805 13.3868 7.48053C13.1645 7.703 12.9889 7.96763 12.8702 8.25888C12.7515 8.55014 12.6922 8.86216 12.6957 9.17665C12.6992 9.49113 12.7654 9.80176 12.8905 10.0903C13.0157 10.3789 13.1971 10.6395 13.4243 10.857L23.5647 21L13.4243 31.1404C13.0934 31.4706 12.868 31.8916 12.7765 32.3501C12.685 32.8085 12.7315 33.2838 12.9103 33.7158C13.089 34.1478 13.3919 34.517 13.7806 34.7768C14.1693 35.0365 14.6263 35.1751 15.0938 35.175Z" fill="#BABABA"/>
        </svg>
    )

    return (
        <>
            <BtnCont>
                <div className={'BtnUser'}>
                    <div className={'iconPerson'}>{ImgPerson()}</div>
                    {/*{ImgPerson()}*/}
                    <p className={'textPerson'}>회원 정보 수정</p>
                    <div className={'iconArrow'}>{IconArrow()}</div>
                </div>
                <div className={'BtnLike'}>
                    <div className={'iconLike'}>{ImgLike()}</div>
                    {/*{ImgLike()}*/}
                    <p className={'textLike'}>보관함</p>
                    <div className={'iconArrow'}>{IconArrow()}</div>
                </div>
                <div className={'BtnDotori'}>
                    <div className={'iconDotori'}>{ImgDotori()}</div>
                    {/*{ImgDotori()}*/}
                    <p className={'textDotori'}>MY 도토리</p>
                    <div className={'iconArrow'}>{IconArrow()}</div>
                </div>
            </BtnCont>
        </>
    )
}

const BtnCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  margin-top: 5.62rem;
  //margin-left: 3rem; (필요없음!)
  margin-right: auto;
  margin-bottom: auto;

  cursor: pointer;
  .BtnUser{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 1.87rem;

    //width: 40.75rem; (수정)
    width: calc(100% - 6rem);
    height: 6.25rem;
    flex-shrink: 0;

    border-radius: 0.5rem;
    background: #FAFAFA;

    .iconPerson{
      margin: 0 0 0 2.5rem;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
      color: #BABABA;
    }
    .textPerson{
      margin: 0 0 0 1.5rem;
      color: #191919;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.125rem; /* 166.667% */
      &:hover{
        font-weight: bold;
      }
    }
    .iconArrow{
      margin: 0 2.5rem 0 auto;
      width: 2.625rem;
      height: 2.625rem;
      flex-shrink: 0;
    }
  }
  .BtnLike{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 1.87rem;

    //width: 40.75rem; (수정)
    width: calc(100% - 6rem);
    height: 6.25rem;
    flex-shrink: 0;

    border-radius: 0.5rem;
    background: #FAFAFA;

    .iconLike{
      margin: 0 0 0 2.5rem;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
      color: #BABABA;
    }
    .textLike{
      margin: 0 0 0 1.5rem;
      color: #191919;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.125rem; /* 166.667% */
      &:hover{
        font-weight: bold;
      }
    }
    .iconArrow{
      margin: 0 2.5rem 0 auto;
      width: 2.625rem;
      height: 2.625rem;
      flex-shrink: 0;
    }
  }
  .BtnDotori{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    //width: 40.75rem; (수정)
    width: calc(100% - 6rem);
    height: 6.25rem;
    flex-shrink: 0;

    border-radius: 0.5rem;
    background: #FAFAFA;

    .iconDotori{
      margin: 0 0 0 2.5rem;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
      color: #BABABA;
    }
    .textDotori{
      margin: 0 0 0 1.5rem;
      color: #191919;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.125rem; /* 166.667% */
      &:hover{
        font-weight: bold;
      }
    }
    .iconArrow{
      margin: 0 2.5rem 0 auto;
      width: 2.625rem;
      height: 2.625rem;
      flex-shrink: 0;
    }
  }
`;
export default BtnContent;