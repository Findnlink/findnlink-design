import Column from '../Column/Column.types'

export interface BoardProps {
  columns: Column[]
  setColumns: (prev: any) => void
  title: string
  projectId: string
  _id?: string
  createdAt?: string
  updatedAt?: string
  i18n: { addNew: string }
}
