import React, { useState } from 'react'
import { Input } from './Input'
import { Meta, Story } from '@storybook/react'
import { InputProps } from './Input.types'
import { action } from '@storybook/addon-actions'

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta

const Template: Story<InputProps> = (args) => {
  const [data, setData] = useState('')
  function handleChange(event) {
    const { value } = event.target
    setData(() => value)
  }
  return <Input {...args} value={data} onChange={handleChange} placeholder="Default" />
}

Template.parameters = {
  jest: ['Button.test.tsx'],
}

export const Default = Template.bind({})

// export const Error = () => {
//   const [data, setData] = useState('')
//   function handleChange(event) {
//     const { value } = event.target
//     setData(() => value)
//   }
//   return <Input value={data} invalid type={'password'} placeholder="Password" />
// }

// export const Password = () => {
//   const [data, setData] = useState('')
//   function handleChange(event) {
//     const { value } = event.target
//     setData(() => value)
//   }
//   return <Input value={data} type={'password'} placeholder="Password" />
// }

// export const Limit = () => {
//   const [data, setData] = useState('')
//   function handleChange(event) {
//     const { value } = event.target
//     setData(() => value)
//   }
//   return <Input placeholder="Limit" limit value={data} onChange={handleChange} maxLength={10} />
// }
