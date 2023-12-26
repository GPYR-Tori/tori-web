import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import axios from "axios";

function Course({A_course,B_course,C_course,D_course,E_course}) {

    return (
        <>
            <Title>Course Description</Title>
                <Wrapper>
                    <Contents >
                        <p>Course A</p>
                            <Item>{A_course.price}</Item>
                            <Item>{A_course.tripPoint}</Item>
                            <Item>{A_course.course}</Item>
                    </Contents>
                    <Contents >
                        <p>Course B</p>
                        <Item>{B_course.price}</Item>
                        <Item>{B_course.tripPoint}</Item>
                        <Item>{B_course.course}</Item>
                    </Contents>
                    <Contents >
                        <p>Course C</p>
                        <Item>{C_course.price}</Item>
                        <Item>{C_course.tripPoint}</Item>
                        <Item>{C_course.course}</Item>
                    </Contents>
                    <Contents >
                        <p>Course D</p>
                        <Item>{D_course.price}</Item>
                        <Item>{D_course.tripPoint}</Item>
                        <Item>{D_course.course}</Item>
                    </Contents>
                    <Contents >
                        <p>Course E</p>
                        <Item>{E_course.price}</Item>
                        <Item>{E_course.tripPoint}</Item>
                        <Item>{E_course.course}</Item>
                    </Contents>
                </Wrapper>

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
    padding: 1.5rem 2rem 1rem;
    
  }
`;

const Item = styled.div`
  text-align: left;
  margin-left: 2rem;
  padding-top: 0.5rem;
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

