import styles from '../styles/MSS.module.css'
import martinpic from '../assets/img/martin.webp'
import { DiscussionEmbed } from 'disqus-react';

function Main (){

    return(
        <>
            <div className={styles.introbody}>
                    <h1 className={styles.bodyHeaderText}>Dette er martin sin personlige webside</h1>
                    <img className={styles.martinpiccss} src={martinpic}/>
            </div>
        </>
    )
}

export default Main