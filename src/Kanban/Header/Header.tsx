import React from 'react'
import { HeaderProps } from './Header.types'
//@ts-ignore
import styles from './Header.module.scss'
import { Icon } from '../../Icon/Icon'

const Header = ({
  text,
  color,
  itemCount,
  dragHandleProps,
  _deleteColumn,
  columnIndex,
  isDragging,
}: HeaderProps) => {
  return (
    <div
      {...dragHandleProps}
      data-testid={'Header'}
      className={styles.header}
      style={isDragging ? { border: '2px solid var(--text400)', color } : { color }}
    >
      <div className={styles.text}>
        <span className={styles.itemCount}>{itemCount}</span>
        <span>{text}</span>
      </div>
      <div className={styles.icon} onClick={() => _deleteColumn!(columnIndex!)}>
        <Icon icon="itemMenu" />
      </div>
    </div>
  )
}

export default Header
