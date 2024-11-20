import { useRouter } from "next/router"
import Back from "../icons/Back"
import Card from "../module/Card"
import styles from "./CarList.module.css"

function CarList({data}) {

    const router = useRouter();
    const backHandler = () => {
        router.back()
    }
  return (
    <div className={styles.container}>
        <div className={styles.back} onClick={backHandler}>
            <Back />
            <p>back</p>
        </div>
        <div className={styles.cards}>
            {data.map((e) => <Card key={e.id} {...e} />)}

        </div>
    </div>
  )
}

export default CarList