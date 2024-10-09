"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #2F2E41;
    --primary-color: #009EDD;
    --button-bg-empty: #009EDD;
    --button-bg-hover: #0073A1;
    --button-bg-selected: #039B00;
    --button-text: #FFFFFF;
    --text-white: #FFFFFF;
    --text-primary: #2F2E41;
    --text-secondary: #333333;
    --text-light-gray: #999999;
  }

  * {
    color: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  body {
    color: #fff;
    background: var(--background);
    font-family: "Open Sans", sans-serif;
    
    display: flex;
    flex-direction: column;

    padding-bottom: 40px;
    min-height: 100vh;
    max-height: 100vh;
    height: 100vh;
    
    @media (min-width: 1440px) {
      padding-inline: 180px;
      padding-bottom: 40px;
    }

  }

  main {
    padding-inline: 16px;
    flex-grow: 1;
  }

`;

export default GlobalStyles;
