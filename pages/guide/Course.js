import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import axios from "axios";

const Wrapper = styled.div`
  background: #fafafa;
  border-radius: 0.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin-bottom: 2.5rem;

`;


const Contents = styled.div`
  height: 12.5rem;
  border-radius: 0.5rem;
  background: #fff;
  margin: 1.25rem;
  p {
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    padding: 1.5rem 2rem 0;
    
  }
`;

const Item = styled.div`
  text-align: left;
  margin-left: 2rem;
  padding-top: 0.3rem;
  font-size: 1.3rem;
  color: #808080;
`;

const Title = styled.div`
  color: #191919;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  margin-bottom: 1rem;
`;

const Explain = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  width: 40.875rem;
  flex-wrap: wrap;
`;
function Course(props) {
    const [guide, setGuide] = useState([]);
    const getData = async () =>{
        try {
            const res = await axios({
                method: "get",
                url: "https://jsonplaceholder.typicode.com/comments",
            });
            setGuide(res.data)
        }catch (e){
            console.log(e)}
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        {guide.map((item) => (
        <div key={item.id}>
            <Explain>{item.body}</Explain>
            <Title>코스설명</Title>
            <Wrapper>
                <Contents >
                    <p>A코스</p>
                    <Item>{item.id}</Item>
                    <Item>{item.title}</Item>
                    <Item> {item.body}</Item>
                </Contents>
                <Contents>
                    <p>B코스</p>
                    <Item>{item.id}</Item>
                    <Item>{item.title}</Item>
                    <Item> {item.body}</Item>
                </Contents>
                <Contents>
                    <p>C코스</p>
                    <Item>{item.id}</Item>
                    <Item>{item.title}</Item>
                    <Item> {item.body}</Item>
                </Contents>
                <Contents>
                    <p>D코스</p>
                    <Item>{item.id}</Item>
                    <Item>{item.title}</Item>
                    <Item> {item.body}</Item>
                </Contents>
                <Contents>
                    <p>E코스</p>
                    <Item>{item.id}</Item>
                    <Item>{item.title}</Item>
                    <Item> {item.body}</Item>
                </Contents>
            </Wrapper>

        </div>
        ))};

        </>
    );
}

export default Course;
