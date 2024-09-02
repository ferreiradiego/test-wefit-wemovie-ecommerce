"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 88px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  padding: 24px 0;

  @media (min-width: 1024px) {
    margin: 0 180px;
  }
`;

const LogoLink = styled(Link)`
  font-weight: bold;
  font-size: 1.25rem;
`;

const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: end;
`;

const CartIcon = styled(Image)`
  cursor: pointer;
  height: 21px;
`;

export { HeaderContainer, Nav, LogoLink, CartLink, CartIcon };
