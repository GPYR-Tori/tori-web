import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import axios from "axios";

function Course() {
    const [guide, setGuide] = useState([]);
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/guide/${id}`);
            setGuide(res.data);
        } catch (error) {
            console.error("데이터를 불러오는 중 에러 발생:", error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Title>코스설명</Title>
            {guide.map((item) => (
                <Wrapper key={item.id}>
                    <Contents >
                        <p>A코스</p>
                        {item.A_course.map((a_item, index)=>(
                            <Item key={index}>{a_item}</Item>
                            ))}
                    </Contents>
                    <Contents>
                        <p>B코스</p>
                        {item.B_course.map((b_item, index)=>(
                            <Item key={index}>{b_item}</Item>
                        ))}
                    </Contents>
                    <Contents>
                        <p>C코스</p>
                        {item.C_course.map((c_item, index)=>(
                            <Item key={index}>{c_item}</Item>
                        ))}
                    </Contents>
                    <Contents>
                        <p>D코스</p>
                        {item.D_course.map((d_item, index)=>(
                            <Item key={index}>{d_item}</Item>
                        ))}
                    </Contents>
                    <Contents>
                        <p>E코스</p>
                        {item.E_course.map((e_item, index)=>(
                            <Item key={index}>{e_item}</Item>
                        ))}
                    </Contents>
                </Wrapper>
            ))};
        </>
    );
    }

export default Course;

const Wrapper = styled.div`
  background: #fafafa;
  border-radius: 0.5rem;
  padding: 1.25rem 0 0.25rem 0;
  margin-bottom: 2.5rem;
`;


const Contents = styled.div`
  height: 12.5rem;
  border-radius: 0.5rem;
  background: #fff;
  margin: 0 1.25rem 1.25rem 1.25rem;
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

