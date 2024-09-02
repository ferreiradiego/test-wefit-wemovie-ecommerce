"use client";

import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 64px;
  gap: 24px;
  align-items: center;
`;

const Message = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  font-weight: bold;
  color: #2f2e41;
  tracking-normal: normal;
  line-height: normal;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
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
`;

export { Container, Message, ImageWrapper, BackLink };
