import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Upgrades from "./components/Upgrades/Upgrades";
import TopRestaurants from "./components/TopRestaurants/TopRestaurants";
import Access from "./components/Access/Access";
// import NewForm from "./components/Access/NewForm/NewForm";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Upgrades />
        <TopRestaurants />
        <Access />
      </main>
    </>
  );
}
