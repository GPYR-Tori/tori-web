import { Global, css } from "@emotion/react";


export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  body {
    height: 100%;
    min-height: 100vh;
  }

  @media (max-width: 479px) {
    body {
      min-height: 100vh;
    }
  }

  @media (min-width: 542px) {
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #ffffff;
    }

    #root {
      width: 100vw;
      max-width: 479px;
      height: 100vh;
      margin: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};