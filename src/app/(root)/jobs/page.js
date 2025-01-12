"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchBox from "@/app/components/SearchBox";
import BaseLayout from "@/app/components/BaseLayout";

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState("All Jobs");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const jobs = [
    {
      icon: "bi-briefcase",
      title: "Software Engineer",
      location: "Bengaluru, India",
      type: "Full-time",
      salary: "₹12,00,000/year",
      tags: ["Software Development", "JavaScript", "Node.js"],
      postedOn: "Jan 5, 2025",
    },
    {
      icon: "bi-laptop",
      title: "UI/UX Designer",
      location: "Mumbai, India",
      type: "Part-time",
      salary: "₹6,00,000/year",
      tags: ["UI Design", "UX Research", "Figma"],
      postedOn: "Jan 3, 2025",
    },
    {
      icon: "bi-building",
      title: "Product Manager",
      location: "Hyderabad, India",
      type: "Remote",
      salary: "₹15,00,000/year",
      tags: ["Product Management", "Agile", "Scrum"],
      postedOn: "Jan 2, 2025",
    },
    {
      icon: "bi-pc-display-horizontal",
      title: "Data Analyst",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹8,00,000/year",
      tags: ["Data Analysis", "SQL", "Tableau"],
      postedOn: "Dec 29, 2024",
    },
    {
      icon: "bi-server",
      title: "DevOps Engineer",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹14,00,000/year",
      tags: ["DevOps", "AWS", "CI/CD"],
      postedOn: "Jan 4, 2025",
    },
    {
      icon: "bi-phone",
      title: "Mobile App Developer",
      location: "Chennai, India",
      type: "Contract",
      salary: "₹10,00,000/year",
      tags: ["Flutter", "React Native", "Mobile Development"],
      postedOn: "Jan 6, 2025",
    },
    {
      icon: "bi-terminal",
      title: "Frontend Developer",
      location: "Kolkata, India",
      type: "Full-time",
      salary: "₹9,00,000/year",
      tags: ["Frontend Development", "React.js", "CSS"],
      postedOn: "Jan 1, 2025",
    },
    {
      icon: "bi-cloud",
      title: "Cloud Engineer",
      location: "Ahmedabad, India",
      type: "Full-time",
      salary: "₹13,00,000/year",
      tags: ["Cloud Computing", "Azure", "Kubernetes"],
      postedOn: "Dec 31, 2024",
    },
    {
      icon: "bi-key",
      title: "Cybersecurity Analyst",
      location: "Noida, India",
      type: "Remote",
      salary: "₹11,00,000/year",
      tags: ["Cybersecurity", "Network Security", "Ethical Hacking"],
      postedOn: "Dec 28, 2024",
    },
    {
      icon: "bi-file-text",
      title: "Technical Writer",
      location: "Jaipur, India",
      type: "Part-time",
      salary: "₹5,00,000/year",
      tags: ["Technical Writing", "Documentation", "API"],
      postedOn: "Dec 30, 2024",
    },
  ];

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <BaseLayout>
      <DisplayWrapper>
        <HeaderWrapper>
          <Heading data-aos="fade-up">Finding a job</Heading>
          <Description data-aos="fade-up" data-aos-delay="100">
            When you’re searching for a job, there are a few things you can do
            to get the most out of your search
          </Description>
        </HeaderWrapper>
        <SearchBox />
        <JobsWrapper>
          <FiltersWrapper>
            <FilterLeftWrapper>
              <Filter
                className={activeFilter === "All Jobs" ? "active" : ""}
                onClick={() => handleFilterClick("All Jobs")}
              >
                All Jobs
              </Filter>
              <Filter
                className={activeFilter === "Trending" ? "active" : ""}
                onClick={() => handleFilterClick("Trending")}
              >
                Trending
              </Filter>
              <Filter
                className={activeFilter === "Most Recent" ? "active" : ""}
                onClick={() => handleFilterClick("Most Recent")}
              >
                Most Recent
              </Filter>
            </FilterLeftWrapper>
            <MoreFilter
              data-bs-toggle="tooltip"
              data-bs-title="Filter"
              data-bs-custom-class="custom-tooltip"
            >
              <i className="bi bi-funnel-fill"></i>
            </MoreFilter>
          </FiltersWrapper>
          {jobs.map((job, index) => (
            <JobWrapper key={index}>
              <JobIcon>
                <i className={job.icon}></i>
              </JobIcon>
              <JobData>
                <JobTitle>{job.title}</JobTitle>
                <JobDescription>
                  <JobDescriptionPart1>
                    {job.location} <span>/</span> {job.type}
                  </JobDescriptionPart1>
                  <JobDescriptionPart2>
                    <span>/</span>
                  </JobDescriptionPart2>
                  <JobDescriptionPart3>
                    <span>Avg. salary</span> <b>{job.salary}</b>
                  </JobDescriptionPart3>
                </JobDescription>
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
              </JobData>
            </JobWrapper>
          ))}
        </JobsWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div``;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-image: url("/assets/gradient-background.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
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
  letter-spacing: 1px;
  margin-top: 50px !important;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  max-width: 600px;
  font-size: 18px;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const FiltersWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Filter = styled.button`
  width: fit-content;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 14px;
  font-weight: 600;
  padding: 0 20px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  &.active {
    color: white;
    background-color: black;
    border: 1px solid black;
  }

  @media (max-width: 450px) {
    font-size: 12px;
    padding: 0 15px;
  }
`;

const MoreFilter = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const JobsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 4rem auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const JobWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: box-shadow 0.3s ease-in-out !important;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const JobIcon = styled.div`
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

const JobData = styled.div`
  width: 100%;
`;

const JobTitle = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const JobDescription = styled.div`
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
