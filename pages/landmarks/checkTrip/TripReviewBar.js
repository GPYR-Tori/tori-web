import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  width: 40.875rem;
  display: flex;
  background: #fff;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Bar = styled.div`
  width: 50%;
  text-align: center;
  border-bottom: 0.125rem solid #d9d9d9;
  button {
    background-color: #fff;
    border: none;
    padding-bottom: 1rem;
    color: #6f6f6f;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    :hover {
      color: #009a78;
      font-size: 1.625rem;
      font-style: normal;
      font-weight: 800;
      cursor: pointer;
    }
  }
  :hover {
    border-bottom: 0.125rem solid #009a78;
  }
`;
function TripReviewBar(props) {
    return (
        <>
            <Wrapper>
                <Bar>
                        <button>상품정보</button>
                </Bar>
                <Bar>
                    <Link href="/landmarks/reviews">
                        <button>리뷰 {props.reviewTotal}</button>
                    </Link>
                </Bar>
            </Wrapper>
        </>
    );
}

export default TripReviewBar;