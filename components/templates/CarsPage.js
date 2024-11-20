import Card from "../module/Card";
import styles from "./CarsPage.module.css";

function CarsPage({data}) {
  return (
    <div className={styles.container}>
        {data.map((e) => (
          <Card key={e.id} {...e} />
        ))}

    </div>
  )
}

export default CarsPage