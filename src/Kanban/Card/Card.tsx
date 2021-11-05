import React, { useState } from 'react'
import { CardProps } from './Card.types'
import styles from './Card.module.scss'
import Add from '../Add/Add'
import Item from '../Item/Item'
import Header from '../Header/Header'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
  //@ts-ignore
  const custom: Quote = {
    id: `id-${k}`,
    content: `Quote ${k}`,
  }

  return custom
})

const grid = 8
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function Quote({ quote, index }: any) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided: any) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {quote.content}
        </div>
      )}
    </Draggable>
  )
}

const QuoteList = React.memo(function QuoteList({ quotes }: any) {
  return quotes.map((quote: any, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ))
})

const Card = ({ color, items }: CardProps) => {
  const [state, setState] = useState({ quotes: initial })

  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const quotes = reorder(state.quotes, result.source.index, result.destination.index)

    setState({ quotes })
  }

  return (
    <div data-testid={'Card'} className={styles.card}>
      {items ? (
        <>
          <Header text="Progress" itemCount={5} color={color} />
          {items.map((item: any, index: any) => (
            <Item value={item.value} id={index} />
          ))}

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
              {(provided: any) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <QuoteList quotes={state.quotes} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <Add text="Add new" color={color} />
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

export default Card
