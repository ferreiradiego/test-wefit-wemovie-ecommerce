"use client";

import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

const Header = styled.div`
  color: #999999;
  font-weight: bold;
  font-size: 0.875rem;
  display: none;
  justify-content: space-between;

  @media (min-width: 1024px) {
    display: flex;
  }
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

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CheckoutButton = styled.button`
  text-transform: uppercase;
  background-color: #009edd;
  font-weight: bold;
  font-size: 0.75rem;
  border-radius: 4px;
  padding: 8px;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

const TotalLabel = styled.span`
  color: #999999;
  font-weight: bold;
  font-size: 0.875rem;
`;

const TotalAmount = styled.span`
  font-size: 24px;
  color: #2f2e41;
  font-weight: bold;
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
};
