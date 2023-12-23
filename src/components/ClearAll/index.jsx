import React from 'react'
import styles from './styles.module.css'
export default function ClearAll (clearTasks) {
  return (
    <div className={styles.container__Clear}>
    <a href='#' onClick={clearTasks} className={styles.link}>Clear Completed</a>
    </div>
  )
}
