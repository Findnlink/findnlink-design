import React from 'react'
import ItemProps from './Item.types'
import styles from './Item.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Icon from '../../Icon/Icon'

const Item = ({ text, position, _id, columnId, createdAt, updatedAt }: ItemProps) => {
  return (
    <div data-testid={'Item'} className={styles.item}>
      {text}
      <div className={styles.icon}>
        <Icon icon="itemMenu" />
      </div>
    </div>
  )
}

export default Item
