import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 40.875rem;
  background: #fafafa;
  border-radius: 0.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin-bottom: 2.5rem;

`;

const Contents = styled.div`
  width: 38.375rem;
  height: 12.5rem;
  border-radius: 0.5rem;
  background: #fff;
  margin: auto auto 1.25rem auto;
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


function Course(props) {
    return (
        <>
            <Wrapper>
                <Contents>
                    <p>A코스</p>
                    <Item>{props.fee}</Item>
                    <Item>{props.start}</Item>
                    <Item> {props.route}</Item>
                </Contents>
                <Contents>
                    <p>B코스</p>
                </Contents>
                <Contents>
                    <p>C코스</p>
                </Contents>
                <Contents>
                    <p>D코스</p>
                </Contents>
                <Contents>
                    <p>E코스</p>
                </Contents>
            </Wrapper>
        </>

    );
}

export default Course;
