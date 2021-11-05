import { CardProps } from './Card/Card.types'

export interface Board {
  id: string
  title: string
  cards: CardProps[]
}
