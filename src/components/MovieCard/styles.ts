"use client";

import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 4px;
  max-width: 349.33px;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-items: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  width: 100%;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.span`
  color: var(--text-secondary);
  height: 18px;
  text-align: center;
  width: 100%;
  font-size: 12px;
  align-content: center;
  line-height: 16.34px;
`;

const Price = styled.span`
  color: var(--text-primary);
  text-align: center;
  font-weight: 700;
`;

export { CardContainer, CardContent, CardDetails, Title, Price };
