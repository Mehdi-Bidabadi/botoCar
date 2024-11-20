import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsdata";
import { useRouter } from "next/router"

function CategoryId() {
  const router = useRouter()
  const { categoryId } = router.query;
  const categoryCar = carsData.filter((e) => e.category === categoryId);
  console.log(categoryCar);
  return (
    <div>
      <CarList data={categoryCar} />
    </div>
  )
}

export default CategoryId