import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Should it be a password input? */
  type?: 'text' | 'password'
  /** Is the value valid or not? */
  error?: boolean
  errorMessage?: string
  icon?: any
  scale?: 's' | 'm' | 'l' | 'xl'
  weight?: 'light' | 'normal' | 'bold'
  limit?: true | false
  value: string
}
