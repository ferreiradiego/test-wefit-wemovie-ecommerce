"use client";

import styled from "styled-components";

const ContainerDesktop = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (min-width: 1440px) {
    gap: 0;
  }
`;

const ProductDetailsMobile = styled.div`
  @media (min-width: 1440px) {
    display: none;
  }
`;

const ProductDetailsDesktop = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    min-width: 280px;
    gap: 16px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  min-width: 64px;
  height: 82px;

  @media (min-width: 1440px) {
    min-width: 91px;
    height: 114px;
  }
`;

const Details = styled.div`
  color: #2f2e41;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 1440px) {
    justify-content: center;
  }
`;

const TitlePriceWrapper = styled.div`
  color: #2f2e41;
  font-weight: bold;
  font-size: 14px;

  display: flex;
`;

const TitlePriceMobileWrapper = styled(TitlePriceWrapper)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (min-width: 1440px) {
    display: none;
  }
`;

const TitlePriceDesktopWrapper = styled(TitlePriceWrapper)`
  display: none;

  @media (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
  }
`;

const Title = styled.span`
  font-weight: 700;
  width: 100%;
  text-align: start;
`;

const ProductPrice = styled.span`
  width: 100%;
  text-align: center;
`;

const QuantityWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 11px;
  min-width: 117px;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const Quantity = styled.span`
  display: block;
  font-size: 14px;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 100%;
  color: #2f2e41;
  font-weight: normal;
  text-align: center;

  @media (min-width: 1440px) {
    width: 62px;
  }
`;

const SubtotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const SubtotalLabel = styled.span`
  color: #999999;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: none;
  text-align: end;

  @media (max-width: 1440px) {
    display: block;
  }
`;

const SubTotalValue = styled.span`
  min-width: 74px;
  text-align: end;
  @media (min-width: 1440px) {
    width: 100%;
    text-align: start;
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
  ProductDetailsMobile,
  ProductDetailsDesktop,
  TitlePriceMobileWrapper,
  TitlePriceDesktopWrapper,
  ContainerDesktop,
  SubTotalValue,
  ProductPrice,
};
