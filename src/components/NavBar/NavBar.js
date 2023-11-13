import styled from "@emotion/styled";
import { IconList } from "./IconList";

const NavBar=()=>{
    return(
        <>
            <Container>
                <List>
                    {IconList.map(({name,icon})=>(
                        <IconWrapper>
                            {icon()}
                        </IconWrapper>
                    ))}
                </List>
            </Container>
        </>
    )
};
const Container=styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
`;
const List=styled.div`
  // 46.875rem → 100vw로 변경
  width: 100vw;
  height: 7.5rem;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  //margin: 0 auto 0 3rem;
  
  background: #FFF;
  box-shadow: 0px -15px 25px 0px rgba(0, 0, 0, 0.04);
`;
const IconWrapper=styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 50%;
  padding: 0;
  margin-right: 0;
  color: #433E50;
  &:hover{
    color: #009A78;
    //font-weight: 700;
  }
`;
export default NavBar;