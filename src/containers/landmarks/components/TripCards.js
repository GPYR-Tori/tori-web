import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import FavoriteBtn from "@/src/containers/favorites/components/FavoriteBtn.js";
import Link from "next/link";
import {postFavorites} from "@/src/api/favorites/favoritesApi";
import {error} from "next/dist/build/output/log";

function TripCards({data,userId}) {
    if(!userId) userId=''
    const [isLiked, setIsLiked] = useState(false);

    // 좋아요 추가
    const handleAddLike = async (e, landmarkId) =>{
        if (!userId) {
            alert('You need to log in.');
            return;
        }
        e.preventDefault()
        const requestBody = {
            userId: userId,
            landmarkId :landmarkId,
        }
        await postFavorites(landmarkId, requestBody);
        setIsLiked(!isLiked);
    };

    return (
        <>
            {data.map((item)=>(
                <Wrapper key={item.landmarkId}>
                    <Link href={`/landmarks/${item.landmarkId}?user=${userId}`}>
                        <ImgWrapper>
                                <Img src={item.imageList[0]}/>
                            <BtnWrap active={isLiked} onClick={(e) => handleAddLike(e, item.landmarkId)}>
                            {/*<BtnWrap active={isLiked}>*/}
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
  color: ${p => p.active ? "#009A78"  : "#BABABA"};
  :hover{
    color:#009A78;
  }

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

