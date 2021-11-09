import Item from '../Item/Item.types'

export default interface ColumnProps {
  title: string
  color: string
  position: number
  _id: string
  boardId: string
  items: Item[]
  createdAt: string
  updatedAt: string
  dragHandleProps?: any
  i18n?: { addNew: string }
}
