import React from "react";
import styled from "@emotion/styled";
const Edit = styled.div`
  display: flex;
  align-items: center;

  button {
    text-align: center;
    width: 4rem;
    height: 2rem;
    background: #009a78;
    border-radius: 0.625rem;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
    cursor: pointer;
  }
`;
function WriteBtn () {
    return (
        <Edit>
            <button>작성</button>
        </Edit>
    );
}

export default WriteBtn;