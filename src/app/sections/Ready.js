"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Ready() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DisplayWrapper>
      <LeftSide>
        <Heading>Ready for your next hire?</Heading>
        <Description>
          Find opportunities that align with your passion, skills, and
          aspirations to take your next big step.
        </Description>
      </LeftSide>
      <ApplyBtn data-aos={screenWidth > 768 ? "fade-right" : "fade-up"}>
        Apply and Start Today
      </ApplyBtn>
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
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

const Description = styled.p`
  font-size: 16px;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

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
    transition: box-shadow 0.3s ease-in-out !important;
    transition: background-color 0.3s ease-in-out !important;
  }
`;
