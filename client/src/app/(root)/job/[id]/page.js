"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";

export default function JobPage() {
  const job = {
    id: "1",
    icon: "bi-briefcase",
    title: "Software Engineer",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "₹12,00,000/year",
    tags: ["Software Development", "JavaScript", "Node.js"],
    postedOn: "Jan 5, 2025",
    overview:
      "We're a remote team spread all over the world. From top to bottom, our team makes growth a top priority, and it's ingrained in our company culture. But most importantly, we make customers happy and having fun while doing so.",
    responsibilities: [
      "Develops prospect lists and performs email outreach to prospective customers.",
      "Follow up with prospects to foster positive relationships & convert them to customers.",
      "Assists customer service with creating quotes & orders for significant leads.",
      "Creates spec samples for high potential prospects & customers.",
      "Tracks the progress of customers through our sales funnel & follows up appropriately.",
      "Assists high-value customers via phone & email as needed.",
      "Educates customers on our products and services using phone, webinars & screen sharing if necessary.",
      "Identifies opportunities to improve our service based on customer interactions.",
      "Performs other tasks as assigned by management.",
    ],
    qualifications: [
      "Outstanding interpersonal skills.",
      "Willing to travel for meetings, shows and events.",
      "Self motivated.",
      "Must be located in the US.",
      "Compensation.",
      "Signing bonus.",
      "4 weeks vacation.",
    ],
    skills: ["Sales", "Marketing", "Retail", "Commerce"],
  };

  const moreJobs = [
    {
      id: "1",
      icon: "bi-briefcase",
      title: "Software Engineer",
      location: "Bengaluru, India",
      type: "Full-time",
      salary: "₹12,00,000/year",
      tags: ["Software Development", "JavaScript", "Node.js"],
      postedOn: "Jan 5, 2025",
    },
    {
      id: "2",
      icon: "bi-laptop",
      title: "UI/UX Designer",
      location: "Mumbai, India",
      type: "Part-time",
      salary: "₹6,00,000/year",
      tags: ["UI Design", "UX Research", "Figma"],
      postedOn: "Jan 3, 2025",
    },
    {
      id: "3",
      icon: "bi-building",
      title: "Product Manager",
      location: "Hyderabad, India",
      type: "Remote",
      salary: "₹15,00,000/year",
      tags: ["Product Management", "Agile", "Scrum"],
      postedOn: "Jan 2, 2025",
    },
  ];

  return (
    <BaseLayout>
      <DisplayWrapper>
        <MainWrapper>
          <ContentWrapper>
            <JobCard>
              <JobHeroSection>
                <JobHeroIcon>
                  <i className={job.icon}></i>
                </JobHeroIcon>
                <JobHeroData>
                  <JobHeroTitle>{job.title}</JobHeroTitle>
                  <JobHeroDescription>
                    <JobDescriptionPart1>
                      {job.location} <span>/</span> {job.type}
                    </JobDescriptionPart1>
                    <JobDescriptionPart2>
                      <span>/</span>
                    </JobDescriptionPart2>
                    <JobDescriptionPart3>
                      <span>Avg. salary</span> <b>{job.salary}</b>
                    </JobDescriptionPart3>
                  </JobHeroDescription>
                  <TagsDateWrapper>
                    <JobTags>
                      {job.tags.map((tag, index) => (
                        <JobTag key={index}>{tag}</JobTag>
                      ))}
                    </JobTags>
                    <JobDate>
                      <i className="bi bi-calendar"></i>
                      <span>{job.postedOn}</span>
                    </JobDate>
                  </TagsDateWrapper>
                  <ApplyBtn>Apply</ApplyBtn>
                </JobHeroData>
              </JobHeroSection>
              <hr />
              <SectionHeading>Overview</SectionHeading>
              <OverviewText>{job.overview}</OverviewText>
              <SectionHeading>Responsibilities</SectionHeading>
              <ul>
                {job.responsibilities.map((responsibility, index) => (
                  <Point key={index}>{responsibility}</Point>
                ))}
              </ul>
              <SectionHeading>Qualifications</SectionHeading>
              <ul>
                {job.qualifications.map((qualification, index) => (
                  <Point key={index}>{qualification}</Point>
                ))}
              </ul>
            </JobCard>
          </ContentWrapper>
          <MoreJobsWrapper>
            <MoreJobsHeading>Jobs you might be interested in</MoreJobsHeading>
            {moreJobs.map((job, index) => (
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
          </MoreJobsWrapper>
        </MainWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 0 4rem;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  width: 70%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const JobCard = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const JobHeroSection = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const JobHeroIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: black;
  background-color: #f5f5fa;
  border-radius: 50%;
`;

const JobHeroData = styled.div`
  width: 100%;
`;

const JobHeroTitle = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const JobHeroDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;

const JobDescriptionPart1 = styled.p`
  span {
    color: #8083a3;
    margin: 0 7px;
  }
`;

const JobDescriptionPart2 = styled.p`
  span {
    color: #8083a3;
    margin: 0 7px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const JobDescriptionPart3 = styled.p`
  span {
    color: #8083a3;
    margin: 0 7px;
  }

  b {
    font-size: 14px;
    font-weight: 600;
    border: 1px solid darkgray;
    padding: 6px 12px;
    border-radius: 25px;
  }

  @media (max-width: 600px) {
    span {
      margin: 0 7px 0 0;
    }
  }
`;

const TagsDateWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`;

const JobTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const JobTag = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #8083a3;
  background-color: #f5f5fa;
  padding: 6px 12px;
  border-radius: 25px;
`;

const JobDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: black;

  span {
    font-size: 14px;
    font-weight: 700;
    margin-left: 10px;
  }
`;

const ApplyBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  font-size: 14px;
  font-weight: 600;
  padding: 0 20px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #6598f3;
  }
`;

const SectionHeading = styled.p`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: -0.7rem !important;
`;

const OverviewText = styled.p``;

const Point = styled.li`
  font-size: 16px;
  list-style-position: outside;
  margin-left: -15px;
`;

const MoreJobsWrapper = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 15px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const MoreJobsHeading = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const JobWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 15px;
  cursor: pointer;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: box-shadow 0.3s ease-in-out !important;
  }

  @media (max-width: 320px) {
    padding: 1.5rem 1rem;
  }
`;

const JobIcon = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: black;
  background-color: #f5f5fa;
  border-radius: 50%;
`;

const JobTitle = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const JobDescription = styled.p`
  color: #8083a3;
  font-size: 15px;

  span {
    margin: 0 7px;
  }
`;

const JobSalary = styled.p`
  font-size: 12px;
  margin-top: 10px;

  span {
    font-weight: 600;
    border: 1px solid darkgray;
    padding: 6px 12px;
    border-radius: 25px;
    margin-right: 10px;
  }
`;
