import React, { useEffect, useState } from 'react'
import { HeaderProps } from './Header.types'
//@ts-ignore
import styles from './Header.module.scss'
import { Icon } from '../../Icon/Icon'
import { ContextMenu } from '../../ContextMenu/ContextMenu'

const Header = ({
  text,
  color,
  itemCount,
  dragHandleProps,
  _deleteColumn,
  _editColumn,
  columnIndex,
  isDragging,
  i18n,
}: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState({ x: 0, y: 0 })
  const [value, setValue] = useState(text)
  const [editMode, setEditMode] = useState(false)

  return (
    <ContextMenu
      menu={
        <div onClick={() => setOpen(false)}>
          <div>
            <span style={{ backgroundColor: 'var(--text300)' }} />
            <span style={{ backgroundColor: '#796AFF70' }} />
            <span style={{ backgroundColor: '#FF6A6A70' }} />
            <span style={{ backgroundColor: '#FC762A70' }} />
            <span style={{ backgroundColor: '#FFAD1F70' }} />
            <span style={{ backgroundColor: '#17BF6370' }} />
          </div>
          <hr />
          <button onClick={() => setEditMode(true)}>
            <Icon icon={'edit'} /> {i18n!.edit!}
          </button>
          <button
            onClick={() => {
              _deleteColumn!(columnIndex!)
            }}
          >
            <Icon icon={'remove'} />
            {i18n!.remove!}
          </button>
        </div>
      }
      open={open}
      setOpen={setOpen}
      location={location}
      setLocation={setLocation}
    >
      <div
        {...dragHandleProps}
        data-testid={'Header'}
        className={styles.header}
        style={isDragging ? { border: '2px solid var(--text400)', color } : { color }}
      >
        <div className={styles.textWrapper}>
          <span className={styles.itemCount}>{itemCount}</span>

          {editMode ? (
            <input
              className={styles.input}
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
              }}
              onBlur={(e) => {
                setEditMode(false)
                //_editColumn!(columnIndex!, itemIndex!, value)
              }}
            />
          ) : (
            <span>{text}</span>
          )}
        </div>
        <div
          className={styles.icon}
          onClick={(e) => {
            setLocation({ x: e.pageX, y: e.pageY })
            setOpen(true)
          }}
        >
          <Icon icon="itemMenu" />
        </div>
      </div>
    </ContextMenu>
  )
}

export default Header
