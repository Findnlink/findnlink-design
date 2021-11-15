import Item from '../Item/Item.types'

export default interface ColumnProps {
  title: string
  color: string
  position: number
  _id: string
  items: Item[]
  createdAt?: string
  updatedAt?: string
  dragHandleProps?: any
  i18n?: { addNew: string }
  index?: number
  isDragging?: boolean
  _addItem?: (columnIndex: number, columnId: string) => void
  _deleteItem?: (columnIndex: number, itemIndex: number) => void
  _editItem?: (columnIndex: number, itemIndex: number, text: string) => void
  _deleteColumn?: (columnIndex: number) => void
  _editColumn?: (columnIndex: number, columnId: string) => void
}
