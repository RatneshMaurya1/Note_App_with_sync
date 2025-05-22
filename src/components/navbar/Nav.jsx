import React, { useState } from 'react'
import styles from "./nav.module.css"
import createImage from "../../assets/edit.png"
import searchImage from "../../assets/search.png"
import NotesPopup from '../notesPopup/NotesPopup'

const Nav = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={styles.NavContainer}>
      <div className={styles.title}>
        <h1>Notes App</h1>
        <p><span style={{color:"green"}}>•</span> online</p>
      </div>
      <div className={styles.input}>
        <input type="text" placeholder='Search...'/>
        <button onClick={() => setIsOpen(true)}><img src={createImage} alt="create-image" /> New Note</button>
        <img className={styles.search} src={searchImage} alt="search-image" />
      </div>
      <NotesPopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Nav
