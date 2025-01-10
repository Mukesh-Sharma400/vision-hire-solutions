"use client";

import styled from "styled-components";

export default function Jobs() {
  return (
    <DisplayWrapper>
      <HeadingWrapper>
        <Heading>Trending jobs</Heading>
        <AllJobsBtn>
          <i className="bi bi-three-dots"></i> <span>See all jobs</span>
        </AllJobsBtn>
      </HeadingWrapper>
      <JobsWrapper>
        <JobWrapper></JobWrapper>
        <JobWrapper></JobWrapper>
        <JobWrapper></JobWrapper>
        <JobWrapper></JobWrapper>
      </JobsWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  margin-top: 100px;
`;

const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-size: 25px;
  font-weight: 700;
`;

const AllJobsBtn = styled.button`
  width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #f5f5fa;
  font-size: 20px;
  padding: 0 20px;
  border-radius: 30px;
  cursor: pointer;

  span {
    font-size: 16px;
    margin-left: 15px;
  }

  &:hover {
    background-color: rgba(230, 230, 240);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const JobsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const JobWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
