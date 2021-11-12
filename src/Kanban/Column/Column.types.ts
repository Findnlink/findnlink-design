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
  addItem?: (columnIndex: number, columnId: string) => void
  deleteItem?: (columnIndex: number, itemIndex: number) => void
  editItem?: (columnIndex: number, itemIndex: number, text: string) => void
  deleteColumn?: (columnIndex: number) => void
  editColumn?: (columnIndex: number, columnId: string) => void
}
