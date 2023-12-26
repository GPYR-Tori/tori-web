import React, {useState} from "react";
import styled from "@emotion/styled";
import FavoriteBtn from "@/src/containers/favorites/components/FavoriteBtn";
import Link from "next/link";
import {deleteFavorites} from "@/src/api/favorites/favoritesApi";

function FavoriteCard({landmarkId,userId,landmarkImage=[],landmarkName,landmarkCategory=[]}) {
    const [isLiked, setIsLiked] = useState(true)

    const handleDeleteLike = async (e) =>{
        e.preventDefault()
        const requestBody = {
            userId: userId,
            landmarkId :landmarkId,
        }
        await deleteFavorites(landmarkId,requestBody);
        setIsLiked(!isLiked);
    };

    return (
        <Wrapper>
            <Link href={`/landmarks/${landmarkId}?user=${userId}`}>
                <ImgWrapper>
                    <Img src={landmarkImage[0]}/>
                    <BtnWrap active={isLiked} onClick={(e) => handleDeleteLike(e)}>
                        <FavoriteBtn />
                    </BtnWrap>
                </ImgWrapper>
                <Title>{landmarkName}</Title>
                <CategoryWrap>
                    {landmarkCategory.map((item)=>(
                        <Category>
                            <p>{item}</p>
                        </Category>
                    ))}
                </CategoryWrap>
            </Link>
        </Wrapper>
    );
}

export default FavoriteCard;

const Wrapper = styled.div`
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
  color: ${p => p.active ?  "#009A78" :"#BABABA" };
  :hover{
    color: #BABABA;
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

