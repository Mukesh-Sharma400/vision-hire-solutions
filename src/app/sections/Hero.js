"use client";

import styled from "styled-components";

export default function Hero() {
  return (
    <DisplayWrapper>
      <Heading>Explore Jobs Across India</Heading>
      <Description>
        Unlock exciting job opportunities and expert career guidance designed to
        help you thrive. At Vision Hire Solutions, we empower professionals to
        reach new heights in their career journey.
      </Description>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/gradient-background.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 0 100px;

  @media (max-width: 1024px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 550px) {
    padding: 0 30px;
  }
  @media (max-width: 426px) {
    padding: 0 20px;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  font-weight: 900;
  margin-top: 100px;

  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 550px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  max-width: 900px;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
