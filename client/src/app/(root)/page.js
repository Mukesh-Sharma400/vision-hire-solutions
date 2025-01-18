"use client";

import styled from "styled-components";
import Hero from "@/app/sections/Hero";
import Jobs from "@/app/sections/Jobs";
import Ready from "@/app/sections/Ready";
import Members from "@/app/sections/Members";
import Trending from "@/app/sections/Trending";
import SearchBox from "@/app/components/SearchBox";
import BaseLayout from "@/app/components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <DisplayWrapper>
        <Hero />
        <SearchBox />
        <Jobs />
        <Trending />
        <Members />
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
