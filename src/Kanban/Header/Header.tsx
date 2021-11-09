import React from 'react'
import { HeaderProps } from './Header.types'
import styles from './Header.module.scss'
import Icon from '../../Icon/Icon'

const Header = ({ text, color, itemCount, dragHandleProps }: HeaderProps) => {
  return (
    <div
      {...dragHandleProps}
      data-testid={'Header'}
      className={styles.header}
      style={{ color: color }}
    >
      <div className={styles.text}>
        <span className={styles.itemCount}>{itemCount}</span>
        <span>{text}</span>
      </div>
      <div className={styles.icon} onClick={() => console.log('Clicked')}>
        <Icon icon="itemMenu" />
      </div>
    </div>
  )
}

export default Header
