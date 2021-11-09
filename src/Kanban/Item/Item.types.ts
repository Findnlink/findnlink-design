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
  deleteItem?: (columnIndex: number, itemIndex: number) => void
}
