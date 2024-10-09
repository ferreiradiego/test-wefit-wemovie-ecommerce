"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (min-width: 1440px) {
    max-height: 100%;
    overflow-y: auto;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const ErrorMessage = styled.div`
  h1 {
    color: red;
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-block: 32px;
`;

export {
  FlexContainer,
  GridContainer,
  ErrorMessage,
  NotFoundContainer,
  Wrapper,
};
