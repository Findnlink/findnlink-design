export interface DropDownItemProps {
  children: any
  disabled?: boolean
  selected?: number
}

export interface DropDownProps {
  items: DropDownItemProps[]
}
