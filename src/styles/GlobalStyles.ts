"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #2f2e41;
  }

  body {
    color: #fff;
    background: var(--background);
    font-family: "Open Sans", sans-serif;
  }

  main {
    margin-left: 16px;
    margin-right: 16px;

    @media (min-width: 1024px) {
      margin-left: 180px;
      margin-right: 180px;
    }
  }

`;

export default GlobalStyles;
