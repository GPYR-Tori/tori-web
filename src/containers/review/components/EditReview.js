import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import EditBtn from "@/src/containers/review/components/Btn/EditBtn";
import {ImCancelCircle} from "react-icons/im";
import axios  from "axios";

function EditReview({reviewId, userId,content,nickname,nation,createDate,landmarkId,setIsShowEditReview,onUpdate}) {
    const [editedReview, setEditedReview] = useState(content);
    const handleEditReview = (e) => {
        setEditedReview(e.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestBody = {
                userId: {userId},
                content: editedReview,
            };
            await axios.patch(`landmarks/${landmarkId}/reviews`, requestBody);
            // 리뷰 창 닫기
            setIsShowEditReview(false);
            onUpdate(editedReview);
            console.log("리뷰 수정 완료:", requestBody);

        } catch (error) {
            console.error("리뷰 수정 에러:", error);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const requestBody = {
                userId: {userId},
            };
            await axios.delete(`landmarks/${landmarkId}/reviews/${reviewId}`,requestBody);
            alert('Your review has been successfully deleted.')
            console.log("삭제한 userId",userId)
        } catch (error) {
            console.error("리뷰 삭제 에러:", error);
        }
    };


    return (
        <>
            <Wrapper>
                <User>
                    <Img
                        src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6%2F2be1b314-52fa-4798-bb87-1944c0141e37%2FGroup_169_(1).png?table=block&id=22dd0a62-eaf2-48e4-9687-3b8cd4cce7c7&spaceId=8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6&width=250&userId=b94e2ed2-3b9a-4e03-9432-8ebacdcf4f21&cache=v2"
                        alt="사용자사진"
                    />
                    <UserInfo>
                        <Item>
                            <Id>{nickname}</Id>
                            <CancelBtn onClick={handleDelete}>
                                <ImCancelCircle className={'deleteicon'}/>
                            </CancelBtn>
                        </Item>
                        <Item>
                            <Country>{nation}</Country>
                            <Date>{createDate}</Date>
                        </Item>

                    </UserInfo>
                </User>
                <form onSubmit={handleSubmit}>
                    <ContentsItem
                        type='text'
                        value={editedReview}
                        onChange={handleEditReview}/>
                    <Edit>
                        <EditBtn type={"submit"} />
                    </Edit>
                </form>
            </Wrapper>
        </>
    );
}


const Wrapper = styled.div`
  background: #fafafa;
  border-radius: 0.5rem;
  margin: 3rem;
`;

const CancelBtn = styled.button`
  margin-right: 2rem;
  margin-top: -2rem;
  border: none;
  color: #009A78;
  background-color: #fafafa;
  .deleteicon{
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const User = styled.div`
  display: flex;
`;

const Img = styled.img`
  flex: 1;
  margin-top: 1.5rem;
  width: 4.5rem;
  height: 4.5rem;
  padding: 1rem;
  border-radius: 4.5rem;
`;

const UserInfo = styled.div`
  flex: 100;
  box-sizing: border-box;
  height: 4.5rem;
  margin-top: 2.6rem;
`;

const Id = styled.div`
  flex: 4;
  color: #6f6f6f;
  width: 33.33%;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
`;

const Item = styled.div`
  display: flex;
`;
const Country = styled.p`
  flex: 4;
  margin-top: -0.2rem;
  color: #6f6f6f;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.125rem;
`;

const Date = styled.div`
  color: #737373;
  align-items: flex-end;
  margin-right: 2rem;
`;


const ContentsItem = styled.textarea`
  resize: none;
  margin-left: 1.5rem;
  width: 90%;
  height: 17rem;
  justify-content: center;
  background: #fafafa;
  border: none;
  color: #737373;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 1rem;
`;

const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`;

export default EditReview;
