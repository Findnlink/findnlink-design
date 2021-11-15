export interface HeaderProps {
  text: string
  itemCount: number
  color: string
  dragHandleProps: any
  _deleteColumn: (columnIndex: number) => void
  columnIndex: number
  isDragging?: boolean
}
