import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import FavoriteBtn from "src/containers/favorites/FavoriteBtn.js";
import Link from "next/link";
import axios from "axios";




function TripCards() {
    const [data,setData] =useState([])
    const getData = async () => {
        try {
            const response = await axios.get(`https://tori.com/api/landmarks`);
            setData(response.data);
        } catch (error) {
            console.error('에러 발생:', error);
        }
    };
    useEffect(() => {
        getData()

    }, []);

    return (
        <>
            {data.map((item)=>(
                <Wrapper key={item.id}>
                    {/*<Link href={`/landmarks/${item.id}?user=${item.id}&category=${item.categoryList}&location=${item.id}`}>*/}
                    <Link href={`/landmarks/${item.id}?user=${item.id}`}>
                        <ImgWrapper>
                                <Img src={item.imageList[0]}/>
                            <BtnWrap  onClick={(event) => {
                                event.preventDefault()
                            }}>
                                <FavoriteBtn/>
                            </BtnWrap>
                        </ImgWrapper>
                        <Title>{item.name}</Title>
                        <CategoryWrap>
                            {item.categoryList.map((cate)=>(
                                <Category>
                                    <p>{cate}</p>
                                </Category>
                            ))}
                        </CategoryWrap>
                    </Link>
                </Wrapper>
            ))}

        </>

    );
}

export default TripCards;

const Wrapper = styled.div`
  //display: flex;
  //flex: 1;
  //background-color: red;
  //margin:3rem
`;

const ImgWrapper = styled.div`
  position: relative;
`

const BtnWrap = styled.div`
  display: flex;
  z-index: 0;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  color: #BABABA;
  :hover{
    color:#009A78;
  }
  // 지역 선택 시 active값 유지 하도록 설정, 추후에 백엔드에 넘겨줄 때 용이
  ${p => p.active?
          `background: #009A78;
  color: #FFF;`:''}
`;

const Img = styled.img`
  border-radius: 0.5rem;
  background-color: red;
  object-fit: cover;
  width: 100%;
`;
const Title = styled.p`
  color: #808080;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.5rem;
`;

const CategoryWrap = styled.div`
  display: flex;
  padding-top: 1rem;
`;
const Category = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid #d0d0d0;
  text-align: center;
  margin-right: 0.88rem;
  p {
    color: #a5a5a5;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0.7rem;
  }
`;

