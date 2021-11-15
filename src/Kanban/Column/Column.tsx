import React, { useState } from 'react'
import ColumnProps from './Column.types'
//@ts-ignore
import styles from './Column.module.scss'
import Add from '../Add/Add'
import Item from '../Item/Item'
import Header from '../Header/Header'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
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
      {items ? (
        <>
          <Header
            dragHandleProps={dragHandleProps}
            text={title}
            itemCount={items.length}
            color={color}
            _deleteColumn={_deleteColumn!}
            columnIndex={index!}
            isDragging={isDragging}
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
        </>
      ) : (
        <SkeletonTheme baseColor="var(--bg200)" highlightColor="var(--bg300)">
          <Skeleton className={styles.skeleton} style={{ height: '100px' }} />
          <Skeleton className={styles.skeleton} count={3} style={{ height: '30px' }} />
        </SkeletonTheme>
      )}
    </div>
  )
}

export default Column
