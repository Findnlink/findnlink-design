import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Should it be a password input? */
  type?: 'text' | 'password'
  /** Is the value valid or not? */
  invalid?: boolean
  icon?: any
  scale?: 'small' | 'medium' | 'large'
  limit?: true | false
  value: string
}
