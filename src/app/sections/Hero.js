"use client";

import Image from "next/image";
import styled from "styled-components";

import person1 from "../../../public/assets/person1.jpg";
import person2 from "../../../public/assets/person2.jpg";
import person3 from "../../../public/assets/person3.jpg";
import person4 from "../../../public/assets/person4.jpg";
import person5 from "../../../public/assets/person5.jpg";
import person6 from "../../../public/assets/person6.jpg";
import person7 from "../../../public/assets/person7.jpg";

export default function Hero() {
  const persons = [
    { src: person1, className: "person1", alt: "Person1" },
    { src: person2, className: "person2", alt: "Person2" },
    { src: person3, className: "person3", alt: "Person3" },
    { src: person4, className: "person4", alt: "Person4" },
    { src: person5, className: "person5", alt: "Person5" },
    { src: person6, className: "person6", alt: "Person6" },
    { src: person7, className: "person7", alt: "Person7" },
  ];
  return (
    <DisplayWrapper>
      <Heading>Explore Jobs Across India</Heading>
      <Description>
        Unlock exciting job opportunities and expert career guidance designed to
        help you thrive. At Vision Hire Solutions, we empower professionals to
        reach new heights in their career journey.
      </Description>
      <ImagesWrapper>
        <PersonImagesWrapper>
          {persons.map((person, index) => (
            <PersonImage
              key={index}
              src={person.src}
              className={person.className}
              alt={person.alt}
              quality={100}
            />
          ))}
        </PersonImagesWrapper>
      </ImagesWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 550px;
  background-image: url("/assets/gradient-background.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 0 100px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 550px) {
    padding: 0 30px;
    height: 70vh;
    max-height: 70vh;
  }
  @media (max-width: 426px) {
    padding: 0 20px;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  font-weight: 900;
  margin-top: 80px !important;
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
  max-width: 900px;
  font-size: 20px;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const ImagesWrapper = styled.div``;

const PersonImagesWrapper = styled.div`
  position: relative;
  width: 960px;
  max-width: 960px;
  height: 100px;
  margin: 2rem auto 0;
`;

const PersonImage = styled(Image)`
  border-radius: 50%;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  &.person1 {
    position: absolute;
    bottom: -60%;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
  }
  &.person2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    height: 130px;
  }
  &.person3 {
    position: absolute;
    bottom: -70%;
    left: 160px;
    width: 110px;
    height: 110px;
  }
  &.person4 {
    position: absolute;
    top: -30px;
    left: 280px;
    width: 100px;
    height: 100px;
  }
  &.person5 {
    position: absolute;
    top: -20px;
    right: 270px;
    width: 100px;
    height: 100px;
  }
  &.person6 {
    position: absolute;
    bottom: -70%;
    right: 140px;
    width: 110px;
    height: 110px;
  }
  &.person7 {
    position: absolute;
    top: 0%;
    right: 0px;
    width: 100px;
    height: 100px;
  }
`;
