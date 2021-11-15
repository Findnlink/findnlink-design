import React, { useState } from 'react'
import ItemProps from './Item.types'
//@ts-ignore
import styles from './Item.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Icon } from '../../Icon/Icon'
import { Modal } from '../../Modal'
import { Button } from '../../Button/Button'

const Item = ({
  text,
  position,
  _id,
  columnId,
  createdAt,
  updatedAt,
  isDragging,
  _deleteItem,
  columnIndex,
  itemIndex,
  _editItem,
}: ItemProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(text)

  return (
    <>
      <div
        data-testid={'Item'}
        className={styles.item}
        style={isDragging ? { border: '2px solid var(--text400)' } : {}}
        onClick={() => setOpen(true)}
      >
        {/* {focus ? <input value={text}></input> : text} */}
        {text}
        <div className={styles.icon} onClick={() => _deleteItem!(columnIndex!, itemIndex!)}>
          <Icon icon="itemMenu" />
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        selector="#modal-root"
      >
        <input
          placeholder={'Item'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <Button
          onClick={() => {
            _editItem!(columnIndex!, itemIndex!, value)
          }}
        >
          Save
        </Button>
      </Modal>
    </>
  )
}

export default Item
