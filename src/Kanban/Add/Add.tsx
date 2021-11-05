import React from 'react'
import { AddProps } from './Add.types'
import styles from './Add.module.scss'
import Icon from '../../Icon/Icon'

const Add = ({ text, color }: AddProps) => {
  return (
    <span data-testid={'Add'} className={styles.add} style={{ color: color }}>
      <Icon icon="add" color={color} /> {text}
    </span>
  )
}

export default Add
