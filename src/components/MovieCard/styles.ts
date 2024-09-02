"use client";

import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 4px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const Title = styled.p`
  color: #333333;
`;

const Price = styled.p`
  color: #2f2e41;
`;

export { CardContainer, CardContent, CardDetails, Title, Price };
