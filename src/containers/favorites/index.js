import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import AppBar from "@/src/components/AppBar";
import FavoriteCard from "@/src/containers/favorites/components/FavoriteCard";
import NavBar from "@/src/components/NavBar/NavBar";
import {getFavorites} from "@/src/api/favorites/favorites";

// 로그인한 유저
const loginUser = 2
function Favorites () {
    const [data, setData] = useState({})
    const {total, landmarks=[]} = data

    if (!loginUser) alert('You need to log in.')

    useEffect(() => {
        getFavorites(loginUser).then(setData);
    }, []);

    return (
    <>
        <Container>
            <AppBar/>
                <ContentContainer>
                    <Like>
                        My favorites
                        <p>{total}</p>
                    </Like>
                    <Wrapper>
                        {landmarks.map((item)=>(
                            <FavoriteCard
                                userId={loginUser}
                                landmarkId={item.landmarkId}
                                landmarkImage={item.imageList}
                                landmarkName={item.name}
                                landmarkCategory={item.categoryList}/>
                        ))}
                    </Wrapper>
                </ContentContainer>
            <NavBar/>
        </Container>
    </>
    );
  }
const Wrapper = styled.div`
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 3rem;
  gap: 1rem;
  margin-top: 1.5rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `
const ContentContainer = styled.div`
    flex: 1;
  `

const Like = styled.div`
    color: #191919;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem;
    padding: 2rem 3rem 0;
    display: flex;
    p{
      font-size: 1.875rem;
      font-weight: 700;
      line-height: 3.125rem;
      padding-left: 0.5rem;
    }
  `;

  export default Favorites;