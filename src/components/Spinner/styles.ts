"use client";

import Image from "next/image";
import styled from "styled-components";

export const SpinnerAnimate = styled(Image)`
  animation: spin 2s linear infinite;
  color: #fff;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
