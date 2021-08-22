import { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text */
  children: ReactNode
  /** Change the variant */
  primary?: boolean
}
