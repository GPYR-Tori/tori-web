import React, {useState} from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import EditCommentBtn from "@/pages/reviews/Btn/EditCommentBtn";
import EditComments from "@/pages/reviews/EditComment";


function WatchComments(props) {
    const [showEditC, setShowEditC] = useState(false);
    const [editedComments, setEditedComments] = useState(props.comments);

    const handleShowEditC = () =>{
        setShowEditC(!showEditC)
    }
    const handleSaveComment= (editedComments) => {
        // You can perform any necessary actions here, such as updating the review on the server.
        setEditedComments(editedComments);
        setShowEditC(false);
    };
    const editSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.335 5.45399L3.27301 14.516L2.03701 19.126L1.22401 22.163C1.20143 22.2478 1.20154 22.3371 1.22433 22.4219C1.24713 22.5067 1.29181 22.584 1.35389 22.6461C1.41598 22.7082 1.49329 22.7529 1.57808 22.7757C1.66287 22.7985 1.75216 22.7986 1.83701 22.776L4.87201 21.962L9.48301 20.726H9.48401L18.546 11.664L12.336 5.45399H12.335ZM22.293 6.50399L17.497 1.70699C17.4042 1.61404 17.294 1.54031 17.1727 1.48999C17.0514 1.43968 16.9213 1.41379 16.79 1.41379C16.6587 1.41379 16.5286 1.43968 16.4073 1.48999C16.286 1.54031 16.1758 1.61404 16.083 1.70699L13.608 4.18099L19.819 10.392L22.293 7.91699C22.386 7.8242 22.4597 7.714 22.51 7.59268C22.5603 7.47137 22.5862 7.34132 22.5862 7.20999C22.5862 7.07866 22.5603 6.94861 22.51 6.8273C22.4597 6.70598 22.386 6.59578 22.293 6.50299"
                fill="#009A78"
            />
        </svg>
    );

    return (
        <>
            {showEditC ?
                <EditComments
                    initialReview={props.comments}
                    onSave={handleSaveComment}
                    onUpdateComments={setEditedComments}/>
                :
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
            <Contents>{editedComments}</Contents>
            <Edit>
                <Icon onClick={handleShowEditC}>{editSvg()}</Icon>
            </Edit>
                </>
            }
        </>
    );
}

export default WatchComments;

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
const Icon = styled.button`
  margin-bottom: 2rem;
  border: none;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;