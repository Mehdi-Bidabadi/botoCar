import { useState } from "react"
import styles from "./SearchBar.module.css"
import { useRouter } from "next/router";

function SearchBar() {
    const router = useRouter()
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const searchHandler = () => {
        if(min && max){
            router.push(`/filter/${min}/${max}`)

        }else{
            alert("error")
        }
    }
  return (
    <div className={styles.container}>
        <div>
            <input placeholder="Inter min-price" value={min} onChange={(e) => setMin(e.target.value)}/>
            <input placeholder="Inter mix-price" value={max} onChange={(e) => setMax(e.target.value)}/>
        </div>
        <button onClick={searchHandler}>Serach</button>
    </div>
  )
}

export default SearchBar