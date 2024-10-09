"use client";

import styled from "styled-components";

const CartContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 21px;
  border-radius: 4px;
  width: 100%;
  height: auto;

  @media (min-width: 1440px) {
    max-height: 100%;
    overflow-y: auto;
    padding: 24px;
    gap: 24px;
  }
`;

const CartHeader = styled.div`
  color: var(--text-light-gray);
  font-weight: bold;
  font-size: 14px;
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

const CartHeaderItem = styled.span`
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
  background-color: var(--text-light-gray);
  height: 1px;
  border: none;
`;

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 16px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

const TotalLabel = styled.span`
  color: var(--text-light-gray);
  font-weight: 700;
  font-size: 14px;
  text-align: center;
`;

const TotalAmount = styled.span`
  font-size: 24px;
  color: var(--text-primary);
  font-weight: bold;

  @media (min-width: 1440px) {
    width: 130.79px;
    text-align: center;
  }
`;

export {
  CartContainer,
  CartHeader,
  Divider,
  CartFooter,
  TotalContainer,
  TotalLabel,
  TotalAmount,
  CartHeaderItem,
  DeleteButton,
};
