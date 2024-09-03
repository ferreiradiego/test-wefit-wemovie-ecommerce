"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

const dissolve = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 88px;

  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  width: 101.94px;
  height: 25px;

  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  text-align: left;
`;

const CartLink = styled(Link)<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${dissolve} 300ms ease-out;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
`;

const CartIcon = styled(Image)`
  width: 40px;
  height: 40px;

  padding: 8px 0px 0px 0px;
`;

export { HeaderContainer, LogoLink, CartLink, CartIcon };
