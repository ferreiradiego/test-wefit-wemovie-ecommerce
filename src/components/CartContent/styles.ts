"use client";

import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  border-radius: 4px;
`;

const Header = styled.div`
  color: #999999;
  font-weight: bold;
  font-size: 0.875rem;
  display: none;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1440px) {
    display: flex;
  }

  & > :first-child {
    max-width: 280px;

    height: 20px;
  }
`;

const HeaderItem = styled.span`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
`;

const DeleteButton = styled.span`
  width: 24px;
  height: 24px;
  padding: 4px;
  visibility: hidden;
`;

const Divider = styled.hr`
  background-color: #999999;
  height: 1px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 16px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const CheckoutButton = styled.button`
  text-transform: uppercase;
  background-color: #009edd;
  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px;
  height: 40px;
  text-align: center;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: #0073a1;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

const TotalLabel = styled.span`
  color: #999999;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
`;

const TotalAmount = styled.span`
  font-size: 24px;
  color: #2f2e41;
  font-weight: bold;
  /* align-items: center; */

  @media (min-width: 1440px) {
    width: 130.79px;
    text-align: center;
  }
`;

export {
  Container,
  Header,
  Divider,
  Footer,
  CheckoutButton,
  TotalContainer,
  TotalLabel,
  TotalAmount,
  HeaderItem,
  DeleteButton
};
