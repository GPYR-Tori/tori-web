import React, {useState} from "react";
import styled from "@emotion/styled";
import EditReviewBtn from "@/pages/reviews/Btn/EditReviewBtn";

function EditReview({ initialReview, onSave ,onUpdateReview}) {
    const [editedReview, setEditedReview] = useState(initialReview);

    const handleReviewChange = (e) => {
        setEditedReview(e.target.value);
    };

    const handleSave = () => {
        // Call the onSave prop with the edited review
        onSave(editedReview);
        onUpdateReview(editedReview);
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
                    <Id>토리</Id>
                    <Item>
                        <Country>대한민국</Country>
                        <Date>2023-11-02</Date>
                    </Item>
                </UserInfo>
            </User>
            <ContentsItem value={editedReview} onChange={handleReviewChange}/>
                <Edit>
                    <EditReviewBtn onSave={handleSave}  />
                </Edit>
        </Wrapper>
        </>
    );
}


export default EditReview;

const Wrapper = styled.div`
  width: 40.875rem;
  background: #fafafa;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const User = styled.div`
  display: flex;
`;

const Img = styled.img`
  margin-top: 1.5rem;
  width: 4.5rem;
  height: 4.5rem;
  padding: 1rem;
  border-radius: 4.5rem;
`;

const UserInfo = styled.div`
  width: 35rem;
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
  width: inherit;
  height: inherit;
  margin: 0;
`;
const Country = styled.p`
  margin-top: -0.2rem;
  width: 50%;
  color: #6f6f6f;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.125rem;
`;

const Date = styled.div`
  display: flex;
  width: 50%;
  color: #737373;
  justify-content: flex-end;
  align-items: flex-start;
  padding: -1rem;
  margin-right: 1rem;
`;

const ContentsItem = styled.textarea`
  resize: none;
  margin-left: 1.5rem;
  width: 37.75rem;
  height: 20rem;
  justify-content: center;
  background: #fafafa;
  border: none;
  color: #737373;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 2rem
  
`;

const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  margin-right: 2rem;
`;