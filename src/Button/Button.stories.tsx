import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button } from './Button'
import { ButtonProps } from './Button.types'
import { action } from '@storybook/addon-actions'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: { defaultValue: 'Default' },
  },
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

Template.parameters = {
  jest: ['Button.test.tsx'],
}

export const Default = Template.bind({})

export const Primary = Template.bind({})

export const Disabled = Template.bind({})

Primary.args = {
  children: 'Primary',
  primary: true,
  onClick: action('primary click'),
}

Disabled.args = {
  children: 'Disabled',
  disabled: true,
  onClick: action('disabled click'),
}
