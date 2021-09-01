import React from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from './Button.types'

/** This is a special button */
export const Button = ({ children, primary, ...props }: ButtonProps) => {
  return (
    <button data-testid={'button'} className={primary ? styles.primary : styles.button} {...props}>
      {children}
    </button>
  )
}
