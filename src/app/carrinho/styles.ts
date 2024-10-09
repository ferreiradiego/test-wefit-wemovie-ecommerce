"use client";

import { dissolve } from "@/utils/animations";
import Link from "next/link";
import styled from "styled-components";

const EmptyStateContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 64px;
  gap: 24px;
  align-items: center;
  animation: ${dissolve} 300ms ease-out;
  width: 100%;
  height: auto;

  @media (min-width: 1440px) {
    height: 100%;
  }
`;

const EmptyStateMessage = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 27.24px;
  text-align: center;
`;

const ReloadLink = styled(Link)`
  background-color: var(--button-bg-empty);
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  padding: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 157px;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: var(--button-bg-hover);
  }
`;

export { EmptyStateContainer, EmptyStateMessage, ReloadLink };
