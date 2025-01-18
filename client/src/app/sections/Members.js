"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import person1 from "../../../public/assets/person1.jpg";
import person2 from "../../../public/assets/person2.jpg";
import person3 from "../../../public/assets/person3.jpg";

export default function Members() {
  const members = [
    {
      image: person1,
      name: "John Doe",
      position: "Team Lead",
    },
    {
      image: person2,
      name: "Jane Smith",
      position: "Project Manager",
    },
    {
      image: person3,
      name: "Michael Johnson",
      position: "Developer",
    },
  ];

  return (
    <DisplayWrapper>
      <HeadingWrapper>
        <Heading>Team members</Heading>
        <MeetTeamBtn href="/about#members" data-aos="fade-right">
          <i className="bi bi-three-dots"></i> <span>Meet our team</span>
        </MeetTeamBtn>
      </HeadingWrapper>
      <MembersWrapper>
        {members.map((member, index) => (
          <MemberWrapper key={index} data-aos="fade-up">
            <MemberImage src={member.image} alt={member.name} quality={100} />
            <MemberName>{member.name}</MemberName>
            <MemberDescription>{member.position}</MemberDescription>
          </MemberWrapper>
        ))}
      </MembersWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div``;

const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-size: 25px;
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: 23px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
`;

const MeetTeamBtn = styled(Link)`
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
  @media (max-width: 425px) {
    font-size: 17px;
    height: 45px;

    span {
      margin-left: 10px;
    }
  }
  @media (max-width: 375px) {
    font-size: 16px;
    height: 40px;
  }
  @media (max-width: 320px) {
    span {
      font-size: 12px;
    }
  }
`;

const MembersWrapper = styled.div`
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

const MemberWrapper = styled.div`
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

const MemberImage = styled(Image)`
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #f5f5fa;
  border-radius: 50%;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  @media (max-width: 320px) {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
  }
`;

const MemberName = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

const MemberDescription = styled.p`
  color: #8083a3;
  font-size: 17px;

  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
