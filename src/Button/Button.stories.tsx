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

const Template: Story<ButtonProps> = (args) => <Button {...args}>Default</Button>

Template.parameters = {
  jest: ['Button.test.tsx'],
}

export const Default = Template.bind({})
export const Primary = Template.bind({})
export const Disabled = Template.bind({})
export const Small = Template.bind({})
export const Medium = Template.bind({})
export const Large = Template.bind({})
export const ExtraLarge = Template.bind({})

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

Small.args = {
  children: 'Small',
  onClick: action('Small click'),
  scale: 's',
}

Medium.args = {
  children: 'Medium',
  onClick: action('Medium click'),
  scale: 'm',
}

Large.args = {
  children: 'Large',
  onClick: action('Large click'),
  scale: 'l',
}

ExtraLarge.args = {
  children: 'XL',
  //onClick: action('Extra Large click'),
  scale: 'xl',
  weight: 'bold',
}
