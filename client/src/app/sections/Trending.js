"use client";

import styled from "styled-components";

export default function Trending() {
  const jobs = [
    "Software Engineer",
    "UI/UX Designer",
    "Data Scientist",
    "Product Manager",
    "Digital Marketing Specialist",
    "Content Writer",
    "HR Manager",
    "Business Analyst",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Cloud Engineer",
    "Network Administrator",
    "Cybersecurity Analyst",
    "Graphic Designer",
    "Quality Assurance Engineer",
    "Financial Analyst",
    "Operations Manager",
    "Machine Learning Engineer",
  ];

  return (
    <DisplayWrapper>
      <LeftSide>
        <SubHeading>Recommended jobs</SubHeading>
        <Heading>Explore trending job listings</Heading>
        <Description>
          Find opportunities that align with your passion, skills, and
          aspirations to take your next big step.
        </Description>
      </LeftSide>
      <RightSide>
        {jobs.map((job, index) => (
          <Job key={index} data-aos="fade-up">
            {job}
          </Job>
        ))}
      </RightSide>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: linear-gradient(to bottom, #f5f5fa 30%, rgba(255, 255, 255, 0)),
    url("/assets/office.webp");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 3rem 2rem;

  @media (max-width: 320px) {
    padding: 1.5rem 1rem;
  }
`;

const SubHeading = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #6598f3;
`;

const Heading = styled.h3`
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 17px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-image: url("/assets/gradient-background.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 3rem 1.5rem;

  @media (max-width: 375px) {
    padding: 2rem 1rem;
    gap: 0.5rem;
  }
`;

const Job = styled.p`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: black;
  background-color: white;
  padding: 6px 15px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    background-color: #f5f5fa;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s ease-in-out !important;
  }
`;
