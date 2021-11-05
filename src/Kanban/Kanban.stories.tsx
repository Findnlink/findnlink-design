import React, { useState } from 'react'
import Add from './Add/Add'
import Card from './Card/Card'
import Header from './Header/Header'
import Item from './Item/Item'

export default {
  title: 'Kanban',
}

export const card = () => (
  <Card
    items={[
      { value: 'item1', id: '0' },
      { value: 'item2', id: '1' },
      { value: 'item3', id: '2' },
      { value: 'item4', id: '3' },
      { value: 'item5', id: '4' },
    ]}
    color="var(--primary)"
  />
)
export const item = () => <Item value={'foo'} id={'0'} />
export const header = () => <Header text="In Progress" color="var(--primary)" itemCount={3} />
export const add = () => <Add text="Add new" color="var(--text200)" />
