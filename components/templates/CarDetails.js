import Calender from "../icons/Calender"
import Company from "../icons/Company"
import Location from "../icons/Location"
import Model from "../icons/Model"
import Money from "../icons/Money"
import Road from "../icons/Road"
import styles from "./CarDetail.module.css"
function CarDetails(props) {
    const { id, name, model, year, distance, location, image, price, description } = props

  return (
    <div className={styles.container}>
        <img src={image} className={styles.image} />
        <h3 className={styles.header}>{name} {model}</h3>
        <div className={styles.details}>
            <div>
                <Company />
                <p>Company</p>
                <span>{name}</span>
            </div>
            <div>
                <Model />
                <p>Model</p>
                <span>{model}</span>
            </div>
            <div>
                <Calender />
                <p>first registarition</p>
                <span>{year}</span>
            </div>
            <div>
                <Road />
                <p>kms driven</p>
                <span>{distance}</span>
            </div>
        </div>
        <div className={styles.details}>
        <div>
                <Location />
                <p>kms driven</p>
                <span>{location}</span>
            </div>
        </div>
        <div className={styles.details}>
            <p className={styles.descriptionTitle}> extera information</p>
            <p className={styles.descriptionText}>{description}</p>
        </div>
        <div className={styles.details}>
            <div className={styles.props}>
                <Money />
                <p>price</p>
                <span>{price}</span>
            </div>
        </div>
        <button className={styles.button}>buy</button>
    </div>
  )
}

export default CarDetails