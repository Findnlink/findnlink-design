import Column from '../Column/Column.types'

export interface BoardProps {
  columns: Column[]
  title: string
  projectId: string
  _id: string
  createdAt: string
  updatedAt: string
  i18n: { addNew: string }
}
