import React from 'react'
import { TextProps } from './Text.types'
//@ts-ignore
import scss from './Text.module.scss'
import { _getClassNames } from '../../util/getClassNames'

export const Text = ({ children, scale, weight }: TextProps) => {
  const getClassNames = () => {
    let className = _getClassNames(scss.text, scss, scale, weight, undefined)

    //console.log(className, scale, weight)

    return className.join(' ')
  }

  return (
    <div data-testid={'Text'} className={getClassNames()}>
      {children}
    </div>
  )
}
