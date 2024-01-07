import Display from "./component/display"
import styles from "./app.module.css"
import ButtonsContainer from "./component/ButtonsContainer"


function App() {
  
  return (
    <>
      <div className={styles.calculator}>
        <Display/>
        <ButtonsContainer/>
      </div>
    </>
  )
}

export default App
