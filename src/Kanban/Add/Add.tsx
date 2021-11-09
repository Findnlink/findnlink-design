import React from 'react'
import { AddProps } from './Add.types'
import styles from './Add.module.scss'
import Icon from '../../Icon/Icon'

const Add = ({ text, color, onClick }: AddProps) => {
  return (
    <span data-testid={'Add'} className={styles.add} onClick={onClick}>
      <Icon icon="add" color="var(--text200)" /> {text}
    </span>
  )
}

export default Add
