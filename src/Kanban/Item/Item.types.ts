export default interface ItemProps {
  text: string
  position: number
  _id: string
  columnId: string
  createdAt?: string
  updatedAt?: string
  isDragging?: boolean
  columnIndex?: number
  itemIndex?: number
  _deleteItem?: (columnIndex: number, itemIndex: number) => void
  _editItem?: (columnIndex: number, itemIndex: number, text: string) => void
}
