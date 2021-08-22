import React, { HTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'
import { Props } from './Button.types'

/** This is a special button */
export const Button = ({ children, primary, ...props }: Props) => {
  return (
    <button className={primary ? styles.primary : styles.button} {...props}>
      {children}
    </button>
  )
}
