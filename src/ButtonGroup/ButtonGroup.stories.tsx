import React, { useState } from 'react'
import { ButtonGroup } from './ButtonGroup'

export default {
  title: 'ButtonGroup',
}

export const Button_Group = () => {
  const [value, setValue] = useState('4')
  return (
    <ButtonGroup scale="l" value={value} setValue={setValue} buttons={['1', '2', '3', '4', '5']} />
  )
}
