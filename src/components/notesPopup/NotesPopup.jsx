import React from 'react'
import styles from "./notesPopup.module.css"

const NotesPopup = ({isOpen,setIsOpen}) => {

    if (!isOpen) return null
  return (
    <div className={styles.popupContainer} onClick={() => setIsOpen(false)}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popupInputs}>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' id='title' placeholder='Add title ' />
        </div>
        <div className={styles.popupInputs}>
            <label htmlFor="content">content</label>
            <input type="text" name='content' id='content' placeholder='Add content ' />
        </div>
        <button>Create</button>
      </div>
    </div>
  )
}

export default NotesPopup
