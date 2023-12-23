import React, {useState} from "react";
import styled from "@emotion/styled";
import {ImCancelCircle} from "react-icons/im";
import EditBtn from "@/src/containers/review/components/Btn/EditBtn";
import axios from "axios";

function EditComments({content,reviewId,onUpdateComments,nickname,date,nation,commentId,setIsShowEditComments,userId}) {
    // editedComments는 WatchComments 에서도 쓰임
    const [editedComments, setEditedComments] = useState(content);
    const handleCommentChange = (e) => {
        setEditedComments(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestBody = {
                userId: {userId},
                content: editedComments,
            };
            await axios.patch(`/reviews/${reviewId}/comments/${commentId}`, requestBody);
            // 리뷰 창 닫기
            setIsShowEditComments(false);
            onUpdateComments(editedComments);
            console.log("댓글 수정 완료:", requestBody);
        } catch (error) {
            console.error("댓글 수정 에러:", error);
        }
    };
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const requestBody = {
                userId: {userId},
            };
            await axios.delete(`/reviews/${reviewId}/comments/${commentId}`, requestBody);
            alert('Your review has been successfully deleted.')
            console.log("삭제한 userId",userId)
        } catch (error) {
            console.error("리뷰 삭제 에러:", error);
        }
    };

    return (
        <EditWrapper>
            <User>
                <Img
                    src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6%2F2be1b314-52fa-4798-bb87-1944c0141e37%2FGroup_169_(1).png?table=block&id=22dd0a62-eaf2-48e4-9687-3b8cd4cce7c7&spaceId=8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6&width=250&userId=b94e2ed2-3b9a-4e03-9432-8ebacdcf4f21&cache=v2"
                    alt="사용자사진"
                />
                <UserInfo>
                    <Item>
                        <Id>{nickname}</Id>
                        <DeleteBtn onClick={handleDelete}>
                            <ImCancelCircle className={'xicon'}/>
                        </DeleteBtn>
                    </Item>
                    <Item>
                        <Country>{nation}</Country>
                        <Date>{date}</Date>
                    </Item>
                </UserInfo>
            </User>
            <form onSubmit={handleSubmit}>
                <Write
                    type='text'
                    value={editedComments}
                    onChange={handleCommentChange}
                />
                <Edit>
                    <IconWrap>
                        <EditBtn type={'submit'}/>
                    </IconWrap>
                </Edit>
            </form>

        </EditWrapper>
    );
}

export default EditComments;

const EditWrapper = styled.div`
  border-radius: 0.5rem;
  margin: 0  3rem 1rem;
`;

const DeleteBtn = styled.button`
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  border: none;
  color: #009A78;
  background-color: #fff;
  .xicon{
    width: 1.2rem;
    height: 1.2rem;
  }

`;

const Write = styled.textarea`
  margin: 1rem 0 1rem 3rem;
  border: none;
  outline: none;
  width: 90%;
  border-radius: 0.5rem;
  background: #fff;
  height: 5rem;
  color: #737373;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7rem;
  resize: none;
`;

const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -1rem;
  margin-right: 4rem;
`;

const IconWrap = styled.button`
  margin-bottom: 2rem;
  border: none;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;
const User = styled.div`
  display: flex;
  padding: 0 2rem;
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
  flex: 100;
  box-sizing: border-box;
  height: 4.5rem;
  margin-top: 2.6rem;
`;

const Id = styled.div`
  flex: 4;
  color: #6f6f6f;
  width: 33.33%;
  font-size: 1.2rem;
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.125rem;
`;

const Date = styled.div`
  color: #737373;
  align-items: flex-end;
  margin-right: 2rem;
`;
