import React, { useState } from 'react'
import ItemProps from './Item.types'
import styles from './Item.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Icon from '../../Icon/Icon'

const Item = ({
  text,
  position,
  _id,
  columnId,
  createdAt,
  updatedAt,
  isDragging,
  deleteItem,
  columnIndex,
  itemIndex,
}: ItemProps) => {
  const [focus, setFocus] = useState(false)

  return (
    <div
      data-testid={'Item'}
      className={styles.item}
      style={isDragging ? { border: '2px solid var(--text400)' } : {}}
      onClick={() => setFocus((prev) => !prev)}
    >
      {/* {focus ? <input value={text}></input> : text} */}
      {text}
      <div className={styles.icon} onClick={() => deleteItem!(columnIndex!, itemIndex!)}>
        <Icon icon="itemMenu" />
      </div>
    </div>
  )
}

export default Item
