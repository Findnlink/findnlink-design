import React, { useState } from 'react'
import { InputProps } from './Input.types'
//@ts-ignore
import scss from './Input.module.scss'
import { _getClassNames } from '../../util/getClassNames'
import { Icon } from '../Icon/Icon'

export const Input = ({
  error,
  errorMessage,
  scale,
  weight,
  type,
  icon,
  limit,
  value,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const getClassNames = () => {
    let className = _getClassNames(scss.input, scss, scale, weight, props.disabled)
    if (error) {
      className.push(scss.error)
    }

    if (icon || type === 'password') {
      className.push(scss.icon)
    }

    console.log('weight', weight, className)

    return className.join(' ')
  }

  return (
    <div className={getClassNames()}>
      <div>
        {icon && icon}
        {type === 'password' && <Icon size={scale} icon="lock" />}
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          data-testid={'Input'}
          {...props}
        />
        {type === 'password' && (
          <span
            className={scss.password}
            onClick={() => {
              setShowPassword((prev) => !prev)
            }}
          >
            {showPassword ? (
              <Icon icon={'eyeClosed'} size={scale} />
            ) : (
              <Icon icon={'eye'} size={scale} />
            )}
          </span>
        )}
        {limit && (
          <span className={scss.limit}>
            {value.length}/{props.maxLength}
          </span>
        )}
      </div>
      {error && errorMessage && <span className={scss.errorMessage}>{errorMessage}</span>}
    </div>
  )
}
