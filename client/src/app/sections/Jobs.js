"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Jobs() {
  const jobs = [
    {
      icon: "bi-briefcase",
      title: "Software Engineer",
      location: "Bengaluru, India",
      type: "Full-time",
      salary: "₹12,00,000/year",
    },
    {
      icon: "bi-laptop",
      title: "UI/UX Designer",
      location: "Mumbai, India",
      type: "Part-time",
      salary: "₹6,00,000/year",
    },
    {
      icon: "bi-building",
      title: "Product Manager",
      location: "Hyderabad, India",
      type: "Remote",
      salary: "₹15,00,000/year",
    },
  ];

  return (
    <DisplayWrapper>
      <HeadingWrapper>
        <Heading>Trending jobs</Heading>
        <AllJobsBtn href="/jobs" data-aos="fade-right">
          <i className="bi bi-three-dots"></i> <span>See all jobs</span>
        </AllJobsBtn>
      </HeadingWrapper>
      <JobsWrapper>
        {jobs.map((job, index) => (
          <JobWrapper key={index} data-aos="fade-up">
            <JobIcon>
              <i className={job.icon}></i>
            </JobIcon>
            <JobTitle>{job.title}</JobTitle>
            <JobDescription>
              <i className="bi bi-geo-alt-fill"></i> {job.location}{" "}
              <span>/</span> {job.type}
            </JobDescription>
            <JobSalary>
              <span>{job.salary}</span> Avg. salary
            </JobSalary>
          </JobWrapper>
        ))}
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

const AllJobsBtn = styled(Link)`
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 15px;
  }

  &:hover {
    background-color: rgba(230, 230, 240);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s ease-in-out !important;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    padding: 0 15px;
  }
`;

const JobsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const JobWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: box-shadow 0.3s ease-in-out !important;
  }
`;

const JobIcon = styled.div`
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: black;
  background-color: #f5f5fa;
  border-radius: 50%;
`;

const JobTitle = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

const JobDescription = styled.p`
  color: #8083a3;
  font-size: 17px;

  span {
    margin: 0 7px;
  }
`;

const JobSalary = styled.p`
  font-size: 14px;
  margin-top: 10px;

  span {
    font-weight: 600;
    border: 1px solid darkgray;
    padding: 6px 12px;
    border-radius: 25px;
    margin-right: 10px;
  }
`;
