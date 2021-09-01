import React from 'react'
import { InputProps } from './Input.types'
import styles from './Input.module.scss'

export const Input = ({ invalid, type, icon, limit, value, ...props }: InputProps) => {
  return (
    <div>
      {icon && <span className={styles.icon}>li</span>}
      {type === 'password' && <span className={styles.icon}>lp</span>}
      <input
        id={invalid ? styles.error : ''}
        className={styles.input}
        type={type}
        data-testid={'Input'}
        {...props}
      />
      {type === 'password' && <span className={styles.password}>r</span>}
      {limit && (
        <span className={styles.limit}>
          {value.length}/{props.maxLength}
        </span>
      )}
    </div>
  )
}
