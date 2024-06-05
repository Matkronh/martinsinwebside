import styles from '../styles/MSS.module.css'

function LowerBody (){


    return(
        <>
            <div className={styles.lowerbody}>
                <div className={styles.lowerbodyflex}>
                    <div className={styles.lowerbodybox}>
                        <h1>
                            part1
                        </h1>
                    </div>
                    <div className={styles.lowerbodyboxinv}>
                        <h1>
                            part2
                        </h1>
                    </div>
                </div>
                <div className={styles.lowerbodyflex}>
                    <div className={styles.lowerbodyboxinv}>
                        <h1>
                            part1
                        </h1>
                    </div>
                    <div className={styles.lowerbodybox}>
                        <h1>
                            part2
                        </h1>
                    </div>
                </div>
                <div className={styles.lowerbodyflex}>
                    <div className={styles.lowerbodybox}>
                        <h1>
                            part1
                        </h1>
                    </div>
                    <div className={styles.lowerbodyboxinv}>
                        <h1>
                            part2
                        </h1>
                    </div>
                </div>
                <div className={styles.lowerbodyflex}>
                    <div className={styles.lowerbodyboxinv}>
                        <h1>
                            part1
                        </h1>
                    </div>
                    <div className={styles.lowerbodybox}>
                        <h1>
                            part2
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LowerBody