"use client";

import styled from "styled-components";

export default function Ready() {
  return (
    <DisplayWrapper>
      <LeftSide>
        <Heading>Ready for your next hire?</Heading>
        <Description>
          Find opportunities that align with your passion, skills, and
          aspirations to take your next big step.
        </Description>
      </LeftSide>
      <ApplyBtn>Apply and Start Today</ApplyBtn>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("/assets/gradient-background.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h3`
  font-size: 35px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 16px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const ApplyBtn = styled.button`
  width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  font-size: 16px;
  padding: 0 20px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #6598f3;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
