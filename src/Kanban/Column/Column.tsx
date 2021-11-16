import React, { useState } from 'react'
import ColumnProps from './Column.types'
//@ts-ignore
import styles from './Column.module.scss'
import Add from '../Add/Add'
import Item from '../Item/Item'
import Header from '../Header/Header'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import ItemProps from '../Item/Item.types'

const Column = ({
  title,
  color,
  position,
  _id,
  items,
  createdAt,
  updatedAt,
  dragHandleProps,
  i18n,
  index,
  _addItem,
  _deleteItem,
  _editItem,
  _deleteColumn,
  _editColumn,
  isDragging,
}: ColumnProps) => {
  return (
    <div data-testid={'Column'} className={styles.column}>
      <Header
        dragHandleProps={dragHandleProps}
        text={title}
        itemCount={items.length}
        color={color}
        _deleteColumn={_deleteColumn!}
        _editColumn={_editColumn!}
        columnIndex={index!}
        isDragging={isDragging}
        i18n={i18n}
      />
      <Droppable droppableId={String(index)} key={_id} type="COLUMN">
        {(provided: any) => (
          <div style={{ width: '100%' }} ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item: ItemProps, itemIndex: number) => (
              <Draggable draggableId={item._id} key={item._id} index={itemIndex}>
                {(provided: any, snapshot: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Item
                      text={item.text}
                      position={item.position}
                      _id={item._id}
                      columnId={item.columnId}
                      createdAt={item.createdAt}
                      updatedAt={item.updatedAt}
                      isDragging={snapshot.isDragging}
                      _deleteItem={_deleteItem}
                      itemIndex={itemIndex}
                      columnIndex={index}
                      _editItem={_editItem}
                      i18n={i18n}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Add text={i18n?.addNew || 'Add new'} onClick={() => _addItem!(index!, _id!)} />
    </div>
  )
}

export default Column
