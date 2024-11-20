import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsdata";
import { useRouter } from "next/router";

function FillterCars() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    console.log (min, max)

    const filltredData = carsData.filter((e) => e.price > min && e.price < max)
    console.log(filltredData);
  return (
    <div>
        <CarList data={filltredData} />
    </div>
  )
}

export default FillterCars