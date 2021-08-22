import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button } from './Button'
import { Props } from './Button.types'
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

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})

Primary.args = {
  children: 'Primary',
  primary: true,
  onClick: action('primary click'),
}
