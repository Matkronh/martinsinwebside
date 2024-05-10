import styles from '../styles/MSS.module.css'
import martinpic from '../assets/img/martin.webp'

function Main (){

    return(
        <>
            <div className={styles.body}>
                    <h1 className={styles.bodyHeaderText}>Dette er martin sin personlige webside</h1>
                    <img className={styles.martinpiccss} src={martinpic}/>
            </div>
        </>
    )
}

export default Main