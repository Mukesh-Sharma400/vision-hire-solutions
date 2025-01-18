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
      {/* <Hero /> */}
      {/* <SearchBox /> */}
      <Jobs />
      <Trending />
      <Members />
      <Ready />
    </BaseLayout>
  );
}
