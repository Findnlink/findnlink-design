import React, { useState } from 'react'
import Add from './Add/Add'
import Board from './Board/Board'
import Card from './Column/Column'
import Header from './Header/Header'
import Item from './Item/Item'
import data from '../../data.json'

export default {
  title: 'Kanban',
}

// export const card = () => {
//   const [items, setItems] = useState([
//     { value: 'item1', id: '0' },
//     { value: 'item2', id: '1' },
//     { value: 'item3', id: '2' },
//     { value: 'item4', id: '3' },
//     { value: 'item5', id: '4' },
//   ])
//   return <Card index={0} header={'Card'} items={items} setItems={setItems} color="var(--primary)" />
// }
// export const item = () => <Item value={'foo'} id={'0'} />
// export const header = () => <Header text="In Progress" color="var(--primary)" itemCount={3} />
// export const add = () => <Add text="Add new" color="var(--text200)" />
export const board = () => (
  <Board
    _id={data[0]._id}
    columns={data[0].columns}
    title={data[0].title}
    projectId={data[0].projectId}
    createdAt={data[0].createdAt}
    updatedAt={data[0].updatedAt}
    i18n={{ addNew: 'Add new' }}
  />
)
