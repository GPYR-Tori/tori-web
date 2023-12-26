import styled from "@emotion/styled";
import {useState} from "react";
import EditReview from "@/src/containers/review/components/EditReview";
import EditBtn from "@/src/containers/review/components/Btn/EditBtn";

function WatchReviews({loginUser,reviewId,userId,content,nickname,nation,createDate,landmarkId}) {

    const [isShowEditReview, setIsShowEditReview] =useState(false);
    const [editedReview, setEditedReview] = useState(content);

    const handleShowEdit = () => {
        if (!userId) {
            alert('You need to log in.');
        } else if (userId !== loginUser) {
            console.log("userId",userId)
            console.log("loginUser",loginUser)
            alert('You are not authorized to edit this review.');
        } else {
            setIsShowEditReview(!isShowEditReview);
        }
    };

    return (
        <>
            {isShowEditReview?
                <EditReview
                    userId ={userId}
                    content={editedReview}
                    nickname={nickname}
                    nation={nation}
                    createDate={createDate}
                    landmarkId={landmarkId}
                    reviewId={reviewId}
                    setIsShowEditReview={setIsShowEditReview}
                    onUpdate={setEditedReview}
                />
                :
                (
                    <Wrapper>
                        <User>
                            <Img
                                src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6%2F2be1b314-52fa-4798-bb87-1944c0141e37%2FGroup_169_(1).png?table=block&id=22dd0a62-eaf2-48e4-9687-3b8cd4cce7c7&spaceId=8c2f1236-d0db-4ddc-bef1-ca9b7c92dbd6&width=250&userId=b94e2ed2-3b9a-4e03-9432-8ebacdcf4f21&cache=v2"
                                alt="사용자 사진"
                            />
                            <UserInfo>
                                <Id>{nickname}</Id>
                                <Item>
                                    <Country>{nation}</Country>
                                    <Date>{createDate}</Date>
                                </Item>
                            </UserInfo>
                        </User>
                        <ContentsItem>{editedReview}</ContentsItem>
                        <Edit>
                            <Icon onClick={handleShowEdit}>
                                <EditBtn/>
                            </Icon>
                        </Edit>
                    </Wrapper>
                )
            }
        </>
    );
}

export default WatchReviews;

const Wrapper = styled.div`
  background: #fafafa;
  border-radius: 0.5rem;
  margin: 3rem;
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

const ContentsItem = styled.div`
  color: #737373;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.125rem;
  padding: 1rem 2rem;
`;

const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -1rem;
  margin-right: 2rem;
`;

const Icon = styled.button`
  margin-bottom: 2rem;
  border: none;
  border-radius: 50%;
  background: #fafafa;
  cursor: pointer;
`;