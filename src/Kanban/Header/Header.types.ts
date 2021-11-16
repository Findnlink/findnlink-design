export interface HeaderProps {
  text: string
  itemCount: number
  color: string
  dragHandleProps: any
  _deleteColumn: (columnIndex: number) => void
  _editColumn?: (columnIndex: number, columnId: string) => void
  columnIndex: number
  isDragging?: boolean
  i18n?: { addNew: string; remove: string; edit: string }
}
