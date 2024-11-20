
import CarsPage from "@/components/templates/CarsPage"
import Categories from "@/components/module/Categories"
import carsData from "@/data/carsdata"
import SearchBar from "@/components/module/SearchBar"
import Allbutton from "@/components/module/Allbutton"

export default function Home() {
  const cars = carsData.slice(0, 3)
  return (
    <>
      <SearchBar />
      <Categories data={carsData} />
      <Allbutton />
      <CarsPage data={cars} />
    </>
  );
}
