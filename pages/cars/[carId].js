import CarDetails from "@/components/templates/CarDetails";
import carsData from "../../data/carsdata";
import { useRouter } from "next/router"

function CarDetail() {
    const router = useRouter()
    const {carId} = router.query;
    const carDetails = carsData[carId - 1]
    console.log(router);
  return (
    <CarDetails {...carDetails} />
  )
}

export default CarDetail