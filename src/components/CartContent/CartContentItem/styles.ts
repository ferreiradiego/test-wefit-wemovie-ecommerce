"use client";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
  min-width: 64px;
  height: 82px;
`;

const Details = styled.div`
  color: #2f2e41;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitlePriceWrapper = styled.div`
  color: #2f2e41;
  font-weight: bold;
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
`;

const Title = styled.div`
  text-wrap: wrap;
`;

const QuantityWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 11px;
  width: 117px;
`;

const Quantity = styled.span`
  display: block;
  font-size: 0.875rem;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 100%;
  color: #2f2e41;
  font-weight: normal;
  text-align: center;
`;

const SubtotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;

const SubtotalLabel = styled.span`
  color: #999999;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export {
  Container,
  ImageWrapper,
  Details,
  TitlePriceWrapper,
  Title,
  QuantityWrapper,
  QuantityControl,
  Quantity,
  SubtotalWrapper,
  SubtotalLabel,
};
