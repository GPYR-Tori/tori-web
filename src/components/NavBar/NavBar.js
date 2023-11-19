import styled from "@emotion/styled";
import { IconList } from "./IconList";
import Link from "next/link";

const NavBar=()=>{
  return(
      <>
          <Container>
              <List>
                  {IconList.map(({icon, route, style})=>(
                    <Link href={route}>
                      <IconWrapper style={style}>
                            {icon()}
                      </IconWrapper>
                    </Link> 
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
  // 자식 요소 정렬 속성 추가
  & > * {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;
const IconWrapper=styled.div`
  //필요없는 display, direction등 정렬 속성 삭제, margin, padding도 삭제 
  // 아이콘 크기는 피그마대로 3rem으로 변경 
  width: 3rem;
  height: 3rem;
  color: #433E50;
  &:hover{
    color: #009A78;
  }
`;
export default NavBar;