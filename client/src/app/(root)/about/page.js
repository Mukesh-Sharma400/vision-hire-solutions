"use client";

import Image from "next/image";
import styled from "styled-components";
import Ready from "@/app/sections/Ready";
import BaseLayout from "@/app/components/BaseLayout";

import person1 from "../../../../public/assets/person1.jpg";
import person2 from "../../../../public/assets/person2.jpg";
import person3 from "../../../../public/assets/person3.jpg";

export default function AboutPage() {
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
    <BaseLayout>
      <DisplayWrapper>
        <HeaderWrapper>
          <Heading data-aos="fade-up">About Us</Heading>
          <Description data-aos="fade-up" data-aos-delay="100">
            When you’re searching for a job, there are a few things you can do
            to get the most out of your search
          </Description>
        </HeaderWrapper>
        <MissionValueIntroWrapper>
          <MissionValueWrapper>
            <MissionValueCard data-aos="fade-up">
              <MissionValueHeading>Our missions</MissionValueHeading>
              <MissionValueDescription>
                Certain things catch your eye, but pursue only those that
                capture the heart. We become what we think about. The person who
                says it cannot be done should
              </MissionValueDescription>
            </MissionValueCard>
            <MissionValueCard data-aos="fade-up">
              <MissionValueHeading>Our values</MissionValueHeading>
              <MissionValueDescription>
                Certain things catch your eye, but pursue only those that
                capture the heart. We become what we think about. The person who
                says it cannot be done should
              </MissionValueDescription>
            </MissionValueCard>
          </MissionValueWrapper>
          <ReviewCard data-aos="fade-up">
            <ReviewText>
              ❝ I needed a change, to be able to make more money and have a life
              outside my job. Work App helped me discover something better. ❞
            </ReviewText>
            <ReviewImageNameWrapper>
              <ReviewImage src={person1} alt="person1" quality={100} />
              <ReviewNameWrapper>
                <ReviewerName>Naseema Al Morad</ReviewerName>
                <ReviewerDescription>
                  Developer at Dropbox Inc.
                </ReviewerDescription>
              </ReviewNameWrapper>
            </ReviewImageNameWrapper>
          </ReviewCard>
        </MissionValueIntroWrapper>
        <HeaderWrapper id="members">
          <ShortHeading data-aos="fade-up">Meet the team</ShortHeading>
          <ShortDescription data-aos="fade-up" data-aos-delay="100">
            Workze is an independent branding and experience design agency with
            a great variety of services, such as branding, marketing, and web
            design.
          </ShortDescription>
        </HeaderWrapper>
        <MembersWrapper>
          {members.map((member, index) => (
            <MemberWrapper key={index} data-aos="fade-up">
              <MemberImage src={member.image} alt={member.name} quality={100} />
              <MemberName>{member.name}</MemberName>
              <MemberDescription>{member.position}</MemberDescription>
            </MemberWrapper>
          ))}
        </MembersWrapper>
        <Ready />
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

const HeaderWrapper = styled.div`
  width: 100%;
  height: 250px;
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
  @media (max-width: 425px) {
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

const MissionValueIntroWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MissionValueWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MissionValueCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #f5f5fa;
  border-radius: 20px;
`;

const MissionValueHeading = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const MissionValueDescription = styled.p`
  font-size: 16px;
`;

const ReviewCard = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/assets/gradient-background.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 2rem;

  @media (max-width: 768px) {
    gap: 3rem;
    height: fit-content;
  }
`;

const ReviewText = styled.p`
  font-size: 30px;
  font-weight: 600;
  font-style: italic;

  @media (max-width: 425px) {
    font-size: 25px;
  }
  @media (max-width: 375px) {
    font-size: 22px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

const ReviewImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ReviewImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ReviewNameWrapper = styled.div``;

const ReviewerName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const ReviewerDescription = styled.p`
  font-size: 16px;
`;

const ShortHeading = styled.h1`
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 1px;
  margin-top: 50px !important;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ShortDescription = styled.p`
  max-width: 800px;
  font-size: 16px;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const MembersWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: -2rem;

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
  align-items: center;
  justify-content: center;
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
