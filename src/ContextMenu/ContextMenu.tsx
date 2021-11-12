import React from 'react'
import { ContextMenuProps } from './ContextMenu.types'
import styles from './ContextMenu.module.scss'
import { ContextMenu as ReactContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'

export const ContextMenu = ({ foo }: ContextMenuProps) => {
  function handleClick(e: any, data: any) {
    console.log(data.foo)
  }

  return (
    <div data-testid={'ContextMenu'} className={styles.foo}>
      <ContextMenuTrigger id="same_unique_identifier" holdToDisplay={0}>
        <div className="well">Right click to see the menu</div>
      </ContextMenuTrigger>

      <ReactContextMenu id="same_unique_identifier">
        <MenuItem data={{ foo: 'bar1' }} onClick={handleClick}>
          ContextMenu Item 1
        </MenuItem>
        <MenuItem data={{ foo: 'bar2' }} onClick={handleClick}>
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{ foo: 'bar3' }} onClick={handleClick}>
          ContextMenu Item 3
        </MenuItem>
      </ReactContextMenu>
    </div>
  )
}
