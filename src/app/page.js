import Hero from "./sections/Hero";
import SearchBox from "./components/SearchBox";
import BaseLayout from "./components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <SearchBox />
    </BaseLayout>
  );
}
