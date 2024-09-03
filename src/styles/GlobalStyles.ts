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

    padding-bottom: 40px;
    
    @media (min-width: 1440px) {
      padding-inline: 180px;
    }
  }

  main {
    padding-inline: 16px;
  }

`;

export default GlobalStyles;
