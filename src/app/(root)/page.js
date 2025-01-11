import Hero from "../sections/Hero";
import Jobs from "../sections/Jobs";
import Ready from "../sections/Ready";
import Members from "../sections/Members";
import Trending from "../sections/Trending";
import SearchBox from "../components/SearchBox";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <SearchBox />
      <Jobs />
      <Trending />
      <Members />
      <Ready />
    </BaseLayout>
  );
}
