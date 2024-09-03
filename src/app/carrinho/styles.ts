"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";

const dissolve = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const EmptyCartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 64px;
  gap: 24px;
  align-items: center;
  animation: ${dissolve} 300ms ease-out;
`;

const EmptyCartMessage = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #2f2e41;
  line-height: 27.24px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const ReloadLink = styled(Link)`
  background-color: #009edd;
  font-weight: bold;
  font-size: 0.75rem;
  border-radius: 4px;
  padding: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 157px;
  transition: background-color 300ms ease-out;
  
  &:hover {
    background-color: #0073a1;
  }
`;

export { EmptyCartContainer, EmptyCartMessage, ImageWrapper, ReloadLink };
