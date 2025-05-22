import React from 'react'
import styles from "./nav.module.css"
import createImage from "../../assets/edit.png"
import searchImage from "../../assets/search.png"

const Nav = () => {
  return (
    <div className={styles.NavContainer}>
      <div className={styles.title}>
        <h1>Notes App</h1>
        <p><span style={{color:"green"}}>•</span> online</p>
      </div>
      <div className={styles.input}>
        <input type="text" placeholder='Search...'/>
        <button><img src={createImage} alt="create-image" /> New Note</button>
        <img className={styles.search} src={searchImage} alt="search-image" />
      </div>
    </div>
  )
}

export default Nav
