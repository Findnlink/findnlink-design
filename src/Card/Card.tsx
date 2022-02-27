import React from 'react'
import { CardProps } from './Card.types'
//@ts-ignore
import scss from './Card.module.scss'

export const Card = ({ children }: CardProps) => {
  return (
    <div data-testid={'Card'} className={scss.card}>
      {children}
    </div>
  )
}
