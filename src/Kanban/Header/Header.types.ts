export interface HeaderProps {
  text: string
  itemCount: number
  color: string
  dragHandleProps: any
  deleteColumn: (columnIndex: number) => void
  columnIndex: number
}
