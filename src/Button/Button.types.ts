import { HTMLAttributes, ReactNode } from 'react'

export interface ButtonProps<>extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** Change the variant */
  primary?: boolean
  /** Disable the button */
  disabled?: boolean
  /** Size of the button */
  scale?: 's' | 'm' | 'l' | 'xl'
  weight?: 'light' | 'normal' | 'bold'
}
