import styles from '../styles/MSS.module.css'
import martinpic from '../assets/img/martin.webp'
import { DiscussionEmbed } from 'disqus-react';

function Main (){

    return(
        <>
            <div className={styles.body}>
                    <h1 className={styles.bodyHeaderText}>Dette er martin sin personlige webside</h1>
                    <img className={styles.martinpiccss} src={martinpic}/>
            </div>
            <div>
                <DiscussionEmbed
                    shortname='example'
                    config={
                        {
                            url: this.props.article.url,
                            identifier: this.props.article.id,
                            title: this.props.article.title,
                            language: 'zh_EN' //e.g. for Traditional Chinese (Taiwan)	
                        }
                    }
                    />
            </div>
        </>
    )
}

export default Main