import styled from "@emotion/styled";
import FavoriteBtn from "@/pages/favorites/FavoriteBtn";
import Link from "next/link";


function FavoriteCard({landmarkName,landmarkCategori,landmarkImage}) {
    return (
        <Wrapper>
            <Link href="/landmarks/checkTrip">
                <Img src={landmarkImage}/>
                {/*<Img src={landmarkImage}/>*/}
                <Title>{landmarkName}</Title>
                <CategoryWrap>
                    <Category>
                        <p>
                            {landmarkCategori}
                        </p>
                    </Category>
                    <Category>
                        <p>
                            {landmarkCategori}
                        </p>
                    </Category>
                    <Category>
                        <p>
                            {landmarkCategori}
                        </p>
                    </Category>
                </CategoryWrap>
            </Link>
            <BtnWrap>
                <FavoriteBtn/>
            </BtnWrap>
        </Wrapper>
    );
}
export default FavoriteCard;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin:3rem
`;


const BtnWrap = styled.div`
  display: flex;
  z-index: 0;
  margin-left: -3rem;
  margin-bottom: -5rem;
  color:#009A78;
  :hover{
    color: #BABABA;
  }
`;

const Img = styled.img`
  border-radius: 0.5rem;
  object-fit: cover;
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
