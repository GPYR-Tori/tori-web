import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import EditCommentBtn from "@/pages/reviews/Btn/EditCommentBtn";

const User = styled.div`
  display: flex;
  margin-top: -1.5rem;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  padding: 0.1rem;
  border-radius: 4.5rem;
  margin: auto;
`;

const UserInfo = styled.div`
  width: 35rem;
  height: 4.5rem;
  margin-top: 1.5rem;
`;

const Id = styled.div`
  color: #6f6f6f;
  width: 33.33%;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
  margin-left: -1rem;
`;

const Item = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  margin: 0;
`;

const Country = styled.p`
  margin-top: -0.5rem;
  margin-left: -1rem;
  width: 50%;
  color: #6f6f6f;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.125rem;
`;

const Date = styled.div`
  display: flex;
  width: 50%;
  font-size: 0.8rem;
  color: #737373;
  justify-content: flex-end;
  align-items: flex-start;
  padding: -1rem;
  margin-right: 3rem;
`;

const Contents = styled.div`
  margin-top: -1.5rem;
  color: #737373;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7rem;
  padding: 1rem 2rem;
`;
const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -1rem;
  margin-right: 2rem;
`;
function WatchComments(props) {
    return (
        <>
            <User>
                <Img
                    src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6%2F2be1b314-52fa-4798-bb87-1944c0141e37%2FGroup_169_(1).png?table=block&id=22dd0a62-eaf2-48e4-9687-3b8cd4cce7c7&spaceId=8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6&width=250&userId=b94e2ed2-3b9a-4e03-9432-8ebacdcf4f21&cache=v2"
                    alt="사용자사진"
                />
                <UserInfo>
                    <Id>{props.id}</Id>
                    <Item>
                        <Country>{props.country}</Country>
                        <Date>{props.date}</Date>
                    </Item>
                </UserInfo>
            </User>
            <Contents>{props.comments}</Contents>
            <Link href="/reviews/EditComment">
                <Edit>
                    <EditCommentBtn />
                </Edit>
            </Link>
        </>
    );
}

export default WatchComments;
