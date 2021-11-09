import React from 'react'
import { BoardProps } from './Board.types'
import styles from './Board.module.scss'
import Column from '../Column/Column'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ColumnProps from '../Column/Column.types'

const Board = ({ columns, title, projectId, _id, createdAt, updatedAt, i18n }: BoardProps) => {
  const onDragEnd = () => {
    console.log('onDragEnd Board')
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={_id} direction="horizontal" type="BOARD">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={styles.board}>
            {columns.map((col: ColumnProps, index: number) => (
              <Draggable draggableId={col._id} index={index}>
                {(provided: any) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <Column
                      title={col.title}
                      color={col.color}
                      position={col.position}
                      _id={col._id}
                      boardId={col.boardId}
                      createdAt={col.createdAt}
                      updatedAt={col.updatedAt}
                      items={col.items}
                      dragHandleProps={provided.dragHandleProps}
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
    </DragDropContext>
  )
}

export default Board
