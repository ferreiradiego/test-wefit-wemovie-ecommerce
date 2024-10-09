"use client";

import { dissolve } from "@/utils/animations";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

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

const CartItemsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: top;
  text-align: right;
`;

const CartText = styled.div`
  display: none;
  font-size: 14px;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const ItemCount = styled.div`
  color: var(--text-light-gray);
  font-weight: 600;
  font-size: 12px;
`;

const CartLink = styled(Link)<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${dissolve} 300ms ease-out;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
    `}
`;

const CartIcon = styled(Image)`
  width: 40px;
  height: 40px;
`;

export {
  HeaderContainer,
  LogoLink,
  CartIcon,
  CartItemsInfo,
  CartText,
  ItemCount,
  CartLink,
};
