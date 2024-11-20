import Link from "next/link"
import Hatchback from "../icons/Hatchback"
import Sedan from "../icons/Sedan"
import Sport from "../icons/Sport"
import Suv from "../icons/Suv"
import styles from "./categories.module.css"

function Categories(props) {
    const { id, name, model, year, distance, location, image, price } = props
    console.log(name);

  return (
    <div className={styles.container}>
        <Link href={`/categories/sedan`}>
        <div>
            <p>sedan</p>
            <Sedan />
        </div>
        </Link>
        <Link href={`/categories/suv`}>
        <div>
            <p>Suv</p>
            <Suv />
        </div>
        </Link>
        <Link href={`/categories/hatchback`}>
        <div>
            <p>Hatchback</p>
            <Hatchback />
        </div>
        </Link>
        <Link href={`/categories/sport`}>
        <div>
            <p>Sport</p>
            <Sport />
        </div>
        </Link>
    </div>
  )
}

export default Categories