import styles from "./styles/MSS.module.css"
import Main from "./components/Main"
import LowerBody from "./components/LowerBody"


function App() {

  return (
    <>
    <div className={styles.header}>

    </div>
      <div className={styles.site} >
        <Main/>
        <LowerBody/>
      </div>
    </>
  )
}

export default App
