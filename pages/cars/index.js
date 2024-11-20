import CarsPage from "@/components/templates/CarsPage"
import Categories from "@/components/module/Categories"
import carsData from "@/data/carsdata"
import SearchBar from "@/components/module/SearchBar"

function Details() {
  return (
    <div>
        <SearchBar />
        <Categories data={carsData} />
        <CarsPage data={carsData} />
    </div>
  )
}

export default Details