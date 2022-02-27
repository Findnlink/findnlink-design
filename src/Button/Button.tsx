import React from 'react'
//@ts-ignore
import scss from './Button.module.scss'
import { ButtonProps } from './Button.types'
import { _getClassNames } from '../../util/getClassNames'

/** This is a special button */
export const Button = ({ children, primary, scale, weight, ...props }: ButtonProps) => {
  //const defaultProps = { children: 'Button', size: 'XL', ...props } as ButtonProps

  const getClassNames = () => {
    let className = _getClassNames(scss.button, scss, scale, weight, props.disabled)
    if (primary) {
      className.push(scss.primary)
    }

    return className.join(' ')
  }

  return (
    <button data-testid={'button'} className={getClassNames()} {...props}>
      {children}
    </button>
  )
}
