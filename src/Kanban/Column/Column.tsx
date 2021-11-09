import React, { useState } from 'react'
import ColumnProps from './Column.types'
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
  boardId,
  items,
  createdAt,
  updatedAt,
  dragHandleProps,
  i18n,
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
          />
          <Droppable droppableId={_id} key={_id} type="COLUMN">
            {(provided: any) => (
              <div style={{ width: '100%' }} ref={provided.innerRef} {...provided.droppableProps}>
                {items.map((item: ItemProps, index: number) => (
                  <Draggable draggableId={item._id} key={item._id} index={index}>
                    {(provided: any) => (
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

          <Add
            text={i18n?.addNew || 'Add new'}
            color={color}
            onClick={() => {
              console.log('added')
              // setItems((prev: any) => [
              //   ...prev,
              //   { value: 'item' + Math.random(), id: Math.random() },
              // ])
            }}
          />
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

// <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="list">
//               {(provided: any) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps}>
//                   <QuoteList quotes={state.quotes} />
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </DragDropContext>

export default Column
